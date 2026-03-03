import { motion } from "framer-motion";
import { 
  Heart, 
  Compass, 
  Calendar, 
  AlertCircle, 
  BookOpen, 
  Hash
} from "lucide-react";

import { useLocation } from "wouter";

const services = [
  { id: 'tasbeeh', label: 'Tasbeeh', icon: Hash, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { id: 'duas', label: 'Duas', icon: BookOpen, label_en: 'Supplications', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  { id: 'donations', label: 'Donations', icon: Heart, color: 'text-rose-500', bgColor: 'bg-rose-50' },
  { id: 'sos', label: 'SOS', icon: AlertCircle, color: 'text-red-600', bgColor: 'bg-red-50' },
  { id: 'qibla', label: 'Qibla Direction', icon: Compass, color: 'text-amber-600', bgColor: 'bg-amber-50' },
  { id: 'events', label: 'Islamic Events', icon: Calendar, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
];

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-full bg-[#F8F9FA] pb-24">
      {/* Header Section */}
      <div className="px-6 pt-16 pb-8">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-[0.2em] mb-1">Services</p>
        <h1 className="text-3xl font-bold text-slate-900 font-heading tracking-tight">Discover More</h1>
      </div>

      {/* Services Grid */}
      <div className="px-6">
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setLocation(`/service/${service.id}`)}
              whileTap={{ scale: 0.96 }}
              className="bg-white p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center justify-center text-center aspect-square transition-colors active:bg-slate-50 group"
              data-testid={`service-card-${service.id}`}
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
      </div>
    </div>
  );
}
