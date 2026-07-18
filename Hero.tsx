import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Create Scene
    const scene = new THREE.Scene();

    // 2. Create Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // 3. Create Renderer with premium configuration
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Create Luxurious Obsidian Glass Object
    // We use a faceted Icosahedron which creates sharp, beautiful reflections on its edges
    const geometry = new THREE.IcosahedronGeometry(1.8, 1); // Subdivided slightly for beautiful low-poly facets
    
    // Add custom attribute to geometry to animate vertex positions if needed
    // Create physical material for luxury glass/obsidian
    const obsidianMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x050505,
      emissive: 0x000000,
      roughness: 0.08,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transmission: 0.35, // Some light goes through
      ior: 1.65, // Obsidian refraction index
      thickness: 1.5,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
      side: THREE.DoubleSide,
      flatShading: true, // Flat shading gives distinct diamond/mineral facets
    });

    const obsidianMesh = new THREE.Mesh(geometry, obsidianMaterial);
    scene.add(obsidianMesh);

    // 5. Create Subtle Floating Particle System (dust motes)
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;     // X
      positions[i + 1] = (Math.random() - 0.5) * 10; // Y
      positions[i + 2] = (Math.random() - 0.5) * 6;  // Z
      speeds[i / 3] = 0.002 + Math.random() * 0.003;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.025,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });

    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    // 6. Lights
    // Ambient light for general dark volume
    const ambientLight = new THREE.AmbientLight(0x050505, 1);
    scene.add(ambientLight);

    // Key Light (White, sharp spotlight to hit obsidian facets)
    const keyLight = new THREE.SpotLight(0xffffff, 150, 15, Math.PI / 4, 0.5, 1);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Fill Light (Subtle cool grey spotlight)
    const fillLight = new THREE.SpotLight(0xa5a5a5, 80, 15, Math.PI / 4, 0.5, 1);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    // Rim Light (Sharp white to define outlines from behind)
    const rimLight = new THREE.DirectionalLight(0xffffff, 5);
    rimLight.position.set(-2, 3, -4);
    scene.add(rimLight);

    // 7. Mouse and Scroll Tracking for Interactive Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const onMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1]
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    // 8. Animation Loop with smooth lerping
    const clock = new THREE.Clock();
    let animFrameId: number;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuous slow automatic rotation
      obsidianMesh.rotation.y = elapsedTime * 0.12;
      obsidianMesh.rotation.x = elapsedTime * 0.06;

      // Mouse interactive tilt (lerped for fluid spring effect)
      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      obsidianMesh.position.x = targetX * 1.2;
      obsidianMesh.position.y = targetY * 1.2;
      
      // Rotate mesh slightly towards mouse
      obsidianMesh.rotation.z += (targetX * 0.4 - obsidianMesh.rotation.z) * 0.05;

      // React to scroll: move mesh slightly down/up
      obsidianMesh.position.y += -scrollY * 0.0015;

      // Animate particles (drift upwards)
      const particlePositions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        particlePositions[i] += speeds[Math.floor(i / 3)];
        if (particlePositions[i] > 5) {
          particlePositions[i] = -5; // reset back to bottom
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Observer to handle changes dynamically and fluidly
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width: newWidth, height: newHeight } = entries[0].contentRect;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animFrameId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      obsidianMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10 opacity-70 lg:opacity-100" 
      id="three-obsidian-canvas"
    />
  );
};
