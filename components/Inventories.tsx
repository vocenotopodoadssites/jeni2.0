
import React from 'react';
import { motion } from 'framer-motion';

interface InventoriesProps {
  onNavigateToInventories: () => void;
}

const Inventories: React.FC<InventoriesProps> = ({ onNavigateToInventories }) => {
  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C9A24D]/5 skew-x-12 transform translate-x-20 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#161616] p-8 md:p-16 border border-[#C9A24D]/20 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-[#C9A24D] text-sm uppercase tracking-widest font-bold mb-4 block">Especialidade em Foco</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Inventários: Segurança e Tranquilidade Familiar</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              A perda de um ente querido é um momento delicado. Nossa missão é conduzir o processo de inventário, seja judicial ou extrajudicial, com o máximo de agilidade e sensibilidade, evitando conflitos desnecessários e garantindo a correta transmissão do patrimônio.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Condução completa do processo",
                "Planejamento para redução de custos tributários",
                "Mediação de conflitos entre herdeiros",
                "Assessoria extrajudicial (em cartório)"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-400 gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A24D]" />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={onNavigateToInventories}
              className="px-8 py-4 bg-[#C9A24D] text-white font-medium hover:bg-[#B38E3F] transition-all duration-300 rounded-sm inline-block shadow-lg"
            >
              Falar sobre um Inventário
            </button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
              alt="Documentos jurídicos elegantes" 
              className="w-full h-[400px] object-cover rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventories;
