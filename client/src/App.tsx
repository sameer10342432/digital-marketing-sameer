import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import AllServices from "@/pages/AllServices";
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
import DigitalMarketingAgency from "@/pages/services/DigitalMarketingAgency";
import DigitalMarketingServices from "@/pages/services/DigitalMarketingServices";
import SEOServices from "@/pages/services/SEOServices";
import WebDesignServices from "@/pages/services/WebDesignServices";
import SearchEngineMarketing from "@/pages/services/SearchEngineMarketing";
import OnlineMarketingAgency from "@/pages/services/OnlineMarketingAgency";
import GoogleAdsManagement from "@/pages/services/GoogleAdsManagement";
import FacebookAdvertising from "@/pages/services/FacebookAdvertising";
import LocalSEO from "@/pages/services/LocalSEO";
import ConversionOptimization from "@/pages/services/ConversionOptimization";
import EcommerceMarketing from "@/pages/services/EcommerceMarketing";
import LinkBuilding from "@/pages/services/LinkBuilding";
import InfluencerMarketing from "@/pages/services/InfluencerMarketing";
import VideoMarketing from "@/pages/services/VideoMarketing";
import InstagramMarketing from "@/pages/services/InstagramMarketing";
import LinkedInAdvertising from "@/pages/services/LinkedInAdvertising";
import YouTubeMarketing from "@/pages/services/YouTubeMarketing";
import AffiliateMarketing from "@/pages/services/AffiliateMarketing";
import WebsiteOptimization from "@/pages/services/WebsiteOptimization";
import LandingPageDesign from "@/pages/services/LandingPageDesign";
import OnlineReputationManagement from "@/pages/services/OnlineReputationManagement";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/all-services" component={AllServices} />
      <Route path="/services/seo-optimization" component={SEOOptimization} />
      <Route path="/services/ppc-campaigns" component={PPCCampaigns} />
      <Route path="/services/social-media-marketing" component={SocialMediaMarketing} />
      <Route path="/services/email-marketing" component={EmailMarketing} />
      <Route path="/services/content-strategy" component={ContentStrategy} />
      <Route path="/services/digital-marketing-agency" component={DigitalMarketingAgency} />
      <Route path="/services/digital-marketing-services" component={DigitalMarketingServices} />
      <Route path="/services/seo-services" component={SEOServices} />
      <Route path="/services/web-design-services" component={WebDesignServices} />
      <Route path="/services/search-engine-marketing" component={SearchEngineMarketing} />
      <Route path="/services/online-marketing-agency" component={OnlineMarketingAgency} />
      <Route path="/services/google-ads-management" component={GoogleAdsManagement} />
      <Route path="/services/facebook-advertising" component={FacebookAdvertising} />
      <Route path="/services/local-seo" component={LocalSEO} />
      <Route path="/services/conversion-optimization" component={ConversionOptimization} />
      <Route path="/services/ecommerce-marketing" component={EcommerceMarketing} />
      <Route path="/services/link-building" component={LinkBuilding} />
      <Route path="/services/influencer-marketing" component={InfluencerMarketing} />
      <Route path="/services/video-marketing" component={VideoMarketing} />
      <Route path="/services/instagram-marketing" component={InstagramMarketing} />
      <Route path="/services/linkedin-advertising" component={LinkedInAdvertising} />
      <Route path="/services/youtube-marketing" component={YouTubeMarketing} />
      <Route path="/services/affiliate-marketing" component={AffiliateMarketing} />
      <Route path="/services/website-optimization" component={WebsiteOptimization} />
      <Route path="/services/landing-page-design" component={LandingPageDesign} />
      <Route path="/services/online-reputation-management" component={OnlineReputationManagement} />
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
