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
  Hash
} from "lucide-react";
import patternBg from "@/assets/images/pattern-bg.png";

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
      title: "Hajj 1447", 
      icon: "🐪", 
      subtitle: "Holy Pilgrimage", 
      color: "bg-[#F5F5FB] text-[#4A4E69]",
      status: "Registration Open",
      tag: "Official",
      path: "/service/hajj"
    },
  ];

  return (
    <div className="min-h-full pb-20 bg-[#F9F9F9]">
      {/* Premium Header */}
      <header className="px-6 pt-14 pb-6 flex justify-between items-center bg-white/50 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100/50">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-heading tracking-tight">Nusuk Connect</h1>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Makkah Al Mukarramah</span>
          </div>
        </div>
        
        <div className="flex gap-2.5">
          <button 
            onClick={() => setLocation("/profile")}
            className="p-1 bg-white rounded-2xl shadow-sm border border-slate-100 active:scale-95 transition-transform overflow-hidden" 
            data-testid="btn-profile"
          >
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-primary text-xs font-bold">
              AA
            </div>
          </button>
        </div>
      </header>

      <div className="px-6 space-y-8 mt-4">
        {/* Date Section - Nusuk 2025 style */}
        <div className="bg-white rounded-[2rem] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
              <Calendar size={20} className="text-secondary" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Current Date</p>
              <h4 className="text-sm font-bold text-slate-900">5 Ramadan 1447</h4>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-slate-100 mx-2" />
          <div className="text-right">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Gregorian</p>
             <p className="text-sm font-bold text-slate-900">{format(today, "dd MMM yyyy")}</p>
          </div>
        </div>

        {/* Main Services Grid - nusuk style */}
        <section>
          <div className="flex justify-between items-center mb-5 px-1">
            <h3 className="text-lg font-bold text-slate-900">Mosque Services</h3>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Mandatory 2025</span>
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
                data-testid={`service-${service.title.toLowerCase()}`}
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

        {/* Prayer Time Widget - nusuk style overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-[2.5rem] overflow-hidden smooth-shadow bg-[#1A1F2C] text-white p-8"
        >
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url(${patternBg})` }}
          />
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-10 -mt-10" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8">
              <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10">Next Prayer</span>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Iqamah in</p>
                <p className="text-sm font-bold text-secondary">24 mins</p>
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-bold font-heading mb-1 tracking-tight">Asr</h2>
                <p className="text-slate-400 text-xs font-medium flex items-center gap-1">
                   <MapPin size={10} /> Prophet's Mosque
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-1">
                  <p className="text-4xl font-bold font-heading tabular-nums tracking-tighter">04:05</p>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid Section */}
        <section className="pb-4">
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
                data-testid={`home-service-card-${service.id}`}
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
