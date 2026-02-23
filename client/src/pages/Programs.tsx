import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Weekly Tafseer Circle",
      instructor: "Imam Youssef",
      date: "Every Wednesday",
      time: "After Maghrib",
      location: "Main Prayer Hall",
      category: "Education",
      color: "emerald",
      image: "bg-emerald-100",
      spots: "Open",
    },
    {
      id: 2,
      title: "Youth Soccer Tournament",
      instructor: "Br. Omar",
      date: "March 15, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "Community Park",
      category: "Sports",
      color: "blue",
      image: "bg-blue-100",
      spots: "12 spots left",
    },
    {
      id: 3,
      title: "Tajweed for Beginners",
      instructor: "Sh. Ahmed",
      date: "Starts April 1",
      time: "Saturdays 9:00 AM",
      location: "Classroom B",
      category: "Classes",
      color: "amber",
      image: "bg-amber-100",
      spots: "Waitlist",
    }
  ];

  return (
    <div className="min-h-full pb-8 bg-slate-50">
      <header className="px-6 pt-12 pb-6 bg-white sticky top-0 z-40 border-b border-slate-100">
        <h1 className="text-2xl font-bold font-heading text-slate-900">Programs</h1>
        <p className="text-sm text-slate-500 mt-1">Register for classes and events</p>
        
        {/* Categories */}
        <div className="flex gap-2 mt-6 overflow-x-auto hide-scrollbar pb-2">
          {["All", "Education", "Sports", "Youth", "Sisters"].map((cat, i) => (
            <button 
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                i === 0 
                  ? "bg-slate-900 text-white" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="px-6 py-6 space-y-6">
        {programs.map((program, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            key={program.id}
            className="bg-white rounded-[2rem] overflow-hidden smooth-shadow border border-slate-100 flex flex-col"
            data-testid={`program-card-${program.id}`}
          >
            <div className={`h-24 ${program.image} relative`}>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
                {program.category}
              </div>
            </div>
            
            <div className="p-6 relative">
              <div className={`absolute -top-8 right-6 w-16 h-16 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center font-bold text-xl text-white ${
                program.color === 'emerald' ? 'bg-emerald-500' : 
                program.color === 'blue' ? 'bg-blue-500' : 'bg-amber-500'
              }`}>
                {program.id === 1 ? '📖' : program.id === 2 ? '⚽' : '✍️'}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1 pr-14">{program.title}</h3>
              <p className="text-sm font-medium text-primary mb-5">with {program.instructor}</p>
              
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" />
                  <span className="truncate">{program.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-slate-400" />
                  <span className="truncate">{program.time}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="truncate">{program.location}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Users size={14} />
                  {program.spots}
                </div>
                <button 
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                    program.spots === 'Waitlist' 
                      ? 'bg-slate-100 text-slate-500' 
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                  }`}
                  data-testid={`btn-register-${program.id}`}
                >
                  {program.spots === 'Waitlist' ? 'Join Waitlist' : 'Register Now'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
