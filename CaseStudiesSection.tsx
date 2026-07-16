import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Mail, Phone, MapPin, Calendar, Clock, DollarSign } from 'lucide-react';
import { AureonLogo } from './AureonLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Brand Strategy',
    budget: '₹8,50,000 - ₹18,00,000',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate luxury API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Brand Strategy',
      budget: '₹8,50,000 - ₹18,00,000',
      details: '',
    });
    setIsSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            id="modal-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-4xl bg-dark-panel/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[850px]"
            id="consultation-form-card"
          >
            {/* Left Info Panel (Luxury Branding) */}
            <div className="w-full md:w-5/12 bg-black p-8 flex flex-col justify-between border-r border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none" />
              {/* Floating ambient sphere */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <AureonLogo size={36} showText={true} glowing={false} />
                
                <h3 className="font-serif text-2xl text-white mt-12 leading-tight tracking-wide">
                  Let's Create <br />
                  <span className="text-gold font-serif italic">Something Iconic.</span>
                </h3>
                <p className="font-sans text-xs text-silver mt-4 leading-relaxed text-opacity-80">
                  Aureon Studios partners with high-vision businesses to architect brands that command absolute authority. 
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-silver">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-sans text-xs tracking-wider text-opacity-90">inquiries@aureon.studio</span>
                  </div>
                  <div className="flex items-center gap-3 text-silver">
                    <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-sans text-xs tracking-wider text-opacity-90">+91 91100 XXXXX</span>
                  </div>
                  <div className="flex items-center gap-3 text-silver">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="font-sans text-xs tracking-wider text-opacity-90">Mumbai · New Delhi · Bengaluru</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 border-t border-white/5 pt-6 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span className="font-mono text-[9px] text-gold tracking-widest uppercase">Response Framework</span>
                </div>
                <p className="font-sans text-[10px] text-silver text-opacity-70 leading-normal">
                  Our founder Parth Mehrotra and senior partners review all briefs. Expect a private communication within 4 business hours.
                </p>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="w-full md:w-7/12 p-8 overflow-y-auto flex flex-col justify-center">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 text-silver hover:text-white transition-all cursor-pointer z-10"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <div className="mb-6">
                      <span className="font-mono text-[10px] tracking-widest text-gold uppercase">Consultation Suite</span>
                      <h2 className="font-serif text-2xl text-white mt-1">Briefing Intake Form</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-sans text-[10px] tracking-wider text-silver text-opacity-80 uppercase font-medium">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Elena Rostova"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors font-sans placeholder-white/20"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-sans text-[10px] tracking-wider text-silver text-opacity-80 uppercase font-medium">Company Name</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Maison Luxe"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors font-sans placeholder-white/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-sans text-[10px] tracking-wider text-silver text-opacity-80 uppercase font-medium">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="elena@maisonluxe.com"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors font-sans placeholder-white/20"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-sans text-[10px] tracking-wider text-silver text-opacity-80 uppercase font-medium">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors font-sans placeholder-white/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-sans text-[10px] tracking-wider text-silver text-opacity-80 uppercase font-medium">Primary Focus *</label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors font-sans"
                          >
                            <option value="Brand Strategy" className="bg-dark-panel">Brand Strategy & Positioning</option>
                            <option value="Brand Identity" className="bg-dark-panel">Brand Visual Identity Suite</option>
                            <option value="Website Development" className="bg-dark-panel">3D Interactive Website Dev</option>
                            <option value="Cinematic Media" className="bg-dark-panel">Cinematic Video Production</option>
                            <option value="AI Automation" className="bg-dark-panel">AI Workflow Automation</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-sans text-[10px] tracking-wider text-silver text-opacity-80 uppercase font-medium">Budget Scope *</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold transition-colors font-sans"
                          >
                            <option value="₹4,50,000 - ₹8,50,000" className="bg-dark-panel">₹4,50,000 - ₹8,50,000</option>
                            <option value="₹8,50,000 - ₹18,00,000" className="bg-dark-panel">₹8,50,000 - ₹18,00,000</option>
                            <option value="₹18,00,000+" className="bg-dark-panel">₹18,00,000+ (Enterprise Retainer)</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[10px] tracking-wider text-silver text-opacity-80 uppercase font-medium">Brief Description of Your Vision</label>
                        <textarea
                          rows={3}
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder="What makes your mission unique? Detail any major benchmarks, deadlines, or desired features..."
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-xs text-white focus:outline-none focus:border-gold transition-colors font-sans resize-none placeholder-white/20"
                        />
                      </div>

                      <div className="pt-2 text-left">
                        <span className="font-sans text-[9px] text-silver text-opacity-50 block mb-3">
                          * Secure Client Portal. All submission data is encrypted and strictly confidential. Statistics are illustrative.
                        </span>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 bg-gradient-to-r from-gold via-[#e5c158] to-gold hover:from-[#aa820a] hover:to-[#aa820a] text-black font-semibold text-xs tracking-widest uppercase rounded-lg transition-all duration-300 shadow-lg hover:shadow-gold/15 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                          id="submit-consultation-btn"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                              <span>Securing Channels...</span>
                            </>
                          ) : (
                            <span>Initiate Connection</span>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 h-full"
                  >
                    <div className="w-16 h-16 bg-gold/10 border border-gold/40 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                      <Check className="w-8 h-8 text-gold" />
                    </div>

                    <span className="font-mono text-[10px] tracking-widest text-gold uppercase mb-2">Secure Connection Formed</span>
                    <h2 className="font-serif text-3xl text-white mb-4 leading-tight">Thank You, {formData.name}</h2>
                    
                    <p className="font-sans text-xs text-silver max-w-md leading-relaxed text-opacity-80 mb-8">
                      Your briefing dossier has been successfully synchronized and dispatched to the desk of our founder, <span className="text-white">Parth Mehrotra</span>. We have set aside slot allocation parameters for your project. An executive partner will contact you directly.
                    </p>

                    <div className="flex gap-4">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-lg border border-white/10 text-[10px] font-sans tracking-widest uppercase text-silver hover:text-white hover:border-white/20 transition-all cursor-pointer"
                        id="new-submission-btn"
                      >
                        Submit New Brief
                      </button>
                      <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-lg bg-gold text-[10px] font-sans font-bold tracking-widest uppercase text-black hover:bg-gold-hover transition-all cursor-pointer"
                        id="success-close-btn"
                      >
                        Return to Experience
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
