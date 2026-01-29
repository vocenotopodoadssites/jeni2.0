
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';

const SocialFeed: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/jeni_advogadaimobiliaria/";
  
  return (
    <section className="py-24 bg-[#F7F4F0] border-t border-[#E6DED1]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-sm shadow-sm border border-[#E6DED1] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2D4F3C]/5 rounded-full text-[#2D4F3C] mb-8">
              <Instagram size={40} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-6">
              Conteúdo Jurídico no Instagram
            </h2>
            
            <p className="text-[#4A4A4A] text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Acompanhe dicas diárias, bastidores da advocacia e vídeos explicativos sobre seus direitos diretamente no meu perfil oficial.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-[#2D4F3C] text-white font-bold rounded-full hover:bg-[#1E3528] transition-all shadow-xl inline-flex items-center gap-3 group"
              >
                Ver Reels e Conteúdos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D4F3C] font-bold border-b-2 border-[#2D4F3C] pb-1 hover:text-[#1E3528] hover:border-[#1E3528] transition-all"
              >
                @jeni_advogadaimobiliaria
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
