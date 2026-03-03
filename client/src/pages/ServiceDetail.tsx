import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function ServiceDetail({ title }: { title: string }) {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-full bg-[#F8F9FA] pb-12">
      <div className="bg-primary pt-14 pb-12 px-6 rounded-b-[3rem] text-white">
        <button onClick={() => setLocation("/")} className="p-2 bg-white/10 rounded-xl backdrop-blur-md mb-6">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold font-heading">{title}</h1>
      </div>
      <div className="px-6 py-12 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-3xl mb-6 flex items-center justify-center text-slate-300">
           {/* Dynamic Icon would go here */}
        </div>
        <p className="text-slate-500 font-medium">This service detail page for "{title}" is coming soon.</p>
      </div>
    </div>
  );
}
