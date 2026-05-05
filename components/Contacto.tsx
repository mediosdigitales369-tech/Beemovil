'use client';

import { useState } from 'react';
import Image from 'next/image';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    tel: '',
    asunto: '',
    mensaje: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ nombre: '', apellido: '', email: '', tel: '', asunto: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="relative section-spacing bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          
          {/* Info Side */}
          <div className="w-full lg:w-2/5">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Hablemos</span>
            <h2 className="text-4xl md:text-6xl font-black text-enterprise-gray-900 mb-8 tracking-tight">
              ¿Tienes un <br />
              <span className="text-primary">Proyecto?</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mb-12"></div>
            
            <p className="text-xl text-enterprise-gray-600 mb-16 font-medium leading-relaxed">
              Nuestro equipo de expertos está listo para ayudarte a llevar tu infraestructura tecnológica al siguiente nivel.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-enterprise-gray-50 rounded-2xl flex items-center justify-center text-enterprise-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-enterprise-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Central Telefónica</h4>
                  <p className="text-lg font-black text-enterprise-gray-900">(51) 340 8879</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-enterprise-gray-50 rounded-2xl flex items-center justify-center text-enterprise-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-enterprise-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Email Corporativo</h4>
                  <p className="text-lg font-black text-enterprise-gray-900">Servicioalcliente@beemovil.pe</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-enterprise-gray-50 rounded-2xl flex items-center justify-center text-enterprise-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-enterprise-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Sede Principal</h4>
                  <address className="not-italic text-sm font-semibold text-enterprise-gray-900 leading-relaxed">
                    Calle CRNEL INCLAN N° 221 - OFICINA 409<br />
                    Edificio EUROBUILDING II, Miraflores - LIMA
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5">
            <div className="bg-enterprise-gray-50 p-10 md:p-16 rounded-[3rem] border border-enterprise-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              
              <h3 className="text-2xl font-black text-enterprise-gray-900 mb-10 uppercase tracking-widest">
                Formulario de Consulta
              </h3>
              
              {status === 'sent' && (
                <div className="bg-green-100 border border-green-200 text-green-700 p-6 rounded-2xl mb-10 text-center font-bold">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 border border-red-200 text-red-700 p-6 rounded-2xl mb-10 text-center font-bold">
                  Hubo un error. Por favor, inténtelo de nuevo.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-enterprise-gray-400 ml-4">Nombres</label>
                    <input 
                      type="text" 
                      name="nombre" 
                      required 
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full bg-white text-enterprise-gray-900 px-6 py-4 rounded-2xl border border-enterprise-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-enterprise-gray-400 ml-4">Apellidos</label>
                    <input 
                      type="text" 
                      name="apellido" 
                      required 
                      value={formData.apellido}
                      onChange={handleChange}
                      className="w-full bg-white text-enterprise-gray-900 px-6 py-4 rounded-2xl border border-enterprise-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-enterprise-gray-400 ml-4">Email Corporativo</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white text-enterprise-gray-900 px-6 py-4 rounded-2xl border border-enterprise-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-enterprise-gray-400 ml-4">Teléfono</label>
                    <input 
                      type="tel" 
                      name="tel" 
                      required 
                      value={formData.tel}
                      onChange={handleChange}
                      className="w-full bg-white text-enterprise-gray-900 px-6 py-4 rounded-2xl border border-enterprise-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-enterprise-gray-400 ml-4">Asunto</label>
                  <input 
                    type="text" 
                    name="asunto" 
                    required 
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full bg-white text-enterprise-gray-900 px-6 py-4 rounded-2xl border border-enterprise-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-enterprise-gray-400 ml-4">Mensaje</label>
                  <textarea 
                    name="mensaje" 
                    required 
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full bg-white text-enterprise-gray-900 px-6 py-4 rounded-2xl border border-enterprise-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex justify-center items-center gap-3 group"
                >
                  {status === 'sending' ? (
                    <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>ENVIAR SOLICITUD</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
      
      {/* Map visualization area could go here if needed, but keeping text for now */}
    </section>
  );
};

export default Contacto;
