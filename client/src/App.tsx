import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { MobileLayout } from "./components/layout/MobileLayout";
import Home from "./pages/Home";
import Timings from "./pages/Timings";
import Community from "./pages/Community";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import MosqueDetail from "./pages/MosqueDetail";
import SalahTracker from "./pages/SalahTracker";
import ServiceDetail from "./pages/ServiceDetail";
import Emergency from "./pages/Emergency";
import Taawun from "./pages/Taawun";

function Router() {
  return (
    <MobileLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/timings" component={Timings} />
        <Route path="/community" component={Community} />
        <Route path="/services" component={Services} />
        <Route path="/programs" component={Programs} />
        <Route path="/profile" component={Profile} />
        <Route path="/mosque-detail" component={MosqueDetail} />
        <Route path="/salah-tracker" component={SalahTracker} />
        <Route path="/emergency" component={Emergency} />
        <Route path="/taawun" component={Taawun} />
        <Route path="/service/:type">
          {(params) => <ServiceDetail title={params.type.charAt(0).toUpperCase() + params.type.slice(1)} />}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </MobileLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
