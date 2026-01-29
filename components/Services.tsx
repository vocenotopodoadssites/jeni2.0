
import React from 'react';
import { motion } from 'framer-motion';
import { Home, FileText, Users, Landmark, Scale, Shield } from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const services = [
    {
      id: "imobiliario",
      icon: <Home className="w-6 h-6" />,
      title: "Direito Imobiliário",
      description: "Assessoria completa em compra, venda e locação, garantindo segurança máxima em seus negócios."
    },
    {
      id: "regularizacao",
      icon: <Shield className="w-6 h-6" />,
      title: "Regularização Imobiliária",
      description: "Regularize sua propriedade (Usucapião, Registros) e valorize seu patrimônio de forma definitiva."
    },
    {
      id: "familia",
      icon: <Users className="w-6 h-6" />,
      title: "Direito de Família",
      description: "Divórcios, pensões e guardas tratados com a sensibilidade e o rigor técnico que sua família merece."
    },
    {
      id: "previdenciario",
      icon: <Landmark className="w-6 h-6" />,
      title: "Direito Previdenciário",
      description: "Planejamento e conquista da melhor aposentadoria. Proteja seu futuro com orientação especializada."
    },
    {
      id: "inventarios",
      icon: <Scale className="w-6 h-6" />,
      title: "Inventários",
      description: "Agilidade e paz na transmissão de herança, reduzindo custos tributários e mediando conflitos."
    },
    {
      id: "contratos",
      icon: <FileText className="w-6 h-6" />,
      title: "Contratos",
      description: "Elaboração e análise técnica de contratos personalizados para prevenir riscos e perdas financeiras."
    }
  ];

  return (
    <section id="atuacao" className="py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">Áreas de Especialidade</h2>
          <div className="w-20 h-1 bg-[#2D4F3C] mx-auto mb-8"></div>
          <p className="text-[#4A4A4A] text-lg font-light leading-relaxed">
            Oferecemos suporte jurídico de alto nível para as questões mais vitais da sua vida patrimonial e familiar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-10 bg-white border border-[#E6DED1] hover:border-[#2D4F3C] transition-all duration-500 rounded-sm cursor-pointer shadow-sm hover:shadow-xl"
              onClick={() => onServiceSelect(service.id)}
            >
              <div className="text-[#2D4F3C] mb-8 inline-block p-4 bg-[#2D4F3C]/5 rounded-sm group-hover:bg-[#2D4F3C] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#2D4F3C] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="inline-flex items-center text-xs uppercase tracking-widest text-[#2D4F3C] font-bold group-hover:gap-3 transition-all">
                Ver Detalhes <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
