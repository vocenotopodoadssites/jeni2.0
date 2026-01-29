
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Inventories from './components/Inventories';
import About from './components/About';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import ServiceDetail from './components/ServiceDetail';
import SocialFeed from './components/SocialFeed';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'service' | 'about-full'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedServiceId]);

  const navigateToService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView('service');
  };

  const navigateToAbout = () => {
    setCurrentView('about-full');
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedServiceId(null);
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      <Header isScrolled={isScrolled} onNavigateHome={navigateToHome} />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onNavigateToAbout={navigateToAbout} />
              <Authority />
              <Benefits />
              <Services onServiceSelect={navigateToService} />
              <Inventories onNavigateToInventories={() => navigateToService('inventarios')} />
              <SocialFeed />
              <About onNavigateToAbout={navigateToAbout} />
            </motion.div>
          )}

          {currentView === 'service' && selectedServiceId && (
            <motion.div
              key={`service-${selectedServiceId}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ServiceDetail serviceId={selectedServiceId} onBack={navigateToHome} />
            </motion.div>
          )}

          {currentView === 'about-full' && (
            <motion.div
              key="about-full"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <ServiceDetail serviceId="sobre-full" onBack={navigateToHome} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigateHome={navigateToHome} />
      <ContactButton />
    </div>
  );
};

export default App;
