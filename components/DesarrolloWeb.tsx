import { Cloud, Scaling, Zap, Cpu, Brain, Bot, Database, Code2 } from 'lucide-react';

const DesarrolloWeb = () => {
  const features = [
    { 
      text: 'Inteligencia Artificial', 
      icon: <Brain className="w-8 h-8 text-primary" />, 
      desc: 'Implementamos soluciones de Machine Learning y IA Generativa para optimizar la toma de decisiones.' 
    },
    { 
      text: 'Automatización de Procesos', 
      icon: <Bot className="w-8 h-8 text-primary" />, 
      desc: 'RPA y flujos de trabajo inteligentes para maximizar la eficiencia operativa de su empresa.' 
    },
    { 
      text: 'SAP R/3 & ERP', 
      icon: <Database className="w-8 h-8 text-primary" />, 
      desc: 'Consultoría e implementación de proyectos complejos con SAP R/3 y sistemas ERP de última generación.' 
    },
    { 
      text: 'Next.js & React Expert', 
      icon: <Code2 className="w-8 h-8 text-primary" />, 
      desc: 'Desarrollo de interfaces de alto rendimiento con las tecnologías web más avanzadas del mercado.' 
    },
    { 
      text: 'Integración Cloud', 
      icon: <Cloud className="w-8 h-8 text-primary" />, 
      desc: 'Despliegues escalables y seguros en infraestructuras AWS, Azure y Google Cloud.' 
    },
    { 
      text: 'Arquitectura Microservicios', 
      icon: <Cpu className="w-8 h-8 text-primary" />, 
      desc: 'Sistemas resilientes y modulares que permiten una evolución tecnológica constante.' 
    }
  ];

  return (
    <section id="servicios" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header Area */}
          <div className="w-full lg:w-1/3">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Tecnología de Vanguardia</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Desarrollo de <br />
              <span className="text-primary">Sistemas TI</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mb-10"></div>
            
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                En BeeMovil incorporamos conceptos de TI de última tecnología para transformar su negocio.
              </p>
              <p className="p-8 bg-slate-50 rounded-3xl border-l-4 border-primary text-slate-900 font-bold italic shadow-sm">
                Desarrollamos proyectos de alta complejidad con un enfoque en la innovación constante y la excelencia técnica.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {item.text}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesarrolloWeb;
