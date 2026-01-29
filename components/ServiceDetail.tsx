
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, MessageSquare } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

const serviceContent: Record<string, { title: string; subtitle: string; text: string; points: string[]; image: string }> = {
  imobiliario: {
    title: "Direito Imobiliário",
    subtitle: "Proteção Patrimonial e Segurança Jurídica",
    text: "O mercado imobiliário exige cautela absoluta. Seja na compra da casa própria ou no investimento em grandes áreas, um erro contratual pode significar a perda de anos de economia. Oferecemos assessoria estratégica para que seu patrimônio esteja sempre blindado de riscos e nulidades.",
    points: [
      "Análise de riscos em contratos de compra e venda",
      "Assessoria em locações residenciais e comerciais",
      "Proteção contra cláusulas abusivas",
      "Consultoria em leilões de imóveis",
      "Ações de despejo e reintegração de posse"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
  },
  regularizacao: {
    title: "Regularização Imobiliária",
    subtitle: "Segurança Jurídica para sua Propriedade",
    text: "Um imóvel irregular é um patrimônio em risco. Além de dificultar a venda e impedir financiamentos, a falta de documentação adequada traz insegurança jurídica. Atuamos para legalizar sua propriedade de forma definitiva, resolvendo pendências históricas.",
    points: [
      "Usucapião Judicial e Extrajudicial",
      "Retificação de registro e área",
      "Desmembramento e unificação de lotes",
      "Regularização de escrituras e registros",
      "Baixa de hipotecas e gravames"
    ],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000"
  },
  familia: {
    title: "Direito de Família",
    subtitle: "Equilíbrio e Acolhimento em Conflitos",
    text: "Conflitos familiares exigem mais do que conhecimento jurídico; exigem sensibilidade e ética. Nossa atuação prioriza o diálogo e a proteção dos vulneráveis, buscando resoluções que preservem a dignidade e o patrimônio da família de forma ética.",
    points: [
      "Divórcio consensual e litigioso",
      "Pensão alimentícia e revisional de alimentos",
      "Guarda de filhos e regime de convivência",
      "União Estável: Reconhecimento e Dissolução",
      "Planejamento sucessório familiar"
    ],
    image: "https://images.unsplash.com/photo-1591115765373-520b7a217294?auto=format&fit=crop&q=80&w=1000"
  },
  previdenciario: {
    title: "Direito Previdenciário",
    subtitle: "Garantindo o Descanso que Você Merece",
    text: "O sistema previdenciário é complexo e sofre constantes mudanças. Atuamos para garantir que você receba o melhor benefício possível, analisando cada detalhe da sua história laboral para conquistar sua aposentadoria com segurança e rapidez.",
    points: [
      "Planejamento previdenciário completo",
      "Aposentadoria por idade, tempo e especial",
      "Benefícios por incapacidade (Auxílio-doença/BPC)",
      "Revisão de benefícios concedidos",
      "Recursos administrativos e judiciais contra o INSS"
    ],
    image: "https://images.unsplash.com/photo-1573163276739-12b901ad3292?auto=format&fit=crop&q=80&w=1000"
  },
  inventarios: {
    title: "Inventários",
    subtitle: "Rapidez e Transparência na Partilha",
    text: "A perda de um familiar é um momento doloroso que não deve ser agravado por burocracia excessiva. Facilitamos o processo de inventário para que a partilha seja justa, rápida e com o menor custo tributário possível.",
    points: [
      "Inventário Extrajudicial (Cartório)",
      "Inventário Judicial complexo",
      "Planejamento tributário (ITCMD)",
      "Mediação de conflitos entre herdeiros",
      "Alvarás judiciais para liberação de valores"
    ],
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000"
  },
  contratos: {
    title: "Contratos",
    subtitle: "Blindagem Jurídica para seus Acordos",
    text: "Um contrato bem redigido é a melhor forma de evitar processos judiciais futuros. Elaboramos instrumentos jurídicos personalizados que refletem exatamente o que foi acordado, prevendo riscos e protegendo seus interesses legítimos.",
    points: [
      "Elaboração de contratos personalizados",
      "Análise técnica de contratos de terceiros",
      "Contratos de prestação de serviços",
      "Acordos de sócios e parcerias",
      "Termos de confidencialidade e não concorrência"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
  },
  "sobre-full": {
    title: "Trajetória de Jeni Santos",
    subtitle: "Experiência e Ética Profissional",
    text: "Advogada com sede em Matinhos/PR, Jeni Santos construiu sua carreira pautada na confiança e na excelência. Com mais de uma década de experiência, tornou-se referência em Direito Imobiliário e Cível na região costeira do Paraná, sempre buscando soluções inovadoras e humanas para seus clientes.",
    points: [
      "Pós-graduada em Direito Imobiliário",
      "Especialista em Planejamento Sucessório",
      "Membro ativo da comunidade jurídica de Matinhos",
      "Atendimento trilíngue disponível sob demanda",
      "Foco total em resultados práticos e éticos"
    ],
    image: "https://i.imgur.com/5GyYtci.jpeg"
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack }) => {
  const content = serviceContent[serviceId];
  const whatsappUrl = "https://wa.me/554195025236";

  if (!content) return null;

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#2D4F3C] hover:text-[#1E3528] transition-colors mb-16 group"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-[0.2em] text-xs font-bold">Voltar ao Início</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2D4F3C] text-sm uppercase tracking-[0.3em] font-bold block mb-6">{content.subtitle}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-10 leading-tight">{content.title}</h1>
            
            <p className="text-[#4A4A4A] text-xl leading-relaxed mb-12 font-light">
              {content.text}
            </p>

            <div className="space-y-8 mb-16">
              <h3 className="text-[#1A1A1A] font-serif text-2xl border-l-4 border-[#2D4F3C] pl-4">Destaques da nossa atuação:</h3>
              <ul className="grid grid-cols-1 gap-5">
                {content.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#4A4A4A] text-lg">
                    <CheckCircle size={22} className="text-[#2D4F3C] shrink-0 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#2D4F3C] text-white font-bold hover:bg-[#1E3528] transition-all duration-300 rounded-sm inline-flex items-center justify-center gap-3 shadow-2xl"
              >
                <MessageSquare size={22} />
                Falar com a Advogada
              </a>
              <button 
                onClick={onBack}
                className="px-10 py-5 border-2 border-[#E6DED1] text-[#1A1A1A] hover:border-[#2D4F3C] hover:text-[#2D4F3C] transition-all duration-300 rounded-sm font-bold"
              >
                Outras Áreas
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative sticky top-32"
          >
            <div className="absolute inset-0 border-2 border-[#2D4F3C]/10 translate-x-6 translate-y-6 -z-10 rounded-sm" />
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <img 
                src={content.image} 
                alt={content.title} 
                className="w-full h-auto object-cover grayscale-0 hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <section className="bg-white py-24 mt-20 border-t border-[#E6DED1]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-serif text-[#1A1A1A] mb-8">Agende sua Consulta</h2>
          <p className="text-[#4A4A4A] text-lg mb-12 leading-relaxed">
            Muitos problemas jurídicos podem ser evitados com uma orientação preventiva. Proteja seus direitos hoje mesmo.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#2D4F3C] text-2xl font-serif border-b-2 border-[#2D4F3C] pb-2 hover:text-[#1E3528] hover:border-[#1E3528] transition-all"
          >
            Clique aqui para iniciar sua orientação no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
