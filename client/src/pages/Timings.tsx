import { motion } from "framer-motion";
import { Bell, MapPin, Settings } from "lucide-react";
import patternBg from "@/assets/images/pattern-bg.png";

export default function Timings() {
  const prayers = [
    { name: "Fajr", adhan: "5:30 AM", iqamah: "6:00 AM", status: "past" },
    { name: "Sunrise", adhan: "7:12 AM", iqamah: "-", status: "past" },
    { name: "Dhuhr", adhan: "1:20 PM", iqamah: "1:45 PM", status: "past" },
    { name: "Asr", adhan: "4:05 PM", iqamah: "4:30 PM", status: "next" },
    { name: "Maghrib", adhan: "7:25 PM", iqamah: "7:35 PM", status: "upcoming" },
    { name: "Isha", adhan: "8:45 PM", iqamah: "9:00 PM", status: "upcoming" },
  ];

  return (
    <div className="min-h-full pb-8 bg-slate-50">
      {/* Header Area */}
      <div className="relative pt-12 pb-24 px-6 bg-primary text-white overflow-hidden rounded-b-[2.5rem]">
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${patternBg})` }}
        />
        
        <div className="relative z-10 flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold font-heading">Prayer Times</h1>
          <button className="p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20" data-testid="btn-settings">
            <Settings size={20} />
          </button>
        </div>
        
        <div className="relative z-10 flex items-center gap-2 text-primary-foreground/90 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
          <MapPin size={16} />
          <span className="text-sm font-medium">Islamic Center of NY</span>
        </div>
      </div>

      {/* Timings List */}
      <div className="px-6 -mt-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl smooth-shadow p-2 space-y-1 border border-slate-100"
        >
          <div className="grid grid-cols-3 px-6 py-4 border-b border-slate-50 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <div>Prayer</div>
            <div className="text-center">Adhan</div>
            <div className="text-right">Iqamah</div>
          </div>
          
          {prayers.map((prayer, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              key={prayer.name} 
              className={`grid grid-cols-3 items-center px-6 py-5 rounded-2xl transition-all ${
                prayer.status === "next" 
                  ? "bg-primary/5 border border-primary/20 scale-[1.02] shadow-sm" 
                  : "hover:bg-slate-50"
              }`}
              data-testid={`prayer-row-${prayer.name.toLowerCase()}`}
            >
              <div className="flex items-center gap-3">
                {prayer.status === "next" && (
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
                <span className={`font-bold ${
                  prayer.status === "next" ? "text-primary text-lg" : "text-slate-700"
                }`}>
                  {prayer.name}
                </span>
              </div>
              <div className={`text-center font-medium tabular-nums ${
                prayer.status === "next" ? "text-primary" : "text-slate-500"
              }`}>
                {prayer.adhan}
              </div>
              <div className={`text-right font-bold tabular-nums ${
                prayer.status === "next" ? "text-primary" : "text-slate-900"
              }`}>
                {prayer.iqamah}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Jumuah Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-6 relative overflow-hidden smooth-shadow"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl -mr-10 -mt-10" />
          <div className="flex justify-between items-center relative z-10 mb-4">
            <h3 className="font-bold text-lg">Jumu'ah Prayers</h3>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">Friday</span>
          </div>
          <div className="space-y-3 relative z-10">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-slate-300 text-sm">1st Khutbah</span>
              <span className="font-bold">1:15 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300 text-sm">2nd Khutbah</span>
              <span className="font-bold">2:30 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
