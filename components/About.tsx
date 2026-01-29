
import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  onNavigateToAbout: () => void;
}

const About: React.FC<AboutProps> = ({ onNavigateToAbout }) => {
  return (
    <section id="sobre" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 relative"
          >
            <div className="absolute inset-0 border-2 border-[#2D4F3C]/20 translate-x-6 translate-y-6 -z-10 rounded-sm"></div>
            <img 
              src="https://i.imgur.com/5GyYtci.jpeg" 
              alt="Dra. Jeni Santos" 
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            <span className="text-[#2D4F3C] text-sm uppercase tracking-[0.3em] font-bold block mb-4">A Advogada</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-8">Dra. Jeni Santos</h2>
            <div className="space-y-6 text-[#4A4A4A] leading-relaxed font-light text-xl">
              <p>
                Especialista em Direito Cível e Imobiliário com mais de 13 anos de atuação profissional em Matinhos/PR.
              </p>
              <p>
                Minha missão é oferecer uma advocacia humanizada, onde a técnica jurídica caminha lado a lado com a escuta atenta aos anseios de cada cliente.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <button 
                onClick={onNavigateToAbout}
                className="px-10 py-4 bg-[#2D4F3C] text-white font-bold hover:bg-[#1E3528] transition-all duration-300 rounded-sm shadow-lg"
              >
                Trajetória Completa
              </button>
              <div className="flex items-center gap-4 text-[#8C7E6A] text-sm font-semibold uppercase tracking-widest px-4">
                OAB/PR 52.884
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[#E6DED1] pt-12">
              <div>
                <span className="text-[#2D4F3C] text-xs uppercase tracking-widest font-bold block mb-2">Atuação</span>
                <span className="text-[#1A1A1A] font-medium">Matinhos e Região</span>
              </div>
              <div>
                <span className="text-[#2D4F3C] text-xs uppercase tracking-widest font-bold block mb-2">Formação</span>
                <span className="text-[#1A1A1A] font-medium">Especialista em Imobiliário</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
