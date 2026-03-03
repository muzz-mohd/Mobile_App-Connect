import { motion } from "framer-motion";
import { ChevronLeft, AlertCircle, Heart, Phone, ShieldAlert, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function Emergency() {
  const [, setLocation] = useLocation();

  const categories = [
    { id: 'death', title: 'Janaza / Death', icon: ShieldAlert, color: 'text-slate-900', bgColor: 'bg-slate-100', desc: 'Report a passing in the community' },
    { id: 'medical', title: 'Medical Emergency', icon: Phone, color: 'text-red-600', bgColor: 'bg-red-50', desc: 'Urgent medical assistance needed' },
    { id: 'social', title: 'Social Emergency', icon: Users, color: 'text-amber-600', bgColor: 'bg-amber-50', desc: 'Family or community support' },
  ];

  return (
    <div className="min-h-full bg-[#F8F9FA] pb-12">
      <div className="bg-red-600 pt-14 pb-12 px-6 rounded-b-[3rem] text-white">
        <button onClick={() => setLocation("/")} className="p-2 bg-white/10 rounded-xl backdrop-blur-md mb-6">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold font-heading text-white">Emergency Report</h1>
        <p className="text-white/80 text-sm mt-1">Get immediate assistance from the mosque</p>
      </div>

      <div className="px-6 -mt-6 space-y-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="w-full bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-5 text-left active:scale-[0.98] transition-all"
          >
            <div className={`w-14 h-14 ${cat.bgColor} rounded-2xl flex items-center justify-center ${cat.color}`}>
              <cat.icon size={28} />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">{cat.title}</p>
              <p className="text-xs text-slate-500 font-medium">{cat.desc}</p>
            </div>
          </button>
        ))}
      </div>
      
      <div className="px-6 mt-8">
        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-2 text-amber-700">
            <AlertCircle size={20} />
            <h4 className="font-bold">Important</h4>
          </div>
          <p className="text-sm text-amber-800 leading-relaxed">
            For life-threatening emergencies, please call emergency services (999/911) immediately before contacting the mosque.
          </p>
        </div>
      </div>
    </div>
  );
}
