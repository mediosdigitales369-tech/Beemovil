import { Server, Database, Share2 } from 'lucide-react';

const Integracion = () => {
  const integrations = [
    {
      title: 'Backend Integration',
      desc: 'Integramos elementos específicos a cualquier arquitectura de software, optimizando procesos y flujos de trabajo según sus necesidades corporativas.',
      icon: <Server className="w-10 h-10 text-primary" />,
      tag: 'Core'
    },
    {
      title: 'Data Integrations',
      desc: 'Especialistas en la unificación de datos en diferentes entornos, estableciendo conexiones seguras con bases de datos y sistemas de almacenamiento masivo.',
      icon: <Database className="w-10 h-10 text-primary" />,
      tag: 'Database'
    },
    {
      title: 'Services Integration',
      desc: 'Conectamos sus aplicaciones con pasarelas de pago, ecosistemas de e-commerce, APIs externas, plataformas publicitarias y redes sociales.',
      icon: <Share2 className="w-10 h-10 text-primary" />,
      tag: 'External'
    }
  ];

  return (
    <section id="integracion" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Interconectividad</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Integración de <span className="text-primary">Aplicaciones</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto font-medium">
            Maximizamos el potencial de su ecosistema tecnológico mediante una integración multiplataforma fluida y segura.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {integrations.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-full md:w-1/4 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 flex items-center justify-center bg-slate-50 rounded-3xl group-hover:bg-primary/5 transition-colors">
                  {item.icon}
                </div>
                <div className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-2">
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest">{item.tag}</span>
                </div>
                <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider">{item.title}</h3>
              </div>
              <div className="w-full md:w-3/4">
                <p className="text-slate-700 text-xl leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integracion;
