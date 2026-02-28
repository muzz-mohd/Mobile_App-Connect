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

function Router() {
  return (
    <MobileLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/timings" component={Timings} />
        <Route path="/community" component={Community} />
        <Route path="/services" component={Services} />
        <Route path="/programs" component={Programs} />
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
