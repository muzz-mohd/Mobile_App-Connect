import { ChevronLeft, MapPin, Users, Phone, Calendar, History } from "lucide-react";
import { useLocation } from "wouter";

export default function MosqueDetail() {
  const [, setLocation] = useLocation();

  const committee = [
    { name: "Sheikh Ibrahim Al-Fahad", role: "Chairman" },
    { name: "Dr. Ahmed Mansour", role: "General Secretary" },
    { name: "Eng. Khalid Rashid", role: "Treasurer" },
    { name: "Hafiz Muhammad Ali", role: "Imam" }
  ];

  return (
    <div className="min-h-full bg-[#F8F9FA] pb-12">
      <div className="bg-primary pt-14 pb-12 px-6 rounded-b-[3rem] text-white">
        <button onClick={() => setLocation("/")} className="p-2 bg-white/10 rounded-xl backdrop-blur-md mb-6">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold font-heading">Al-Noor Mosque</h1>
        <p className="text-white/60 text-sm flex items-center gap-1.5 mt-1">
          <MapPin size={14} /> Makkah, Saudi Arabia
        </p>
      </div>

      <div className="px-6 -mt-6 space-y-6">
        <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <History size={16} className="text-secondary" /> History
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Established in 1985, Al-Noor Mosque has been a cornerstone of the community for over 40 years. 
            The mosque was expanded in 2010 to accommodate more worshippers and include a dedicated learning center.
          </p>
        </section>

        <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Users size={16} className="text-secondary" /> Committee
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {committee.map((member, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-2xl">
                <div>
                  <p className="text-sm font-bold text-slate-800">{member.name}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Contact & Location</h3>
          <div className="space-y-4">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                 <Phone size={18} />
               </div>
               <p className="text-sm font-bold text-slate-800">+966 50 123 4567</p>
             </div>
             <div className="w-full h-40 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
               Map Placeholder
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
