import Image from 'next/image';

const Empresa = () => {
  return (
    <section id="empresa" className="relative section-spacing bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/img/celularn1.png" 
                    alt="Mobile App Demo" 
                    width={300} 
                    height={500} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/img/celularn2.png" 
                    alt="Mobile App Demo" 
                    width={300} 
                    height={500} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-2xl border border-enterprise-gray-100 flex flex-col items-center animate-pulse">
              <span className="text-5xl font-black text-primary leading-none">15+</span>
              <span className="text-xs font-bold text-enterprise-gray-600 uppercase tracking-tighter mt-2">Años de Éxito</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Sobre Nosotros</span>
              <h2 className="text-4xl md:text-5xl font-black text-enterprise-gray-900 mb-6 leading-tight">
                Impulsando el desarrollo en las <br />
                <span className="text-primary underline decoration-primary/20 decoration-4 underline-offset-8">Tecnologías de la Información</span>
              </h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mb-10"></div>
            </div>
            
            <p className="text-xl text-enterprise-gray-600 leading-relaxed font-medium mb-8">
              Desde nuestros inicios en el 2009, BeeMovil viene desarrollando software y servicios a las empresas operadoras del sector de telecomunicaciones.
            </p>
            
            <div className="bg-enterprise-gray-50 border-l-4 border-primary p-8 rounded-r-2xl italic text-lg text-enterprise-gray-900 font-semibold shadow-sm">
              "Combinamos metodología y experiencia de actualidad, ofrecemos soluciones de alta calidad para un mercado en constante evolución."
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-black text-enterprise-gray-900">2009</h4>
                <p className="text-sm font-bold text-enterprise-gray-600 uppercase tracking-widest mt-1">Fundación</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-enterprise-gray-900">100%</h4>
                <p className="text-sm font-bold text-enterprise-gray-600 uppercase tracking-widest mt-1">Compromiso</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Empresa;
