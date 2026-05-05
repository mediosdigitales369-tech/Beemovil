import { Smartphone, MessageSquare, PhoneCall, Layout } from 'lucide-react';
import Image from 'next/image';

const DesarrolloMovil = () => {
  const services = [
    {
      title: 'APPS',
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      items: ['Comerciales', 'Producción', 'Servicio al cliente', 'Entretenimiento'],
    },
    {
      title: 'MENSAJES',
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      items: ['Push Notificaciones', 'Comunicacionales', 'Alertas Corporativas'],
    },
    {
      title: 'IVR',
      icon: <PhoneCall className="w-8 h-8 text-primary" />,
      items: ['Push Notificaciones', 'Personalizado a tu negocio'],
    }
  ];

  return (
    <section id="tecnologia" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 content-relative">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Soluciones Móviles</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Desarrollo de Apps de <br />
              <span className="text-primary">Clase Mundial</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Creamos experiencias móviles nativas e híbridas utilizando React Native y tecnologías de vanguardia para empresas de alto nivel.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 mb-8 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-primary/5 group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-8 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-40 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <Image 
                src="/img/celular3.png" 
                alt="App UI" 
                width={400} 
                height={800} 
                className="relative w-full max-w-[320px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesarrolloMovil;
