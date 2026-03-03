import { ChevronLeft, Heart, Gift, Users, Handshake } from "lucide-react";
import { useLocation } from "wouter";

export default function Taawun() {
  const [, setLocation] = useLocation();

  const initiatives = [
    { title: "Food Drive", icon: Gift, color: "text-emerald-600", bgColor: "bg-emerald-50", progress: 75, goal: "500 meals" },
    { title: "Volunteer", icon: Users, color: "text-blue-600", bgColor: "bg-blue-50", progress: 40, goal: "20 people" },
    { title: "Support a Family", icon: Heart, color: "text-rose-500", bgColor: "bg-rose-50", progress: 90, goal: "SAR 5,000" },
  ];

  return (
    <div className="min-h-full bg-[#F8F9FA] pb-12">
      <div className="bg-primary pt-14 pb-12 px-6 rounded-b-[3rem] text-white">
        <button onClick={() => setLocation("/")} className="p-2 bg-white/10 rounded-xl backdrop-blur-md mb-6">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold font-heading">Ta'awun</h1>
        <p className="text-white/60 text-sm mt-1">Cooperate in goodness and piety</p>
      </div>

      <div className="px-6 -mt-6 space-y-6">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 text-center">
          <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Handshake size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">How can you help today?</h2>
          <p className="text-slate-500 text-sm mb-6">Join our community initiatives and earn rewards for the hereafter.</p>
          <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20">
            Contribute Now
          </button>
        </div>

        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Active Initiatives</h3>
          {initiatives.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-[2.25rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${item.bgColor} ${item.color} rounded-2xl flex items-center justify-center`}>
                  <item.icon size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-500">Goal: {item.goal}</p>
                </div>
                <span className="text-sm font-bold text-primary">{item.progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-secondary transition-all duration-1000" 
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
