import { Smartphone, Monitor, Globe, Layers, Laptop, Database, Server, Layout } from 'lucide-react';

const Tecnologia = () => {
  const techs = [
    { name: 'IOS', icon: <Smartphone className="w-8 h-8 text-primary" />, category: 'Mobile' },
    { name: 'Android', icon: <Smartphone className="w-8 h-8 text-primary" />, category: 'Mobile' },
    { name: 'Windows', icon: <Laptop className="w-8 h-8 text-primary" />, category: 'Desktop' },
    { name: 'Cloud Native', icon: <Server className="w-8 h-8 text-primary" />, category: 'Infrastructure' },
    { name: 'JAVA / Spring', icon: <Layers className="w-8 h-8 text-primary" />, category: 'Backend' },
    { name: 'Next.js / React', icon: <Globe className="w-8 h-8 text-primary" />, category: 'Frontend' },
    { name: 'SAP Integration', icon: <Database className="w-8 h-8 text-primary" />, category: 'Enterprise' },
    { name: 'UX/UI Design', icon: <Layout className="w-8 h-8 text-primary" />, category: 'System' },
  ];

  return (
    <section id="numbers" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Nuestra Experiencia en <span className="text-primary">Tecnología</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:border-primary/30"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">{tech.category}</span>
              
              <div className="w-20 h-20 mb-6 flex items-center justify-center bg-slate-50 rounded-3xl group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                {tech.icon}
              </div>
              
              <span className="text-slate-900 font-bold text-sm uppercase tracking-[0.2em] text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tecnologia;
