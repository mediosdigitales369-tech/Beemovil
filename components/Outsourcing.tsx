import Link from 'next/link';

const Outsourcing = () => {
  return (
    <section id="outsourcing" className="relative py-48 overflow-hidden bg-enterprise-gray-900">
      {/* High-End Background Treatment */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay scale-110"
          style={{ backgroundImage: "url('/img/background5b.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-enterprise-gray-900 via-transparent to-enterprise-gray-900"></div>
        
        {/* Dynamic Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(45deg, #ff9201 1px, transparent 1px), linear-gradient(-45deg, #ff9201 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container mx-auto px-6 content-relative">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-5 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 text-primary font-black text-xs uppercase tracking-[0.3em] mb-10">
            Modelos de Trabajo
          </span>
          
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[1.1]">
            Potencia tu equipo con <br />
            <span className="text-gradient">Outsourcing Elite</span>
          </h2>
          
          <p className="text-white/70 text-xl md:text-3xl leading-relaxed font-medium max-w-4xl mx-auto mb-16">
            Beemovil brinda un centro de desarrollo dedicado a proveer soluciones basadas en la productividad, generando relaciones estratégicas exclusivas a largo plazo.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="#contacto" 
              className="px-12 py-6 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/40 hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 text-lg uppercase tracking-widest"
            >
              Consultar Modelo
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
};

export default Outsourcing;
