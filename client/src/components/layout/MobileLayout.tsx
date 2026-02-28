import { Link, useLocation } from "wouter";
import { Home, Clock, Users, BookOpen, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileLayoutProps {
  children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Clock, label: "Timings", path: "/timings" },
    { icon: Users, label: "Community", path: "/community" },
    { icon: LayoutGrid, label: "Services", path: "/services" },
    { icon: BookOpen, label: "Programs", path: "/programs" },
  ];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-50 relative overflow-hidden shadow-2xl sm:border-x sm:border-slate-200">
      <main className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
        {children}
      </main>

      <nav className="fixed bottom-0 w-full max-w-md glass-nav px-6 py-4 pb-safe z-50">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            return (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "flex flex-col items-center gap-1.5 transition-all duration-300",
                  isActive ? "text-primary scale-110" : "text-slate-400 hover:text-slate-600"
                )}
                data-testid={`nav-${item.label.toLowerCase()}`}>
                  <div className={cn(
                    "relative p-2 rounded-2xl transition-all duration-300",
                    isActive ? "bg-primary/10" : "bg-transparent"
                  )}>
                    <Icon strokeWidth={isActive ? 2.5 : 2} size={22} />
                  </div>
                  <span className={cn(
                    "text-[10px] font-medium transition-all duration-300",
                    isActive ? "opacity-100" : "opacity-70"
                  )}>
                    {item.label}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
