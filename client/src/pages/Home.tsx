import { motion } from "framer-motion";
import { format } from "date-fns";
import { Bell, ChevronRight, Calendar, Info, MapPin, Heart } from "lucide-react";
import patternBg from "@/assets/images/pattern-bg.png";
import { Link } from "wouter";

export default function Home() {
  const today = new Date();
  
  const mainServices = [
    { title: "Umrah", icon: "🕋", subtitle: "Permit & Services", color: "bg-[#FDF8F3] text-[#8B7355]" },
    { title: "Praying in Rawdah", icon: "🕌", subtitle: "Noble Garden", color: "bg-[#F0F7F4] text-[#2D5A47]" },
    { title: "Hajj", icon: "🐪", subtitle: "Pilgrimage", color: "bg-[#F5F5FB] text-[#4A4E69]" },
  ];

  return (
    <div className="min-h-full pb-12 bg-[#F9F9F9]">
      {/* Premium Header */}
      <header className="px-6 pt-14 pb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-heading">Masjid Connect</h1>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin size={14} className="text-secondary" />
            <span className="text-xs font-medium text-slate-500">Makkah Al Mukarramah</span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="p-2.5 bg-white rounded-2xl shadow-sm border border-slate-100" data-testid="btn-info">
            <Info size={20} className="text-slate-600" />
          </button>
          <button className="relative p-2.5 bg-white rounded-2xl shadow-sm border border-slate-100" data-testid="btn-notifications">
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      <div className="px-6 space-y-8">
        {/* Date Section */}
        <div className="flex items-center justify-between bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-50 rounded-xl">
              <Calendar size={18} className="text-slate-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Islamic Date</p>
              <p className="text-sm font-bold text-slate-800">5 Ramadan 1447</p>
            </div>
          </div>
          <div className="text-right">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gregorian</p>
             <p className="text-sm font-bold text-slate-800">{format(today, "dd MMM yyyy")}</p>
          </div>
        </div>

        {/* Nusuk-style Featured Services */}
        <section>
          <h3 className="text-lg font-bold text-slate-900 mb-4 px-1">Holy Sites Services</h3>
          <div className="grid grid-cols-1 gap-4">
            {mainServices.map((service, i) => (
              <motion.button 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="nusuk-card p-6 flex items-center justify-between group"
                data-testid={`service-${service.title.toLowerCase()}`}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-3xl shadow-inner ${service.color}`}>
                    {service.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-slate-900">{service.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{service.subtitle}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                  <ChevronRight size={20} className="text-slate-400" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Prayer Time Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-[2.5rem] overflow-hidden smooth-shadow bg-primary text-white p-8"
        >
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center grayscale"
            style={{ backgroundImage: `url(${patternBg})` }}
          />
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Next Prayer</span>
              <div className="flex items-center gap-2 text-secondary font-bold">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Live
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-1">Dhuhr</h2>
                <p className="text-primary-foreground/60 text-sm font-medium">Iqamah in 45 mins</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold font-heading tabular-nums">12:30</p>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-1">PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Access */}
        <section className="pb-8">
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                  <Heart size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <h5 className="font-bold text-slate-900">Zakat & Sadaqah</h5>
                <p className="text-xs text-slate-500 mt-1">Direct donations</p>
              </div>
              <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <Info size={20} className="group-hover:rotate-12 transition-transform" />
                </div>
                <h5 className="font-bold text-slate-900">Masjid Guide</h5>
                <p className="text-xs text-slate-500 mt-1">Facilities & Rules</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
