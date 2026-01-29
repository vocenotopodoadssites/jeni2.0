
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, ShieldCheck, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#C9A24D]" />,
      title: "Atendimento direto com a advogada",
      description: "Você fala diretamente com quem cuidará do seu caso, sem intermediários, garantindo atenção total aos detalhes."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#C9A24D]" />,
      title: "Transparência e clareza",
      description: "Orientação jurídica explicada de forma clara, permitindo que você tome decisões conscientes e seguras."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#C9A24D]" />,
      title: "Estratégias personalizadas",
      description: "Cada caso é único. Elaboramos caminhos jurídicos específicos para suas necessidades e objetivos."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#C9A24D]" />,
      title: "Agilidade e comprometimento",
      description: "Foco na resolução eficiente dos conflitos, honrando prazos e mantendo você sempre atualizado."
    }
  ];

  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Por que escolher nosso escritório?</h2>
          <div className="w-16 h-1 bg-[#C9A24D] mx-auto mb-6"></div>
          <p className="text-gray-400">Compromisso com a excelência técnica e o acolhimento humano em cada consulta.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-white/5 hover:border-[#C9A24D]/30 transition-all duration-500 bg-[#161616]/50 rounded-sm group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
              <h3 className="text-xl font-serif text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
