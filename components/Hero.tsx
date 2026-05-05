import Link from 'next/link';

const Hero = () => {
  return (
    <header id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-enterprise-gray-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-95 transition-opacity duration-1000 saturate-[1.4] brightness-[1.15]"
          style={{ backgroundImage: "url('/img/hero-bg.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-enterprise-gray-900 via-enterprise-gray-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-enterprise-gray-900 via-transparent to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/40 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">Expertos en tecnologías de la información</span>
          </div>
          
          <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black mb-8 leading-[1.05] animate-fade-in-up delay-100 tracking-tighter drop-shadow-2xl">
            Consulta con <br />
            <span className="text-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">Nosotros</span>
          </h1>
          
          <p className="text-white/90 text-xl md:text-3xl mb-12 max-w-2xl leading-relaxed animate-fade-in-up delay-200 font-bold drop-shadow-lg">
            Grupo de profesionales de alto nivel. Transforma tu visión tecnológica en realidades empresariales escalables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">
            <Link 
              href="#empresa" 
              className="px-10 py-5 bg-primary text-white font-extrabold rounded-2xl shadow-2xl shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Comenzar Ahora
            </Link>
            <Link 
              href="#servicios" 
              className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-center"
            >
              Nuestros Servicios
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Stats or Visual elements could go here */}
      <div className="absolute bottom-12 left-6 right-6 flex justify-center animate-bounce">
        <Link href="#empresa" className="p-3 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
