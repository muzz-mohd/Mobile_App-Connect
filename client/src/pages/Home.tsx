import { motion } from "framer-motion";
import { format } from "date-fns";
import { 
  Bell, 
  ChevronRight, 
  Calendar, 
  Info, 
  MapPin, 
  Heart, 
  QrCode, 
  Clock,
  Compass,
  AlertCircle,
  BookOpen,
  Hash,
  ShieldAlert,
  Megaphone,
  Handshake,
  CheckCircle2
} from "lucide-react";
import patternBg from "@/assets/images/pattern-bg.png";
import { Link, useLocation } from "wouter";

const services = [
  { id: 'tasbeeh', label: 'Tasbeeh', icon: Hash, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 'duas', label: 'Duas', icon: BookOpen, color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  { id: 'donations', label: 'Donations', icon: Heart, color: 'text-rose-500', bgColor: 'bg-rose-50' },
  { id: 'sos', label: 'SOS', icon: AlertCircle, color: 'text-red-600', bgColor: 'bg-red-50' },
  { id: 'qibla', label: 'Qibla Direction', icon: Compass, color: 'text-amber-600', bgColor: 'bg-amber-50' },
  { id: 'events', label: 'Islamic Events', icon: Calendar, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
];

export default function Home() {
  const today = new Date();
  const [, setLocation] = useLocation();
  
  const mainServices = [
    { 
      title: "Mosque Name", 
      icon: "🕌", 
      subtitle: "Al-Noor Mosque", 
      color: "bg-[#FDF8F3] text-[#8B7355]",
      status: "Verified",
      tag: "Info",
      path: "/mosque-detail"
    },
    { 
      title: "Salah Tracker", 
      icon: "⏱️", 
      subtitle: "Daily Prayer Log", 
      color: "bg-[#F0F7F4] text-[#2D5A47]",
      status: "Check Now",
      tag: "Tools",
      path: "/salah-tracker"
    },
    { 
      title: "Report Emergency", 
      icon: "🚨", 
      subtitle: "Urgent Assistance", 
      color: "bg-[#FFF5F5] text-[#C53030]",
      status: "Available 24/7",
      tag: "Emergency",
      path: "/emergency"
    },
  ];

  const notices = [
    { title: "Janaza Notice", time: "After Dhuhr", type: "Urgent", icon: ShieldAlert },
    { title: "Eid Announcement", time: "10 Apr 2026", type: "Event", icon: Megaphone },
  ];

  const deeds = [
    { title: "Support a Student", type: "Education", progress: 65, icon: Handshake },
    { title: "Mosque Renovation", type: "Maintenance", progress: 40, icon: Heart },
  ];

  return (
    <div className="min-h-full pb-20 bg-[#F9F9F9]">
      {/* Dynamic Header */}
      <header className="px-6 pt-14 pb-6 flex justify-between items-center bg-transparent z-50">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-heading tracking-tight">Masjid Connect</h1>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</span>
          </div>
        </div>
        
        <div className="flex gap-2.5 fixed top-14 right-6 z-[60]">
          <button 
            onClick={() => setLocation("/profile")}
            className="p-1 bg-white rounded-2xl shadow-md border border-slate-100 active:scale-95 transition-transform overflow-hidden" 
            data-testid="btn-profile"
          >
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-primary text-xs font-bold">
              AA
            </div>
          </button>
        </div>
      </header>
      <div className="px-6 space-y-8 mt-2">
        {/* Next Prayer Module - Modern White Marble */}
        <motion.button 
          onClick={() => setLocation("/timings")}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-8 bg-white"
        >
          {/* Marble Texture Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/marble.png')]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8">
              <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-slate-900/10">Next Prayer</span>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Iqamah in</p>
                <p className="text-sm font-bold text-[#B8860B]">24 mins</p>
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-5xl font-bold font-heading mb-1 tracking-tight text-slate-900">Asr</h2>
                <p className="text-slate-400 text-xs font-medium flex items-center gap-1">
                   <MapPin size={10} /> Al-Noor Mosque
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <p className="text-5xl font-bold font-heading tabular-nums tracking-tighter text-[#8B7355]">04:05</p>
                  <p className="text-xs font-bold text-[#B8860B] uppercase tracking-widest">PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.button>

        {/* Mosque Services */}
        <section>
          <div className="flex justify-between items-center mb-5 px-1">
            <h3 className="text-lg font-bold text-slate-900">Mosque Services</h3>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Local Guide</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {mainServices.map((service, i) => (
              <motion.button 
                key={service.title}
                onClick={() => setLocation(service.path)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.25rem] p-5 flex items-center justify-between group border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] active:scale-[0.98] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-[1.75rem] flex items-center justify-center text-3xl shadow-inner ${service.color}`}>
                    {service.icon}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-base font-bold text-slate-900">{service.title}</h4>
                      <span className="text-[9px] font-bold text-slate-400 border border-slate-100 px-1.5 py-0.5 rounded uppercase">{service.tag}</span>
                    </div>
                    <p className="text-xs text-emerald-600 font-bold">{service.status}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                  <ChevronRight size={18} className="text-slate-400" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Zaroori Ittela - Urgent Notices */}
        <section>
          <div className="flex justify-between items-center mb-5 px-1">
            <h3 className="text-lg font-bold text-slate-900">Zaroori Ittela</h3>
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Urgent Notices</span>
          </div>
          <div className="space-y-3">
            {notices.map((notice, i) => (
              <button key={i} className="w-full bg-white p-4 rounded-[1.75rem] border border-slate-100 flex items-center justify-between group active:scale-[0.98] transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <notice.icon size={22} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-800">{notice.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{notice.time}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-white bg-slate-900 px-2 py-0.5 rounded uppercase tracking-tighter">
                  {notice.type}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Ta'awun - Good Deeds */}
        <section onClick={() => setLocation("/taawun")}>
          <div className="flex justify-between items-center mb-5 px-1">
            <h3 className="text-lg font-bold text-slate-900">Ta'awun</h3>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Good Deeds</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {deeds.map((deed, i) => (
              <div key={i} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-3">
                  <deed.icon size={20} />
                </div>
                <h5 className="font-bold text-slate-800 text-sm mb-1">{deed.title}</h5>
                <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${deed.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="pb-10">
          <div className="flex justify-between items-center mb-5 px-1">
            <h3 className="text-lg font-bold text-slate-900">Services</h3>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Discover More</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setLocation(`/service/${service.id}`)}
                whileTap={{ scale: 0.96 }}
                className="bg-white p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center justify-center text-center aspect-square transition-colors active:bg-slate-50 group"
              >
                <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <service.icon size={28} className={service.color} />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">
                  {service.label}
                </span>
              </motion.button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
