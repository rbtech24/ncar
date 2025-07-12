import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import GetStarted from "@/pages/get-started";
import AthleteProfile from "@/pages/athlete-profile";
import CoachProfile from "@/pages/coach-profile";
import ParentProfile from "@/pages/parent-profile";
import CollegeProfile from "@/pages/college-profile";
import Messages from "@/pages/messages";
import AthleteDirectory from "@/pages/athlete-directory";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/get-started" component={GetStarted} />
      <Route path="/athlete-profile" component={AthleteProfile} />
      <Route path="/coach-profile" component={CoachProfile} />
      <Route path="/parent-profile" component={ParentProfile} />
      <Route path="/college-profile" component={CollegeProfile} />
      <Route path="/messages" component={Messages} />
      <Route path="/athlete-directory" component={AthleteDirectory} />
      <Route component={NotFound} />
    </Switch>
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
