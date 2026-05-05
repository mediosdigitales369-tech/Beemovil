'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Empresa', href: '#empresa' },
    { 
      name: 'Servicios', 
      href: '#', 
      dropdown: [
        { name: 'Desarrollo Movil', href: '#tecnologia' },
        { name: 'Desarrollo Web', href: '#servicios' },
        { name: 'Integración de Aplicaciones', href: '#integracion' },
      ]
    },
    { name: 'Tecnología', href: '#numbers' },
    { name: 'Outsourcing', href: '#outsourcing' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src={isScrolled ? "/img/logo.png" : "/img/logo-alt.png"} 
            alt="BeeMovil Logo" 
            width={180} 
            height={56} 
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                href={link.href} 
                className={`text-[13px] font-bold uppercase tracking-widest transition-colors ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                } hover:text-primary flex items-center gap-1`}
              >
                {link.name}
                {link.dropdown && (
                  <svg className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              
              {link.dropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-60 bg-white shadow-2xl rounded-2xl border border-slate-100 overflow-hidden py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {link.dropdown.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className="block px-6 py-3 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <Link 
            href="#contacto" 
            className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/30 scale-105' 
                : 'bg-white text-primary hover:bg-slate-50 shadow-2xl'
            }`}
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden focus:outline-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[60] transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <Image src="/img/logo.png" alt="Logo" width={140} height={40} className="h-8 w-auto object-contain" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-2xl font-black text-slate-900 uppercase tracking-widest"
                  onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="mt-4 pl-6 space-y-4 flex flex-col border-l-2 border-primary/20">
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="text-lg text-slate-600 font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="#contacto" 
              className="mt-8 bg-primary text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
