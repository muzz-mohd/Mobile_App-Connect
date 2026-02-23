import { motion } from "framer-motion";
import { format } from "date-fns";
import { Bell, ChevronRight, Heart, MapPin, MessageSquare, Calendar } from "lucide-react";
import patternBg from "@/assets/images/pattern-bg.png";
import { Link } from "wouter";

export default function Home() {
  const today = new Date();
  
  return (
    <div className="min-h-full pb-8">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-40">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-slate-500 mb-1">{format(today, "EEEE, MMMM d")}</p>
          <h1 className="text-2xl font-bold text-slate-900">Assalamu Alaikum</h1>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative p-3 bg-white rounded-full shadow-sm border border-slate-100"
          data-testid="btn-notifications"
        >
          <Bell size={20} className="text-slate-700" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-white"></span>
        </motion.button>
      </header>

      <div className="px-6 space-y-8">
        {/* Next Prayer Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-[2rem] overflow-hidden smooth-shadow bg-primary text-white p-6"
        >
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url(${patternBg})` }}
          />
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-primary-foreground/80 text-sm font-medium mb-1">Next Prayer</p>
                <h2 className="text-3xl font-bold font-heading">Asr</h2>
              </div>
              <div className="text-right">
                <p className="text-primary-foreground/80 text-sm font-medium mb-1">Time Left</p>
                <p className="text-xl font-bold font-heading tabular-nums">01:24:30</p>
              </div>
            </div>
            
            <div className="flex justify-between items-end border-t border-white/20 pt-4">
              <div>
                <p className="text-xs text-primary-foreground/70 mb-0.5">Iqamah</p>
                <p className="font-semibold">4:30 PM</p>
              </div>
              <Link href="/timings">
                <a className="flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors" data-testid="link-all-timings">
                  All timings <ChevronRight size={16} className="ml-1" />
                </a>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Heart, label: "Donate", color: "bg-rose-50 text-rose-500" },
              { icon: MessageSquare, label: "Ask Imam", color: "bg-blue-50 text-blue-500" },
              { icon: Calendar, label: "Events", color: "bg-amber-50 text-amber-600" },
              { icon: MapPin, label: "Direction", color: "bg-emerald-50 text-emerald-600" },
            ].map((action, i) => (
              <button 
                key={action.label} 
                className="flex flex-col items-center gap-2 group"
                data-testid={`btn-action-${action.label.toLowerCase()}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${action.color}`}>
                  <action.icon size={24} strokeWidth={2} />
                </div>
                <span className="text-[11px] font-medium text-slate-600">{action.label}</span>
              </button>
            ))}
          </div>
        </motion.section>

        {/* Recent Updates */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-900">Recent Updates</h3>
            <Link href="/community">
              <a className="text-sm font-medium text-primary" data-testid="link-all-updates">View all</a>
            </Link>
          </div>
          
          <div className="space-y-4">
            {[
              { title: "Friday Khutbah Topic", desc: "The Importance of Patience in Hardship by Sh. Ahmed.", time: "2 hours ago", type: "Announcement" },
              { title: "New Weekend School Term", desc: "Registration is now open for the upcoming term.", time: "Yesterday", type: "Education" },
            ].map((update, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl active:scale-[0.98] transition-transform">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {update.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{update.time}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{update.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{update.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
