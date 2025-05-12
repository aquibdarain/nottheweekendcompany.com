import React, { useEffect } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import { ThemeProvider } from './context/ThemeContext';
import './styles/animations.css';

function App() {
  useEffect(() => {
    document.title = "NotTheWeekendCompany | Professional IT Solutions";
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}

export default App;