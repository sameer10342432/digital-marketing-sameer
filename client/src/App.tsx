import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import CaseStudy from "@/pages/CaseStudy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Tools from "@/pages/Tools";
import Login from "@/pages/Login";
import Admin from "@/pages/Admin";
import AdminPortfolio from "@/pages/AdminPortfolio";
import AdminService from "@/pages/AdminService";
import AdminContacts from "@/pages/AdminContacts";
import AdminSubscriptions from "@/pages/AdminSubscriptions";
import SEOOptimization from "@/pages/services/SEOOptimization";
import PPCCampaigns from "@/pages/services/PPCCampaigns";
import SocialMediaMarketing from "@/pages/services/SocialMediaMarketing";
import EmailMarketing from "@/pages/services/EmailMarketing";
import ContentStrategy from "@/pages/services/ContentStrategy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/seo-optimization" component={SEOOptimization} />
      <Route path="/services/ppc-campaigns" component={PPCCampaigns} />
      <Route path="/services/social-media-marketing" component={SocialMediaMarketing} />
      <Route path="/services/email-marketing" component={EmailMarketing} />
      <Route path="/services/content-strategy" component={ContentStrategy} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:id" component={CaseStudy} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/tools" component={Tools} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/portfolios" component={AdminPortfolio} />
      <Route path="/admin/services" component={AdminService} />
      <Route path="/admin/contacts" component={AdminContacts} />
      <Route path="/admin/subscriptions" component={AdminSubscriptions} />
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
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
