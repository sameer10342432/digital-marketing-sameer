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
import MobileMarketing from "@/pages/services/MobileMarketing";
import RemarketingCampaigns from "@/pages/services/RemarketingCampaigns";
import DigitalAdvertisingAgency from "@/pages/services/DigitalAdvertisingAgency";
import FullServiceDigitalAgency from "@/pages/services/FullServiceDigitalAgency";
import SEOCompanyUSA from "@/pages/services/SEOCompanyUSA";
import DigitalMarketingAgencyUSA from "@/pages/services/DigitalMarketingAgencyUSA";
import BestSEOAgency from "@/pages/services/BestSEOAgency";
import PPCManagementServices from "@/pages/services/PPCManagementServices";
import WebDevelopmentAgency from "@/pages/services/WebDevelopmentAgency";
import DigitalMarketingSmallBusiness from "@/pages/services/DigitalMarketingSmallBusiness";
import LocalDigitalMarketing from "@/pages/services/LocalDigitalMarketing";
import SEOForStartups from "@/pages/services/SEOForStartups";
import PPCForEcommerce from "@/pages/services/PPCForEcommerce";
import BrandingAgency from "@/pages/services/BrandingAgency";
import DigitalMarketingExpert from "@/pages/services/DigitalMarketingExpert";
import SEOAuditServices from "@/pages/services/SEOAuditServices";
import KeywordResearchServices from "@/pages/services/KeywordResearchServices";
import BacklinkBuilding from "@/pages/services/BacklinkBuilding";
import OnPageSEO from "@/pages/services/OnPageSEO";
import OffPageSEO from "@/pages/services/OffPageSEO";
import TechnicalSEO from "@/pages/services/TechnicalSEO";
import GoogleMyBusinessOptimization from "@/pages/services/GoogleMyBusinessOptimization";
import OnlineLeadGeneration from "@/pages/services/OnlineLeadGeneration";
import DigitalMarketingPackages from "@/pages/services/DigitalMarketingPackages";
import MonthlySEOServices from "@/pages/services/MonthlySEOServices";
import PerformanceMarketing from "@/pages/services/PerformanceMarketing";
import GrowthMarketingAgency from "@/pages/services/GrowthMarketingAgency";
import SaaSMarketingAgency from "@/pages/services/SaaSMarketingAgency";
import B2BDigitalMarketing from "@/pages/services/B2BDigitalMarketing";
import B2CMarketingServices from "@/pages/services/B2CMarketingServices";
import StartupMarketingAgency from "@/pages/services/StartupMarketingAgency";
import EnterpriseSEOServices from "@/pages/services/EnterpriseSEOServices";
import WhiteLabelSEO from "@/pages/services/WhiteLabelSEO";
import SEOResellerServices from "@/pages/services/SEOResellerServices";
import DigitalPRAgency from "@/pages/services/DigitalPRAgency";
import OnlineBrandManagement from "@/pages/services/OnlineBrandManagement";
import OrganicTrafficGrowth from "@/pages/services/OrganicTrafficGrowth";
import WebsiteTrafficServices from "@/pages/services/WebsiteTrafficServices";
import MarketingAutomation from "@/pages/services/MarketingAutomation";
import CRMIntegrationServices from "@/pages/services/CRMIntegrationServices";
import FunnelOptimization from "@/pages/services/FunnelOptimization";
import DigitalMarketingRealEstate from "@/pages/services/DigitalMarketingRealEstate";
import HealthcareDigitalMarketing from "@/pages/services/HealthcareDigitalMarketing";
import FintechMarketingAgency from "@/pages/services/FintechMarketingAgency";
import EcommerceSEOServices from "@/pages/services/EcommerceSEOServices";
import ShopifyMarketing from "@/pages/services/ShopifyMarketing";
import AmazonAdvertising from "@/pages/services/AmazonAdvertising";
import DigitalMarketingNonprofits from "@/pages/services/DigitalMarketingNonprofits";
import LawFirmSEO from "@/pages/services/LawFirmSEO";
import RestaurantMarketingOnline from "@/pages/services/RestaurantMarketingOnline";
import LocalBusinessMarketing from "@/pages/services/LocalBusinessMarketing";
import SEOForDentists from "@/pages/services/SEOForDentists";
import DigitalMarketingCoaches from "@/pages/services/DigitalMarketingCoaches";
import OnlineCourseMarketing from "@/pages/services/OnlineCourseMarketing";
import MembershipSiteMarketing from "@/pages/services/MembershipSiteMarketing";
import PodcastPromotionServices from "@/pages/services/PodcastPromotionServices";
import WebinarMarketing from "@/pages/services/WebinarMarketing";
import LeadMagnetCreation from "@/pages/services/LeadMagnetCreation";
import SalesFunnelDesign from "@/pages/services/SalesFunnelDesign";
import DigitalMarketingAgencyNearMe from "@/pages/services/DigitalMarketingAgencyNearMe";
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
      <Route path="/services/mobile-marketing" component={MobileMarketing} />
      <Route path="/services/remarketing-campaigns" component={RemarketingCampaigns} />
      <Route path="/services/digital-advertising-agency" component={DigitalAdvertisingAgency} />
      <Route path="/services/full-service-digital-agency" component={FullServiceDigitalAgency} />
      <Route path="/services/seo-company-usa" component={SEOCompanyUSA} />
      <Route path="/services/digital-marketing-agency-usa" component={DigitalMarketingAgencyUSA} />
      <Route path="/services/best-seo-agency" component={BestSEOAgency} />
      <Route path="/services/ppc-management-services" component={PPCManagementServices} />
      <Route path="/services/web-development-agency" component={WebDevelopmentAgency} />
      <Route path="/services/digital-marketing-small-business" component={DigitalMarketingSmallBusiness} />
      <Route path="/services/local-digital-marketing" component={LocalDigitalMarketing} />
      <Route path="/services/seo-for-startups" component={SEOForStartups} />
      <Route path="/services/ppc-for-ecommerce" component={PPCForEcommerce} />
      <Route path="/services/branding-agency" component={BrandingAgency} />
      <Route path="/services/digital-marketing-expert" component={DigitalMarketingExpert} />
      <Route path="/services/seo-audit-services" component={SEOAuditServices} />
      <Route path="/services/keyword-research-services" component={KeywordResearchServices} />
      <Route path="/services/backlink-building" component={BacklinkBuilding} />
      <Route path="/services/on-page-seo" component={OnPageSEO} />
      <Route path="/services/off-page-seo" component={OffPageSEO} />
      <Route path="/services/technical-seo" component={TechnicalSEO} />
      <Route path="/services/google-my-business-optimization" component={GoogleMyBusinessOptimization} />
      <Route path="/services/online-lead-generation" component={OnlineLeadGeneration} />
      <Route path="/services/digital-marketing-packages" component={DigitalMarketingPackages} />
      <Route path="/services/monthly-seo-services" component={MonthlySEOServices} />
      <Route path="/services/performance-marketing" component={PerformanceMarketing} />
      <Route path="/services/growth-marketing-agency" component={GrowthMarketingAgency} />
      <Route path="/services/saas-marketing-agency" component={SaaSMarketingAgency} />
      <Route path="/services/b2b-digital-marketing" component={B2BDigitalMarketing} />
      <Route path="/services/b2c-marketing-services" component={B2CMarketingServices} />
      <Route path="/services/startup-marketing-agency" component={StartupMarketingAgency} />
      <Route path="/services/enterprise-seo-services" component={EnterpriseSEOServices} />
      <Route path="/services/white-label-seo" component={WhiteLabelSEO} />
      <Route path="/services/seo-reseller-services" component={SEOResellerServices} />
      <Route path="/services/digital-pr-agency" component={DigitalPRAgency} />
      <Route path="/services/online-brand-management" component={OnlineBrandManagement} />
      <Route path="/services/organic-traffic-growth" component={OrganicTrafficGrowth} />
      <Route path="/services/website-traffic-services" component={WebsiteTrafficServices} />
      <Route path="/services/marketing-automation" component={MarketingAutomation} />
      <Route path="/services/crm-integration-services" component={CRMIntegrationServices} />
      <Route path="/services/funnel-optimization" component={FunnelOptimization} />
      <Route path="/services/digital-marketing-real-estate" component={DigitalMarketingRealEstate} />
      <Route path="/services/healthcare-digital-marketing" component={HealthcareDigitalMarketing} />
      <Route path="/services/fintech-marketing-agency" component={FintechMarketingAgency} />
      <Route path="/services/ecommerce-seo-services" component={EcommerceSEOServices} />
      <Route path="/services/shopify-marketing" component={ShopifyMarketing} />
      <Route path="/services/amazon-advertising" component={AmazonAdvertising} />
      <Route path="/services/digital-marketing-nonprofits" component={DigitalMarketingNonprofits} />
      <Route path="/services/law-firm-seo" component={LawFirmSEO} />
      <Route path="/services/restaurant-marketing-online" component={RestaurantMarketingOnline} />
      <Route path="/services/local-business-marketing" component={LocalBusinessMarketing} />
      <Route path="/services/seo-for-dentists" component={SEOForDentists} />
      <Route path="/services/digital-marketing-coaches" component={DigitalMarketingCoaches} />
      <Route path="/services/online-course-marketing" component={OnlineCourseMarketing} />
      <Route path="/services/membership-site-marketing" component={MembershipSiteMarketing} />
      <Route path="/services/podcast-promotion-services" component={PodcastPromotionServices} />
      <Route path="/services/webinar-marketing" component={WebinarMarketing} />
      <Route path="/services/lead-magnet-creation" component={LeadMagnetCreation} />
      <Route path="/services/sales-funnel-design" component={SalesFunnelDesign} />
      <Route path="/services/digital-marketing-agency-near-me" component={DigitalMarketingAgencyNearMe} />
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
