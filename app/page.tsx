'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Empresa from '@/components/Empresa';
import DesarrolloMovil from '@/components/DesarrolloMovil';
import DesarrolloWeb from '@/components/DesarrolloWeb';
import Integracion from '@/components/Integracion';
import Tecnologia from '@/components/Tecnologia';
import Outsourcing from '@/components/Outsourcing';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
        <div className="flex space-x-2">
          {[...Array(4)].map((_, i) => (
            <span 
              key={i} 
              className="w-4 h-4 bg-primary rounded-full animate-bounce" 
              style={{ animationDelay: `${i * 0.1}s` }}
            ></span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Empresa />
      <DesarrolloMovil />
      <DesarrolloWeb />
      <Integracion />
      <Tecnologia />
      <Outsourcing />
      <Contacto />
      <Footer />
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </main>
  );
}
