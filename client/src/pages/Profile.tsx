import { motion } from "framer-motion";
import { User, Mail, MapPin, Heart, Briefcase, Droplets, Users, ChevronLeft, Camera, Edit2 } from "lucide-react";
import { useLocation } from "wouter";

export default function Profile() {
  const [, setLocation] = useLocation();

  const user = {
    name: "Ahmed Abdullah",
    email: "ahmed.a@example.com",
    address: "123 Al-Noor Street, Makkah, Saudi Arabia",
    maritalStatus: "Married",
    familyMembers: [
      { name: "Sara (Wife)", age: 32 },
      { name: "Omar (Son)", age: 8 },
      { name: "Lina (Daughter)", age: 5 }
    ],
    gender: "Male",
    occupation: "Software Engineer",
    bloodGroup: "O+",
  };

  return (
    <div className="min-h-full bg-[#F8F9FA] pb-12">
      <div className="bg-primary pt-14 pb-20 px-6 rounded-b-[3rem] relative overflow-hidden">
        <button 
          onClick={() => setLocation("/")}
          className="absolute top-14 left-6 p-2 bg-white/10 rounded-xl text-white backdrop-blur-md"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex flex-col items-center mt-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-white p-1 shadow-xl">
              <div className="w-full h-full rounded-2xl bg-slate-100 flex items-center justify-center text-primary text-3xl font-bold">
                AA
              </div>
            </div>
            <button className="absolute -bottom-2 -right-2 p-2 bg-secondary rounded-xl text-white shadow-lg border-2 border-primary">
              <Camera size={14} />
            </button>
          </div>
          <h1 className="text-xl font-bold text-white mt-4 font-heading">{user.name}</h1>
          <p className="text-white/60 text-xs font-medium uppercase tracking-widest">{user.occupation}</p>
        </div>
      </div>

      <div className="px-6 -mt-10 space-y-6">
        <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex justify-between items-center">
            Personal Info
            <Edit2 size={14} className="text-secondary" />
          </h3>
          <div className="space-y-4">
            <InfoItem icon={Mail} label="Email" value={user.email} />
            <InfoItem icon={MapPin} label="Address" value={user.address} />
            <InfoItem icon={User} label="Gender" value={user.gender} />
            <InfoItem icon={Droplets} label="Blood Group" value={user.bloodGroup} />
            <InfoItem icon={Heart} label="Marital Status" value={user.maritalStatus} />
          </div>
        </section>

        <section className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex justify-between items-center">
            Family Information
            <Edit2 size={14} className="text-secondary" />
          </h3>
          <div className="space-y-4">
            {user.familyMembers.map((member, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                  <Users size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{member.name}</p>
                  <p className="text-xs text-slate-500">{member.age} years old</p>
                </div>
              </div>
            ))}
            <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-sm font-bold">
              + Add Family Member
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-secondary">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-sm font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}
