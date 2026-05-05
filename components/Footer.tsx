import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-enterprise-gray-900 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image 
                src="/img/logo-alt.png" 
                alt="BeeMovil Logo" 
                width={150} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Líderes en soluciones tecnológicas para el sector de Tecnologías de la Información desde 2009. Innovación, calidad y compromiso.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Empresa</h4>
            <ul className="space-y-4">
              {['Sobre Nosotros', 'Nuestros Servicios', 'Casos de Éxito', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Servicios</h4>
            <ul className="space-y-4">
              {['Desarrollo Móvil', 'Desarrollo Web', 'Integración API', 'Outsourcing IT'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-px bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">Suscríbete para recibir noticias sobre tecnología y telecomunicaciones.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-lg hover:bg-primary-dark transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
            &copy; {currentYear} BeeMovil SAC. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-white/30 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="text-white/30 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="text-white/30 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
