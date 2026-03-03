import { ChevronLeft, CheckCircle2, Circle } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function SalahTracker() {
  const [, setLocation] = useLocation();
  const [prayers, setPrayers] = useState([
    { name: "Fajr", time: "05:12 AM", completed: true },
    { name: "Dhuhr", time: "12:30 PM", completed: true },
    { name: "Asr", time: "04:05 PM", completed: false },
    { name: "Maghrib", time: "06:45 PM", completed: false },
    { name: "Isha", time: "08:15 PM", completed: false },
  ]);

  const togglePrayer = (index: number) => {
    const newPrayers = [...prayers];
    newPrayers[index].completed = !newPrayers[index].completed;
    setPrayers(newPrayers);
  };

  return (
    <div className="min-h-full bg-[#F8F9FA] pb-12">
      <div className="bg-primary pt-14 pb-12 px-6 rounded-b-[3rem] text-white">
        <button onClick={() => setLocation("/")} className="p-2 bg-white/10 rounded-xl backdrop-blur-md mb-6">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold font-heading">Salah Tracker</h1>
        <p className="text-white/60 text-sm mt-1">Track your daily 5 prayers</p>
      </div>

      <div className="px-6 -mt-6 space-y-4">
        {prayers.map((prayer, i) => (
          <button
            key={prayer.name}
            onClick={() => togglePrayer(i)}
            className={`w-full bg-white p-5 rounded-[2rem] shadow-sm border flex items-center justify-between transition-all ${
              prayer.completed ? "border-emerald-100 bg-emerald-50/20" : "border-slate-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                prayer.completed ? "bg-emerald-100 text-emerald-600" : "bg-slate-50 text-slate-400"
              }`}>
                {prayer.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </div>
              <div className="text-left">
                <p className="text-base font-bold text-slate-800">{prayer.name}</p>
                <p className="text-xs text-slate-500 font-medium">{prayer.time}</p>
              </div>
            </div>
            {prayer.completed && (
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-100/50 px-3 py-1 rounded-full">
                Completed
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
