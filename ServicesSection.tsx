import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch (e) {
      setIsSupported(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create Scene
    const scene = new THREE.Scene();

    // Create Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // Create WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true, 
      powerPreference: "high-performance" 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Create Central Black Glass Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.6, 64, 64);
    // MeshPhysicalMaterial creates gorgeous glass reflections and metallic shine
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x050505,
      roughness: 0.08,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transmission: 0.35, // Gives glass transparent quality
      thickness: 1.2,
      ior: 1.8, // Index of refraction
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create Gold Metallic Ring (Saturn-like)
    // Inner/outer thickness
    const ringGeometry = new THREE.TorusGeometry(2.6, 0.08, 32, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4AF37, // Luxury Gold
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x221100,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI * 0.35;
    ring.rotation.y = Math.PI * 0.12;
    scene.add(ring);

    // Create Secondary Outer Silver Thin Ring
    const silverRingGeometry = new THREE.TorusGeometry(3.2, 0.02, 16, 120);
    const silverRingMaterial = new THREE.MeshStandardMaterial({
      color: 0xC0C0C0, // Silver
      metalness: 0.95,
      roughness: 0.1,
    });
    const silverRing = new THREE.Mesh(silverRingGeometry, silverRingMaterial);
    silverRing.rotation.x = -Math.PI * 0.25;
    silverRing.rotation.y = -Math.PI * 0.08;
    scene.add(silverRing);

    // Create Floating Gold Particles
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in a shell-like fashion around the sphere
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 3.5; // distance from center

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = (Math.random() - 0.5) * 4.0;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      speeds[i] = 0.01 + Math.random() * 0.02;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 0.045,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Setup Lighting
    // Warm gold ambient lighting
    const ambientLight = new THREE.AmbientLight(0x0a0a0d);
    scene.add(ambientLight);

    // Gold Key Light (Top Right)
    const goldLight = new THREE.DirectionalLight(0xD4AF37, 4.5);
    goldLight.position.set(5, 5, 4);
    scene.add(goldLight);

    // Silver Fill Light (Bottom Left)
    const silverLight = new THREE.DirectionalLight(0xffffff, 2.5);
    silverLight.position.set(-5, -5, 2);
    scene.add(silverLight);

    // Backlight Glow (Point light centered behind sphere)
    const glowLight = new THREE.PointLight(0xD4AF37, 3, 10);
    glowLight.position.set(0, 0, -2);
    scene.add(glowLight);

    // Track mouse coordinates for interactive parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smoothly lerp camera / rotation towards mouse coordinates
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      // Spin Central Glass Sphere
      sphere.rotation.y = elapsedTime * 0.15;
      sphere.rotation.x = elapsedTime * 0.08;
      // Slightly displace sphere on mouse hover
      sphere.position.x = targetX * 0.3;
      sphere.position.y = targetY * 0.3;

      // Orbit Metallic Rings at differing directions and speed
      ring.rotation.z = -elapsedTime * 0.22;
      ring.rotation.x = Math.PI * 0.35 + targetY * 0.2;
      ring.rotation.y = Math.PI * 0.12 + targetX * 0.2;

      silverRing.rotation.z = elapsedTime * 0.12;
      silverRing.rotation.x = -Math.PI * 0.25 - targetY * 0.1;
      silverRing.rotation.y = -Math.PI * 0.08 - targetX * 0.1;

      // Swirl Floating Gold Particles
      const posArray = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Individual particles swirl around y axis
        const xIdx = i * 3;
        const zIdx = i * 3 + 2;

        const px = posArray[xIdx];
        const pz = posArray[zIdx];

        // Apply angular rotation based on distance from center
        const distance = Math.sqrt(px * px + pz * pz);
        const speed = speeds[i] * (2.0 / (distance + 0.5));
        
        const cos = Math.cos(speed);
        const sin = Math.sin(speed);

        posArray[xIdx] = px * cos - pz * sin;
        posArray[zIdx] = px * sin + pz * cos;

        // Wave motion on y coordinate
        posArray[xIdx + 1] += Math.sin(elapsedTime * 0.5 + i) * 0.001;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Camera parallax tilt
      camera.position.x = targetX * 0.8;
      camera.position.y = targetY * 0.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose WebGL resources to prevent memory leaks
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      silverRingGeometry.dispose();
      silverRingMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!isSupported) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-black/40 border border-white/5 rounded-2xl backdrop-blur-sm">
        {/* Elegant Fallback illustration when WebGL is unsupported */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-6">
          <div className="absolute inset-0 bg-gold/10 rounded-full blur-2xl animate-pulse" />
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-gold/40 flex items-center justify-center animate-spin duration-[30s]">
            <div className="w-24 h-24 rounded-full border border-solid border-silver/30 flex items-center justify-center animate-ping duration-[4s]">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-serif text-gold text-lg">A</span>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-lg text-white mb-2">Aureon Studios WebGL Interactive</h3>
        <p className="font-sans text-xs text-silver max-w-xs leading-relaxed text-opacity-80">
          Enabling GPU hardware acceleration in your browser will activate the full interactive 3D spatial canvas.
        </p>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative cursor-grab active:cursor-grabbing" 
      data-cursor="drag"
    />
  );
};
