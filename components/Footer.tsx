
import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin, Facebook, Globe } from 'lucide-react';

interface FooterProps {
  onNavigateHome: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  const whatsappNumber = "+55 41 9502-5236";
  const instagramUrl = "https://www.instagram.com/jeni_advogadaimobiliaria/";
  const facebookUrl = "https://www.facebook.com/jeni.advogada/";
  const tiktokUrl = "https://www.tiktok.com/@jeniadvogada";

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#E6DED1]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <button onClick={onNavigateHome} className="flex flex-col mb-8 text-left group">
              <span className="text-2xl font-serif font-bold tracking-tight text-[#1A1A1A] leading-tight group-hover:text-[#2D4F3C] transition-colors">
                JENI SANTOS
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#2D4F3C] font-bold">
                Advocacia & Consultoria
              </span>
            </button>
            <p className="text-[#8C7E6A] text-sm leading-relaxed mb-8">
              Soluções jurídicas exclusivas pautadas pela transparência, ética e compromisso. Atuando desde 2010 com excelência técnica.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, url: instagramUrl },
                { icon: <Facebook size={20} />, url: facebookUrl },
                { icon: <Globe size={20} />, url: tiktokUrl }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#E6DED1] flex items-center justify-center text-[#8C7E6A] hover:border-[#2D4F3C] hover:text-[#2D4F3C] hover:bg-[#2D4F3C]/5 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#1A1A1A] font-serif text-xl mb-8">Navegação</h4>
            <ul className="space-y-5 text-sm font-medium text-[#8C7E6A]">
              <li><button onClick={onNavigateHome} className="hover:text-[#2D4F3C] transition-colors">Início</button></li>
              <li><a href="#atuacao" className="hover:text-[#2D4F3C] transition-colors">Áreas de Atuação</a></li>
              <li><a href="#sobre" className="hover:text-[#2D4F3C] transition-colors">Sobre Jeni Santos</a></li>
              <li><a href="#" className="hover:text-[#2D4F3C] transition-colors">Artigos & Dicas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1A1A1A] font-serif text-xl mb-8">Contato</h4>
            <ul className="space-y-5 text-sm text-[#8C7E6A]">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2D4F3C]/5 flex items-center justify-center text-[#2D4F3C]">
                  <Phone size={16} />
                </div>
                <span className="font-bold">{whatsappNumber}</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2D4F3C]/5 flex items-center justify-center text-[#2D4F3C]">
                  <Mail size={16} />
                </div>
                <span>contato@jenisantos.adv.br</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2D4F3C]/5 flex items-center justify-center text-[#2D4F3C] shrink-0">
                  <MapPin size={16} />
                </div>
                <span>Matinhos - Paraná<br/><span className="text-[10px] opacity-70">Atendimento presencial e online</span></span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1A1A1A] font-serif text-xl mb-8">OAB/PR</h4>
            <div className="p-6 bg-[#F7F4F0] border border-[#E6DED1] rounded-sm">
              <span className="text-xs uppercase tracking-widest font-bold text-[#2D4F3C] block mb-2">Registro Profissional</span>
              <p className="text-lg font-serif text-[#1A1A1A] mb-4">PR 52.884</p>
              <p className="text-[10px] text-[#8C7E6A] uppercase tracking-widest leading-relaxed">
                Advocacia comprometida com o Código de Ética e Disciplina da OAB.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#E6DED1] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#8C7E6A] text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Jeni Santos Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-[#8C7E6A]">
            <a href="#" className="hover:text-[#2D4F3C]">Termos de Uso</a>
            <a href="#" className="hover:text-[#2D4F3C]">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
