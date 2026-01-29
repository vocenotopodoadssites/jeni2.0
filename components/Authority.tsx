
import React from 'react';
import { motion } from 'framer-motion';

const Authority: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#E6DED1]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Anos de Experiência", value: "13+" },
            { label: "Atuação desde", value: "2010" },
            { label: "Foco em Resultados", value: "100%" },
            { label: "Sede em Matinhos", value: "PR" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <span className="text-5xl font-serif text-[#2D4F3C] mb-3 font-bold block group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <p className="text-[#8C7E6A] text-xs uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;
