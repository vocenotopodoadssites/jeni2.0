
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateToAbout: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToAbout }) => {
  const whatsappUrl = "https://wa.me/554195025236";

  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#F7F4F0]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4F0] via-[#F7F4F0]/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Escritório Moderno" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mb-8 leading-tight">
              Segurança jurídica pautada pela <span className="text-[#2D4F3C]">experiência.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#4A4A4A] mb-12 leading-relaxed font-light"
          >
            Atendimento especializado em Matinhos/PR. Protegemos seu patrimônio e sua família com ética, 
            transparência e soluções estratégicas personalizadas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#2D4F3C] text-white font-bold hover:bg-[#1E3528] transition-all duration-300 rounded-sm shadow-xl hover:shadow-[#2D4F3C]/20 text-center"
            >
              Agendar Orientação Jurídica
            </a>
            <button 
              onClick={onNavigateToAbout}
              className="px-10 py-4 border-2 border-[#2D4F3C] text-[#2D4F3C] font-bold hover:bg-[#2D4F3C] hover:text-white transition-all duration-300 rounded-sm text-center"
            >
              Conheça Jeni Santos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
