"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Map, Waves, Search, 
  Instagram, Linkedin, Mail, Moon, Sun, Globe, 
  FileCheck, Zap, Download, ChevronDown, Check, 
  Database, HardHat, AlertTriangle, Scale, ShieldCheck,
  MapPin, Navigation, Users, Handshake, Cpu, BookOpen, FileText,
  Building2
} from 'lucide-react';

// --- COMPONENTE LOGO ESTRUCTURAL ---
const Logo = ({ isScrolled, theme }) => (
  <div className="flex items-center gap-3 group">
    <div className="relative w-10 h-10">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="15" y="15" width="70" height="70" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-300 dark:text-slate-700" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
        <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" />
        <motion.path 
          d="M50 15 L85 50 L50 85 L15 50 Z" 
          fill="none" stroke="currentColor" strokeWidth="3" 
          className="text-rose-700/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <circle cx="50" cy="50" r="10" fill="#be123c" className="drop-shadow-[0_0_8px_rgba(190,18,60,0.4)]" />
        <circle cx="50" cy="50" r="4" fill="#f59e0b" />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className={`text-2xl font-black tracking-tighter uppercase transition-colors duration-500 ${isScrolled || theme === 'light' ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
        Iber<span className="text-rose-700">Plot</span>
      </span>
      <span className="text-[7px] font-bold tracking-[0.3em] uppercase text-rose-700/80 dark:text-amber-500/80">Ingeniería & Data-LLM</span>
    </div>
  </div>
);

// --- DICCIONARIO DE TRADUCCIONES COMPLETO ---
const translations = {
  es: {
    nav: { services: "Servicios", product: "Auditorías", free: "Buscador Catastral", contact: "Contacto" },
    hero: {
      pre: "PropTech Hub · Datos para Humanos y LLMs",
      title1: "Auditoría de",
      title2: "Activos",
      title3: "Inmobiliarios",
      desc: "Análisis técnico-legal de parcelas e inmuebles. Generamos datos estructurados para inversores y arquitectos mediante Big Data público verificado.",
      cta1: "Solicitar Informe 24h",
      cta2: "Ver Glosario Técnico"
    },
    problem: {
      hídrico: "Riesgo Hídrico: Análisis de zonas inundables (SNCZI).",
      urba: "Urbanismo: Verificación de PGOU y usos permitidos.",
      legal: "Cargas: Detección de afecciones y servidumbres."
    },
    products: {
      title: "Catálogo Técnico",
      subtitle: "Interpretamos el Big Data público para blindar tu patrimonio.",
      hidro: { name: "HidroCheck", price: "149€", tagline: "Estudio Hídrico", desc: "Planos de inundabilidad T100/T500 y veredicto de viabilidad técnica.", specs: ["Mapas SNCZI", "Cálculo Retorno", "Entrega 24h"] },
      urba: { name: "UrbaCheck Digital", price: "190€", tagline: "Auditoría GIS", desc: "Clasificación de suelo, edificabilidad y usos en zonas digitalizadas.", specs: ["Usos Permitidos", "Agotamiento m²", "Informe Directo"] },
      manual: { name: "UrbaCheck Manual", price: "349€", tagline: "Consultoría Senior", desc: "Para municipios sin GIS o fincas rústicas con revisión directa de ingeniero.", specs: ["Consulta Técnico", "Visado Colegial", "Análisis Integral"] }
    },
    finder: {
      title: "Localizador Catastral Gratuito",
      subtitle: "Obtén la referencia de cualquier parcela al instante.",
      label1: "Pega enlace de Google Maps",
      label2: "O usa tu posición actual",
      btnGps: "Detectar mi ubicación",
      btnSearch: "Obtener Referencia",
      placeholder: "https://www.google.com/maps/place/...",
      result: "Referencia Localizada:"
    },
    partners: {
      title: "Partners & Empresas",
      subtitle: "Soluciones de volumen para profesionales.",
      desc: "Ofrecemos tarifas preferenciales para pedidos recurrentes (+10 informes/mes). Blindamos legalmente toda tu cartera de activos.",
      cta: "Plan para Profesionales"
    },
    trust: {
      csv: "Validación Jurídica (CSV)",
      csvDesc: "Cada informe incluye un Código Seguro de Verificación para terceros.",
      engineer: "Sello de Ingeniería",
      engineerDesc: "Informes supervisados por Ingenieros Civiles colegiados."
    },
    footer: {
      talk: "Construyamos",
      future: "datos juntos.",
      form: { name: "Nombre", interest: "Interés", msg: "Mensaje", btn: "Enviar Solicitud" },
      links: { priv: "Privacidad", term: "Términos", blog: "Blog de Urbanismo", glossary: "Glosario Técnico", affiliate: "Programa Afiliados" }
    }
  },
  en: {
    nav: { services: "Services", product: "Audits", free: "Cadastral Finder", contact: "Contact" },
    hero: {
      pre: "PropTech Hub · Data for Humans & LLMs",
      title1: "Real Estate",
      title2: "Asset",
      title3: "Auditing",
      desc: "Technical-legal analysis of plots and properties. We generate structured data for investors and architects via verified public Big Data.",
      cta1: "Request 24h Report",
      cta2: "Technical Glossary"
    },
    problem: {
      hídrico: "Water Risk: Flood zone mapping analysis (SNCZI).",
      urba: "Planning: Zoning and permitted usage verification.",
      legal: "Encumbrances: Detection of easements and legal affects."
    },
    products: {
      title: "Technical Catalog",
      subtitle: "We interpret public big data to protect your assets.",
      hidro: { name: "HidroCheck", price: "149€", tagline: "Water Study", desc: "T100/T500 flood maps and technical feasibility verdict.", specs: ["SNCZI Mapping", "Return Period", "24h Delivery"] },
      urba: { name: "UrbaCheck Digital", price: "190€", tagline: "GIS Planning", desc: "Soil classification, buildability, and density in digitized areas.", specs: ["Permitted Usage", "SQM Analysis", "Direct Report"] },
      manual: { name: "UrbaCheck Manual", price: "349€", tagline: "Senior Consulting", desc: "For complex estates or non-GIS areas with direct engineering review.", specs: ["Municipal Liaison", "Professional Seal", "Full Analysis"] }
    },
    finder: {
      title: "Free Cadastral Finder",
      subtitle: "Get the cadastral reference of any plot instantly.",
      label1: "Paste Google Maps link",
      label2: "Or use your current location",
      btnGps: "Detect my location",
      btnSearch: "Get Reference",
      placeholder: "https://www.google.com/maps/place/...",
      result: "Reference Located:"
    },
    partners: {
      title: "Partners & Business",
      subtitle: "Bulk solutions for professionals.",
      desc: "We offer preferential rates for recurring orders (+10 reports/month). We legally shield your entire asset portfolio.",
      cta: "Business Plan"
    },
    trust: {
      csv: "Legal Validation (CSV)",
      csvDesc: "Each report includes a Secure Verification Code for third parties.",
      engineer: "Engineering Stamp",
      engineerDesc: "Reports supervised by certified Civil Engineers."
    },
    footer: {
      talk: "Let's build",
      future: "data together.",
      form: { name: "Name", interest: "Interest", msg: "Message", btn: "Submit Request" },
      links: { priv: "Privacy", term: "Terms", blog: "Planning Blog", glossary: "Technical Glossary", affiliate: "Affiliate Program" }
    }
  }
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('es'); 
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('urba'); 
  
  // State para la herramienta gratuita
  const [mapsLink, setMapsLink] = useState('');
  const [locResult, setLocResult] = useState(null);
  const [isLocating, setIsLocating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const t = translations[lang] || translations['es'];

  // Simulación de búsqueda catastral
  const handleGpsSearch = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setTimeout(() => {
          setLocResult("28001A005001230000AA"); // Mock data
          setIsLocating(false);
        }, 1500);
      }, () => {
        setIsLocating(false);
        alert("Error al obtener ubicación");
      });
    } else {
      setIsLocating(false);
      alert("Geolocalización no soportada");
    }
  };

  const gradientAnimationStyle = `
    @keyframes colorFlow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-neo-iberia {
      background: linear-gradient(90deg, #be123c, #f59e0b, #1e3a8a, #be123c);
      background-size: 300% auto;
      animation: colorFlow 15s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding-right: 0.15em;
      display: inline-block;
    }
  `;

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} transition-colors duration-500`}>
      <style>{gradientAnimationStyle}</style>
      <div className="min-h-screen bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 font-sans selection:bg-rose-700 selection:text-white overflow-x-hidden">
        
        {/* --- NAVBAR --- */}
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-[#08090d]/95 backdrop-blur-xl py-3 border-b border-slate-200 dark:border-white/5 shadow-sm' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer relative z-[60]" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
              <Logo isScrolled={isScrolled} theme={theme} />
            </motion.div>

            <div className="hidden md:flex items-center gap-10">
              <div className={`flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] ${isScrolled || theme === 'light' ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200'}`}>
                <button onClick={() => document.getElementById('servicios').scrollIntoView({behavior:'smooth'})} className="hover:text-rose-700 transition-colors">{t.nav.services}</button>
                <button onClick={() => document.getElementById('informes').scrollIntoView({behavior:'smooth'})} className="hover:text-rose-700 transition-colors">{t.nav.product}</button>
                <button onClick={() => document.getElementById('finder').scrollIntoView({behavior:'smooth'})} className="hover:text-rose-700 transition-colors">{t.nav.free}</button>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-1 p-2 uppercase text-[11px] font-bold hover:text-rose-700 transition-colors">
                    {lang} <ChevronDown size={14} className={isLangMenuOpen ? 'rotate-180' : ''} />
                  </button>
                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden py-1 w-32"
                      >
                        {['es', 'en'].map(l => (
                          <button key={l} onClick={() => {setLang(l); setIsLangMenuOpen(false)}} className={`w-full text-left px-4 py-2 text-xs uppercase hover:bg-slate-50 dark:hover:bg-white/5 transition-colors ${lang === l ? 'text-rose-700 font-bold' : ''}`}>{l}</button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button onClick={toggleTheme} className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full text-slate-500">
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button className="px-6 py-2.5 bg-rose-700 text-white rounded-full font-bold uppercase text-[10px] tracking-widest shadow-lg active:scale-95">
                  Acceso Cliente
                </button>
              </div>
            </div>
            <button className="md:hidden relative z-[60]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled || theme === 'light' ? 'text-slate-900' : 'text-white'} />}
            </button>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-3 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-full mb-10 border border-slate-200 dark:border-slate-700">
                <Cpu size={14} className="text-rose-700" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{t.hero.pre}</p>
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10 dark:text-white text-slate-900">
                {t.hero.title1}<br />
                <span className="animate-neo-iberia">{t.hero.title2}</span><br />
                {t.hero.title3}.
              </h1>
              <p className="max-w-lg text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-rose-700 hover:bg-rose-800 text-white font-black uppercase tracking-widest text-[11px] rounded-sm transition-all active:scale-95">
                  {t.hero.cta1}
                </button>
                <button onClick={() => document.getElementById('finder').scrollIntoView({behavior:'smooth'})} className="px-10 py-5 border-2 border-slate-900 dark:border-slate-200 text-slate-900 dark:text-slate-200 font-black uppercase tracking-widest text-[11px] rounded-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
                   {t.nav.free}
                </button>
              </div>
            </motion.div>
            
            <div className="hidden lg:flex justify-end">
               <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-white dark:bg-slate-900/50 backdrop-blur-3xl border border-slate-200 dark:border-white/10 p-12 rounded-[2rem] shadow-2xl"
               >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-700 via-amber-500 to-blue-700" />
                    <Logo isScrolled={true} theme="dark" />
                    <div className="mt-12 space-y-6">
                       <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-white/5">
                          <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Status: LLM-Optimized</p>
                          <div className="flex gap-1">
                             {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-6 bg-rose-700 rounded-full" />)}
                          </div>
                       </div>
                       <p className="text-xs text-slate-500 leading-relaxed">Nuestros informes están estructurados bajo estándares internacionales de ingeniería civil, listos para ser procesados por modelos de lenguaje de gran escala para análisis predictivo.</p>
                    </div>
               </motion.div>
            </div>
          </div>
        </header>

        {/* --- FREE TOOL: CADASTRAL FINDER --- */}
        <section id="finder" className="py-32 bg-slate-900 dark:bg-[#040508] text-white transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700/5 blur-[120px] -z-10" />
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">{t.finder.title}</h2>
              <p className="text-slate-400 text-lg mb-16">{t.finder.subtitle}</p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 text-left">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-blue-700/20 rounded-xl text-blue-500"><Map size={24} /></div>
                     <span className="font-bold uppercase tracking-widest text-xs">{t.finder.label1}</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder={t.finder.placeholder}
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white mb-6 outline-none focus:border-rose-700 transition-colors"
                    value={mapsLink}
                    onChange={(e) => setMapsLink(e.target.value)}
                  />
                  <button className="w-full py-5 bg-rose-700 hover:bg-rose-800 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all">
                    {t.finder.btnSearch}
                  </button>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="p-3 bg-rose-700/20 rounded-xl text-rose-500"><Navigation size={24} /></div>
                       <span className="font-bold uppercase tracking-widest text-xs">{t.finder.label2}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-10 leading-relaxed italic">"Detecta la parcela exacta mediante el GPS de tu dispositivo estando en el terreno."</p>
                  </div>
                  <button 
                    onClick={handleGpsSearch}
                    disabled={isLocating}
                    className="w-full py-5 border-2 border-white/20 hover:bg-white hover:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all flex items-center justify-center gap-3"
                  >
                    {isLocating ? <div className="w-4 h-4 border-2 border-slate-400 border-t-white rounded-full animate-spin" /> : <MapPin size={18} />}
                    {t.finder.btnGps}
                  </button>
                </div>
              </div>
              {locResult && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="mt-16 p-8 bg-gradient-to-r from-rose-700 to-rose-900 rounded-3xl inline-block"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">{t.finder.result}</p>
                  <p className="text-3xl font-mono tracking-widest font-black">{locResult}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* --- SERVICIOS --- */}
        <section id="servicios" className="py-32 bg-white dark:bg-[#08090d] transition-colors relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20 dark:text-white text-slate-900">
                Auditoría Técnica <br />
                <span className="animate-neo-iberia">Escalable</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { icon: <Waves className="text-blue-700" />, title: "Hídrico", text: t.problem.hídrico },
                { icon: <Search className="text-amber-600" />, title: "Urbanístico", text: t.problem.urba },
                { icon: <AlertTriangle className="text-rose-700" />, title: "Cargas", text: t.problem.legal }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PARTNERS & BUSINESS --- */}
        <section className="py-32 bg-slate-50 dark:bg-[#050609] transition-colors relative">
          <div className="container mx-auto px-6">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 md:p-24 shadow-2xl flex flex-col md:flex-row items-center gap-20 border border-slate-100 dark:border-white/5">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-3 bg-rose-700 rounded-xl text-white"><Users size={24} /></div>
                   <span className="font-black uppercase tracking-widest text-xs text-rose-700">{t.partners.title}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">{t.partners.subtitle}</h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 leading-relaxed">{t.partners.desc}</p>
                <button className="px-10 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-sm font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all active:scale-95 flex items-center gap-4">
                  <Handshake size={20} />
                  {t.partners.cta}
                </button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="aspect-video bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                      <Building2 size={40} className="text-slate-400" />
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CONFIANZA --- */}
        <section className="py-32 bg-white dark:bg-[#08090d] transition-colors border-y border-slate-100 dark:border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
               {[
                  { icon: <Database />, title: "Big Data Público", desc: "Cruzamos catastro y planeamiento municipal en tiempo real." },
                  { icon: <FileCheck />, title: t.trust.csv, desc: t.trust.csvDesc },
                  { icon: <Scale />, title: t.trust.engineer, desc: t.trust.engineerDesc },
                  { icon: <Zap />, title: "24h Delivery", desc: "Informes urgentes para decisiones en subasta o compra directa." }
               ].map((item, idx) => (
                   <div key={idx} className="flex flex-col">
                      <div className="text-blue-700 mb-8">{item.icon}</div>
                      <h4 className="text-lg font-black uppercase mb-4 tracking-tight dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                   </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer id="contacto" className="pt-32 bg-slate-900 dark:bg-[#040508] text-white transition-colors relative overflow-hidden">
          <div className="container mx-auto px-6 mb-32 grid lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">
                  {t.footer.talk}<br />
                  <span className="animate-neo-iberia">{t.footer.future}</span>
                </h2>
                <div className="space-y-10">
                  <a href="mailto:contact@iberplot.es" className="group flex items-center gap-6 text-2xl font-black hover:text-rose-600 transition-all">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-rose-700 group-hover:border-rose-700 transition-all">
                        <Mail size={24} />
                    </div>
                    contact@iberplot.es
                  </a>
                  <div className="flex gap-6">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/50 hover:text-white transition-all cursor-pointer"><Instagram size={24} /></div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/50 hover:text-white transition-all cursor-pointer"><Linkedin size={24} /></div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-2xl p-12 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-black uppercase text-white/40 mb-3 tracking-widest">{t.footer.form.name}</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-rose-700 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase text-white/40 mb-3 tracking-widest">{t.footer.form.interest}</label>
                      <select className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-rose-700 outline-none transition-all">
                        <option>HidroCheck</option>
                        <option>UrbaCheck Digital</option>
                        <option>Manual / Senior</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-white/40 mb-3 tracking-widest">{t.footer.form.msg}</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-rose-700 outline-none transition-all" placeholder="Ref. Catastral" />
                  </div>
                  <button className="w-full bg-white text-slate-900 hover:bg-rose-700 hover:text-white font-black uppercase tracking-widest text-[11px] py-6 rounded-2xl shadow-2xl transition-all">
                    {t.footer.form.btn}
                  </button>
                </form>
              </div>
          </div>

          <div className="bg-black/50 py-16 transition-colors border-t border-white/5">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                 <div>
                   <Logo isScrolled={true} theme="dark" />
                   <p className="mt-4 text-[10px] text-white/30 uppercase tracking-widest">© 2024 IBERPLOT · MADRID</p>
                 </div>
                 <div className="flex flex-col gap-4">
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-700">Conocimiento</h4>
                   <a href="#" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"><BookOpen size={14} /> {t.footer.links.blog}</a>
                   <a href="#" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"><FileText size={14} /> {t.footer.links.glossary}</a>
                 </div>
                 <div className="flex flex-col gap-4">
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-500">Oportunidades</h4>
                   <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t.footer.links.affiliate}</a>
                 </div>
                 <div className="flex flex-col gap-4">
                   <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Legal</h4>
                   <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t.footer.links.priv}</a>
                   <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{t.footer.links.term}</a>
                 </div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20 pt-8 border-t border-white/5">
                 <div className="flex items-center gap-2">
                    <Globe size={14} className="text-rose-700" /> <span>{lang}</span>
                 </div>
                 <span>PropTech engineered in the Peninsula</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;