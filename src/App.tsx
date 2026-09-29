import React from 'react';
import { Header } from './components/Header';
import { SideNavigation } from './components/SideNavigation';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { Difference } from './components/Difference';
import { Opportunity } from './components/Opportunity';
import { JoinTeam } from './components/JoinTeam';
import { Clients } from './components/Clients';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div id="top" className="min-h-screen bg-white text-slate-800 flex flex-col antialiased selection:bg-emerald-500/20 selection:text-slate-900 relative">
      <Header />
      <SideNavigation />
      <main className="flex-grow">
        <Hero />
        <WhoWeAre />
        <Difference />
        <Opportunity />
        <JoinTeam />
        <Clients />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
