
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, onNavigateHome }) => {
  const whatsappUrl = "https://wa.me/554195025236";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-4 border-[#2D4F3C]/10 shadow-sm' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={onNavigateHome} className="flex flex-col text-left focus:outline-none group">
          <span className="text-2xl font-serif font-bold tracking-tight text-[#1A1A1A] leading-tight group-hover:text-[#2D4F3C] transition-colors">
            JENI SANTOS
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#2D4F3C] font-semibold">
            Advocacia & Consultoria
          </span>
        </button>

        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
          <button onClick={onNavigateHome} className="text-[#4A4A4A] hover:text-[#2D4F3C] transition-colors">Início</button>
          <a href="#atuacao" className="text-[#4A4A4A] hover:text-[#2D4F3C] transition-colors">Áreas de Atuação</a>
          <a href="#sobre" className="text-[#4A4A4A] hover:text-[#2D4F3C] transition-colors">Sobre</a>
          <a 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#2D4F3C] text-white hover:bg-[#1E3528] transition-all duration-300 rounded-sm shadow-md"
          >
            Fale com a Advogada
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
