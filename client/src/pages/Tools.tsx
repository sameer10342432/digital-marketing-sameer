import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { setPageMeta } from '@/lib/seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, Mail, Hash, Link as LinkIcon, Search, FileText, DollarSign, BarChart, PenTool, Target, Users, Video, TestTube, MousePointer, Zap, Eye, ListChecks, Gauge, Clock, Presentation, Award, Filter, Newspaper, RefreshCcw, Smartphone, CheckCircle2, Download } from 'lucide-react';

export default function Tools() {
  useEffect(() => {
    setPageMeta(
      'Free Digital Marketing Tools - 60+ Professional Calculators',
      'Access 60+ powerful free digital marketing tools including ROI calculator, SEO tools, social media analytics, conversion calculators, and advanced marketing metrics for data-driven decisions.'
    );
  }, []);

  // Original tools state
  const [roiResults, setRoiResults] = useState<{ roi: number; percentage: number } | null>(null);
  const [engagementResults, setEngagementResults] = useState<number | null>(null);
  const [subjectScore, setSubjectScore] = useState<{ score: number; analysis: string } | null>(null);
  const [metaDescription, setMetaDescription] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [utmLink, setUtmLink] = useState('');
  const [cpcResults, setCpcResults] = useState<{ cpc: number; cpm: number } | null>(null);
  const [keywordDensity, setKeywordDensity] = useState<{ keyword: string; count: number; density: number }[]>([]);
  const [readabilityScore, setReadabilityScore] = useState<{ score: number; level: string } | null>(null);
  const [budgetBreakdown, setBudgetBreakdown] = useState<any>(null);

  // New tools state
  const [conversionRate, setConversionRate] = useState<number | null>(null);
  const [ctr, setCtr] = useState<number | null>(null);
  const [clv, setClv] = useState<number | null>(null);
  const [emailOpenRate, setEmailOpenRate] = useState<number | null>(null);
  const [adSpendResults, setAdSpendResults] = useState<{ roas: number; profit: number } | null>(null);
  const [costPerLead, setCostPerLead] = useState<number | null>(null);
  const [cac, setCac] = useState<number | null>(null);
  const [videoEngagement, setVideoEngagement] = useState<number | null>(null);
  const [abTestResults, setAbTestResults] = useState<{ significant: boolean; confidence: number } | null>(null);
  const [bounceImpact, setBounceImpact] = useState<{ lostConversions: number; lostRevenue: number } | null>(null);
  const [influencerRoi, setInfluencerRoi] = useState<{ roi: number; earnings: number } | null>(null);
  const [landingPageScore, setLandingPageScore] = useState<{ score: number; recommendations: string[] } | null>(null);
  const [emailGrowth, setEmailGrowth] = useState<number | null>(null);
  const [socialReach, setSocialReach] = useState<{ estimatedReach: number; potential: number } | null>(null);
  const [contentScore, setContentScore] = useState<{ score: number; analysis: string } | null>(null);
  
  // Additional new tools state
  const [pageSpeedImpact, setPageSpeedImpact] = useState<{ lostVisitors: number; lostRevenue: number } | null>(null);
  const [bestPostTime, setBestPostTime] = useState<{ day: string; time: string; reason: string } | null>(null);
  const [webinarRoi, setWebinarRoi] = useState<{ roi: number; profitPerAttendee: number } | null>(null);
  const [brandAwareness, setBrandAwareness] = useState<{ score: number; level: string } | null>(null);
  const [funnelLeak, setFunnelLeak] = useState<{ leakStage: string; lostLeads: number; improvement: string } | null>(null);
  const [newsletterPerformance, setNewsletterPerformance] = useState<{ ctr: number; ctor: number; rating: string } | null>(null);
  const [retargetingRoi, setRetargetingRoi] = useState<{ roi: number; cpa: number } | null>(null);
  const [mobileVsDesktop, setMobileVsDesktop] = useState<{ winner: string; difference: number } | null>(null);
  const [mqlScore, setMqlScore] = useState<{ score: number; quality: string; recommendations: string[] } | null>(null);
  const [downloadRate, setDownloadRate] = useState<{ rate: number; effectiveness: string } | null>(null);

  // New advanced tools state
  const [seoTrafficValue, setSeoTrafficValue] = useState<{ monthlyValue: number; annualValue: number } | null>(null);
  const [backlinkQuality, setBacklinkQuality] = useState<{ score: number; quality: string; advice: string } | null>(null);
  const [domainAuthority, setDomainAuthority] = useState<{ score: number; level: string } | null>(null);
  const [socialGrowthRate, setSocialGrowthRate] = useState<{ monthlyGrowth: number; projectedFollowers: number } | null>(null);
  const [viralCoefficient, setViralCoefficient] = useState<{ coefficient: number; viralStatus: string } | null>(null);
  const [churnRate, setChurnRate] = useState<{ rate: number; retention: number } | null>(null);
  const [ltvCacRatio, setLtvCacRatio] = useState<{ ratio: number; health: string } | null>(null);
  const [paybackPeriod, setPaybackPeriod] = useState<{ months: number; assessment: string } | null>(null);
  const [impressionShare, setImpressionShare] = useState<{ share: number; lostOpportunity: number } | null>(null);
  const [googleAdsQuality, setGoogleAdsQuality] = useState<{ score: number; rating: string; tips: string[] } | null>(null);
  const [fbAdRelevance, setFbAdRelevance] = useState<{ score: number; rating: string } | null>(null);
  const [instagramEngagement, setInstagramEngagement] = useState<{ rate: number; quality: string } | null>(null);
  const [tiktokEngagement, setTiktokEngagement] = useState<{ rate: number; viralPotential: string } | null>(null);
  const [linkedinReach, setLinkedinReach] = useState<{ estimatedReach: number; engagement: number } | null>(null);
  const [youtubeCpm, setYoutubeCpm] = useState<{ cpm: number; estimatedRevenue: number } | null>(null);
  const [twitterEngagement, setTwitterEngagement] = useState<{ rate: number; impressions: number } | null>(null);
  const [pinterestPerformance, setPinterestPerformance] = useState<{ saveRate: number; reach: number } | null>(null);
  const [emailDeliverability, setEmailDeliverability] = useState<{ score: number; issues: string[] } | null>(null);
  const [cartAbandonment, setCartAbandonment] = useState<{ rate: number; lostRevenue: number } | null>(null);
  const [affiliateCommission, setAffiliateCommission] = useState<{ commission: number; roi: number } | null>(null);
  const [podcastRoi, setPodcastRoi] = useState<{ roi: number; costPerListener: number } | null>(null);
  const [blogPerformance, setBlogPerformance] = useState<{ score: number; recommendations: string[] } | null>(null);
  const [keywordDifficulty, setKeywordDifficulty] = useState<{ difficulty: number; level: string } | null>(null);
  const [serpClickDistribution, setSerpClickDistribution] = useState<{ position: number; expectedCtr: number } | null>(null);
  const [competitorGap, setCompetitorGap] = useState<{ gap: number; opportunities: string[] } | null>(null);

  // Original calculation functions
  const calculateROI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const revenue = parseFloat(formData.get('revenue') as string);
    const investment = parseFloat(formData.get('investment') as string);
    
    if (!investment || investment === 0) {
      setRoiResults(null);
      return;
    }
    
    const roi = revenue - investment;
    const percentage = ((roi / investment) * 100);
    
    setRoiResults({ roi, percentage });
  };

  const calculateEngagement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const likes = parseFloat(formData.get('likes') as string) || 0;
    const comments = parseFloat(formData.get('comments') as string) || 0;
    const shares = parseFloat(formData.get('shares') as string) || 0;
    const followers = parseFloat(formData.get('followers') as string);
    
    if (!followers || followers === 0) {
      setEngagementResults(null);
      return;
    }
    
    const engagement = ((likes + comments + shares) / followers) * 100;
    setEngagementResults(engagement);
  };

  const analyzeSubjectLine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = formData.get('subject') as string;
    
    let score = 50;
    let analysis = [];
    
    const length = subject.length;
    if (length >= 30 && length <= 50) {
      score += 20;
      analysis.push('✓ Optimal length');
    } else {
      analysis.push('✗ Length should be 30-50 characters');
    }
    
    if (/[0-9]/.test(subject)) {
      score += 10;
      analysis.push('✓ Contains numbers');
    }
    
    if (/[!?]/.test(subject)) {
      score += 10;
      analysis.push('✓ Has punctuation for emphasis');
    }
    
    if (subject.toLowerCase().includes('you') || subject.toLowerCase().includes('your')) {
      score += 10;
      analysis.push('✓ Personalized with "you/your"');
    }
    
    setSubjectScore({ score, analysis: analysis.join('\n') });
  };

  const generateMetaDescription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const keywords = formData.get('keywords') as string;
    const topic = formData.get('topic') as string;
    
    const description = `${topic}. ${keywords}. Get started today with our comprehensive solutions and expert guidance.`;
    setMetaDescription(description);
  };

  const generateHashtags = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const topic = (formData.get('topic') as string).toLowerCase();
    
    const hashtagLibrary: Record<string, string[]> = {
      'marketing': ['marketing', 'digitalmarketing', 'marketingstrategy', 'marketingtips', 'contentmarketing', 'socialmediamarketing'],
      'seo': ['seo', 'searchengineoptimization', 'seotips', 'googleranking', 'organictraffic', 'keywords'],
      'social': ['socialmedia', 'socialmediastrategy', 'engagement', 'community', 'influencer', 'viral'],
      'content': ['contentcreation', 'contentstrategy', 'blogging', 'storytelling', 'copywriting', 'contentmarketing'],
      'business': ['business', 'entrepreneur', 'startup', 'smallbusiness', 'businessgrowth', 'success'],
    };
    
    let generatedHashtags: string[] = [];
    
    for (const [key, tags] of Object.entries(hashtagLibrary)) {
      if (topic.includes(key)) {
        generatedHashtags = tags;
        break;
      }
    }
    
    if (generatedHashtags.length === 0) {
      generatedHashtags = ['marketing', 'digital', 'business', 'growth', 'strategy', 'success'];
    }
    
    setHashtags(generatedHashtags.map(tag => `#${tag}`));
  };

  const buildUTMLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = formData.get('url') as string;
    const source = formData.get('source') as string;
    const medium = formData.get('medium') as string;
    const campaign = formData.get('campaign') as string;
    
    const params = new URLSearchParams({
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
    });
    
    const finalUrl = `${url}?${params.toString()}`;
    setUtmLink(finalUrl);
  };

  const calculateCPC = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const spent = parseFloat(formData.get('spent') as string);
    const clicks = parseFloat(formData.get('clicks') as string);
    const impressions = parseFloat(formData.get('impressions') as string);
    
    if (!clicks || clicks === 0 || !impressions || impressions === 0) {
      setCpcResults(null);
      return;
    }
    
    const cpc = spent / clicks;
    const cpm = (spent / impressions) * 1000;
    
    setCpcResults({ cpc, cpm });
  };

  const analyzeKeywordDensity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = (formData.get('content') as string).toLowerCase();
    
    const words = content.split(/\s+/).filter(word => word.length > 3);
    const totalWords = words.length;
    
    if (totalWords === 0) {
      setKeywordDensity([]);
      return;
    }
    
    const wordCount: Record<string, number> = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    const densityData = Object.entries(wordCount)
      .map(([keyword, count]) => ({
        keyword,
        count,
        density: (count / totalWords) * 100
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
    
    setKeywordDensity(densityData);
  };

  const analyzeReadability = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('text') as string;
    
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = text.split(/\s+/).filter(w => w.length > 0);
    
    if (sentences.length === 0 || words.length === 0) {
      setReadabilityScore(null);
      return;
    }
    
    const syllables = words.reduce((sum, word) => {
      return sum + word.split(/[aeiouy]+/i).length - 1;
    }, 0);
    
    const avgWordsPerSentence = words.length / sentences.length;
    const avgSyllablesPerWord = syllables / words.length;
    
    const score = 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord;
    
    let level = '';
    if (score >= 90) level = 'Very Easy';
    else if (score >= 80) level = 'Easy';
    else if (score >= 70) level = 'Fairly Easy';
    else if (score >= 60) level = 'Standard';
    else if (score >= 50) level = 'Fairly Difficult';
    else if (score >= 30) level = 'Difficult';
    else level = 'Very Difficult';
    
    setReadabilityScore({ score: Math.max(0, Math.min(100, score)), level });
  };

  const calculateBudget = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const total = parseFloat(formData.get('budget') as string);
    
    const breakdown = {
      ppc: total * 0.30,
      social: total * 0.25,
      content: total * 0.20,
      seo: total * 0.15,
      email: total * 0.10,
    };
    
    setBudgetBreakdown(breakdown);
  };

  // New calculation functions
  const calculateConversionRate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const conversions = parseFloat(formData.get('conversions') as string);
    const visitors = parseFloat(formData.get('visitors') as string);
    
    if (!visitors || visitors === 0) {
      setConversionRate(null);
      return;
    }
    
    const rate = (conversions / visitors) * 100;
    setConversionRate(rate);
  };

  const calculateCTR = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const clicks = parseFloat(formData.get('ctr-clicks') as string);
    const impressions = parseFloat(formData.get('ctr-impressions') as string);
    
    if (!impressions || impressions === 0) {
      setCtr(null);
      return;
    }
    
    const rate = (clicks / impressions) * 100;
    setCtr(rate);
  };

  const calculateCLV = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const avgPurchase = parseFloat(formData.get('avgPurchase') as string);
    const frequency = parseFloat(formData.get('frequency') as string);
    const lifespan = parseFloat(formData.get('lifespan') as string);
    
    const value = avgPurchase * frequency * lifespan;
    setClv(value);
  };

  const calculateEmailOpenRate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const opens = parseFloat(formData.get('opens') as string);
    const sent = parseFloat(formData.get('sent') as string);
    
    if (!sent || sent === 0) {
      setEmailOpenRate(null);
      return;
    }
    
    const rate = (opens / sent) * 100;
    setEmailOpenRate(rate);
  };

  const calculateAdSpend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const adSpent = parseFloat(formData.get('adSpent') as string);
    const revenue = parseFloat(formData.get('adRevenue') as string);
    
    if (!adSpent || adSpent === 0) {
      setAdSpendResults(null);
      return;
    }
    
    const roas = revenue / adSpent;
    const profit = revenue - adSpent;
    setAdSpendResults({ roas, profit });
  };

  const calculateCPL = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const spent = parseFloat(formData.get('cplSpent') as string);
    const leads = parseFloat(formData.get('leads') as string);
    
    if (!leads || leads === 0) {
      setCostPerLead(null);
      return;
    }
    
    const cpl = spent / leads;
    setCostPerLead(cpl);
  };

  const calculateCAC = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const marketingSpent = parseFloat(formData.get('marketingSpent') as string);
    const salesSpent = parseFloat(formData.get('salesSpent') as string);
    const customers = parseFloat(formData.get('customers') as string);
    
    if (!customers || customers === 0) {
      setCac(null);
      return;
    }
    
    const cost = (marketingSpent + salesSpent) / customers;
    setCac(cost);
  };

  const calculateVideoEngagement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const views = parseFloat(formData.get('views') as string);
    const likes = parseFloat(formData.get('videoLikes') as string) || 0;
    const comments = parseFloat(formData.get('videoComments') as string) || 0;
    const shares = parseFloat(formData.get('videoShares') as string) || 0;
    
    if (!views || views === 0) {
      setVideoEngagement(null);
      return;
    }
    
    const engagement = ((likes + comments + shares) / views) * 100;
    setVideoEngagement(engagement);
  };

  const calculateABTest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const visitorsA = parseFloat(formData.get('visitorsA') as string);
    const conversionsA = parseFloat(formData.get('conversionsA') as string);
    const visitorsB = parseFloat(formData.get('visitorsB') as string);
    const conversionsB = parseFloat(formData.get('conversionsB') as string);
    
    if (!visitorsA || !visitorsB || visitorsA === 0 || visitorsB === 0) {
      setAbTestResults(null);
      return;
    }
    
    const rateA = conversionsA / visitorsA;
    const rateB = conversionsB / visitorsB;
    const diff = Math.abs(rateA - rateB);
    const pooled = (conversionsA + conversionsB) / (visitorsA + visitorsB);
    const se = Math.sqrt(pooled * (1 - pooled) * (1 / visitorsA + 1 / visitorsB));
    const zScore = diff / se;
    const confidence = (1 - Math.exp(-0.717 * zScore - 0.416 * zScore * zScore)) * 100;
    const significant = confidence > 95;
    
    setAbTestResults({ significant, confidence });
  };

  const calculateBounceImpact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const visitors = parseFloat(formData.get('bounceVisitors') as string);
    const bounceRate = parseFloat(formData.get('bounceRate') as string);
    const conversionRate = parseFloat(formData.get('bounceConversionRate') as string);
    const avgValue = parseFloat(formData.get('avgValue') as string);
    
    if (!visitors || visitors === 0) {
      setBounceImpact(null);
      return;
    }
    
    const bounces = visitors * (bounceRate / 100);
    const potentialConversions = bounces * (conversionRate / 100);
    const lostRevenue = potentialConversions * avgValue;
    
    setBounceImpact({ lostConversions: potentialConversions, lostRevenue });
  };

  const calculateInfluencerROI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const spent = parseFloat(formData.get('influencerSpent') as string);
    const earnings = parseFloat(formData.get('influencerEarnings') as string);
    
    if (!spent || spent === 0) {
      setInfluencerRoi(null);
      return;
    }
    
    const roi = ((earnings - spent) / spent) * 100;
    setInfluencerRoi({ roi, earnings: earnings - spent });
  };

  const analyzeLandingPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const hasHeadline = formData.get('hasHeadline') === 'yes';
    const hasCTA = formData.get('hasCTA') === 'yes';
    const hasTestimonials = formData.get('hasTestimonials') === 'yes';
    const loadTime = parseFloat(formData.get('loadTime') as string);
    const mobileOptimized = formData.get('mobileOptimized') === 'yes';
    
    let score = 0;
    const recommendations = [];
    
    if (hasHeadline) {
      score += 20;
    } else {
      recommendations.push('Add a clear, compelling headline');
    }
    
    if (hasCTA) {
      score += 25;
    } else {
      recommendations.push('Include a strong call-to-action button');
    }
    
    if (hasTestimonials) {
      score += 15;
    } else {
      recommendations.push('Add customer testimonials for trust');
    }
    
    if (loadTime < 3) {
      score += 20;
    } else {
      recommendations.push('Improve page load time (target < 3 seconds)');
    }
    
    if (mobileOptimized) {
      score += 20;
    } else {
      recommendations.push('Optimize for mobile devices');
    }
    
    setLandingPageScore({ score, recommendations });
  };

  const calculateEmailGrowth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newSubs = parseFloat(formData.get('newSubs') as string);
    const unsubscribes = parseFloat(formData.get('unsubscribes') as string);
    const totalSubs = parseFloat(formData.get('totalSubs') as string);
    
    if (!totalSubs || totalSubs === 0) {
      setEmailGrowth(null);
      return;
    }
    
    const growth = ((newSubs - unsubscribes) / totalSubs) * 100;
    setEmailGrowth(growth);
  };

  const calculateSocialReach = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const followers = parseFloat(formData.get('reachFollowers') as string);
    const avgEngagement = parseFloat(formData.get('avgEngagement') as string);
    const shareRate = parseFloat(formData.get('shareRate') as string) || 0;
    
    const directReach = followers;
    const engagedUsers = followers * (avgEngagement / 100);
    const viralReach = engagedUsers * shareRate * 10;
    const estimatedReach = directReach + viralReach;
    
    setSocialReach({ estimatedReach, potential: viralReach });
  };

  const analyzeContent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const wordCount = parseFloat(formData.get('wordCount') as string);
    const hasImages = formData.get('hasImages') === 'yes';
    const hasLinks = formData.get('hasLinks') === 'yes';
    const hasHeadings = formData.get('hasHeadings') === 'yes';
    
    let score = 0;
    const analysis = [];
    
    if (wordCount >= 1000 && wordCount <= 2000) {
      score += 30;
      analysis.push('✓ Optimal word count for SEO');
    } else if (wordCount < 1000) {
      score += 15;
      analysis.push('⚠ Consider adding more content (1000-2000 words ideal)');
    } else {
      score += 20;
      analysis.push('⚠ Content is lengthy, ensure it stays engaging');
    }
    
    if (hasImages) {
      score += 25;
      analysis.push('✓ Includes images for visual appeal');
    } else {
      analysis.push('✗ Add relevant images to enhance engagement');
    }
    
    if (hasLinks) {
      score += 20;
      analysis.push('✓ Contains internal/external links');
    } else {
      analysis.push('✗ Add relevant links for better SEO');
    }
    
    if (hasHeadings) {
      score += 25;
      analysis.push('✓ Uses proper heading structure');
    } else {
      analysis.push('✗ Use H2, H3 tags to structure content');
    }
    
    setContentScore({ score, analysis: analysis.join('\n') });
  };

  // New calculation functions
  const calculatePageSpeedImpact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const visitors = parseFloat(formData.get('speedVisitors') as string);
    const loadTime = parseFloat(formData.get('loadTime') as string);
    const avgValue = parseFloat(formData.get('speedAvgValue') as string);
    
    if (!Number.isFinite(visitors) || !Number.isFinite(loadTime) || !Number.isFinite(avgValue) ||
        visitors <= 0 || loadTime < 0 || avgValue < 0) {
      setPageSpeedImpact(null);
      return;
    }
    
    let bounceIncrease = 0;
    if (loadTime > 3) bounceIncrease = Math.min(100, (loadTime - 3) * 10);
    const lostVisitors = visitors * (bounceIncrease / 100);
    const lostRevenue = lostVisitors * 0.03 * avgValue;
    
    setPageSpeedImpact({ lostVisitors, lostRevenue });
  };

  const calculateBestPostTime = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const platform = formData.get('platform') as string;
    const audience = formData.get('audience') as string;
    
    const schedules: Record<string, Record<string, { day: string; time: string; reason: string }>> = {
      'facebook': {
        'b2b': { day: 'Wednesday', time: '12:00 PM - 1:00 PM', reason: 'Professionals check during lunch breaks' },
        'b2c': { day: 'Saturday', time: '12:00 PM - 1:00 PM', reason: 'Weekend leisure browsing peak' }
      },
      'instagram': {
        'b2b': { day: 'Wednesday', time: '11:00 AM - 1:00 PM', reason: 'Mid-week engagement peak' },
        'b2c': { day: 'Friday', time: '5:00 PM - 7:00 PM', reason: 'Weekend preparation scrolling' }
      },
      'twitter': {
        'b2b': { day: 'Tuesday', time: '9:00 AM - 10:00 AM', reason: 'Morning news & industry updates' },
        'b2c': { day: 'Wednesday', time: '12:00 PM - 1:00 PM', reason: 'Lunch break browsing' }
      },
      'linkedin': {
        'b2b': { day: 'Wednesday', time: '8:00 AM - 10:00 AM', reason: 'Professional networking hours' },
        'b2c': { day: 'Tuesday', time: '10:00 AM - 12:00 PM', reason: 'Business hours engagement' }
      }
    };
    
    const result = schedules[platform]?.[audience] || { day: 'Wednesday', time: '12:00 PM', reason: 'General best practice' };
    setBestPostTime(result);
  };

  const calculateWebinarRoi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const cost = parseFloat(formData.get('webinarCost') as string);
    const attendees = parseFloat(formData.get('attendees') as string);
    const conversions = parseFloat(formData.get('webinarConversions') as string);
    const avgSale = parseFloat(formData.get('avgSale') as string);
    
    if (!Number.isFinite(cost) || !Number.isFinite(attendees) || !Number.isFinite(conversions) || !Number.isFinite(avgSale) ||
        cost <= 0 || attendees <= 0 || conversions < 0 || avgSale < 0) {
      setWebinarRoi(null);
      return;
    }
    
    const revenue = conversions * avgSale;
    const roi = ((revenue - cost) / cost) * 100;
    const profitPerAttendee = (revenue - cost) / attendees;
    
    setWebinarRoi({ roi, profitPerAttendee });
  };

  const calculateBrandAwareness = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const directSearches = parseFloat(formData.get('directSearches') as string) || 0;
    const socialMentions = parseFloat(formData.get('socialMentions') as string) || 0;
    const websiteTraffic = parseFloat(formData.get('brandTraffic') as string) || 0;
    const backlinks = parseFloat(formData.get('backlinks') as string) || 0;
    
    const score = Math.min(100, (directSearches / 10) + (socialMentions / 50) + (websiteTraffic / 100) + (backlinks / 20));
    
    let level = '';
    if (score >= 80) level = 'Excellent - Strong Brand Recognition';
    else if (score >= 60) level = 'Good - Growing Awareness';
    else if (score >= 40) level = 'Average - Building Presence';
    else if (score >= 20) level = 'Low - Early Stage';
    else level = 'Very Low - Need More Visibility';
    
    setBrandAwareness({ score, level });
  };

  const analyzeFunnelLeak = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const awareness = parseFloat(formData.get('awareness') as string);
    const interest = parseFloat(formData.get('interest') as string);
    const decision = parseFloat(formData.get('decision') as string);
    const action = parseFloat(formData.get('action') as string);
    
    if (!Number.isFinite(awareness) || !Number.isFinite(interest) ||
        !Number.isFinite(decision) || !Number.isFinite(action) ||
        awareness < 0 || interest < 0 || decision < 0 || action < 0 ||
        interest > awareness || decision > interest || action > decision) {
      setFunnelLeak(null);
      return;
    }
    
    const awarenessToInterest = Math.max(0, awareness - interest);
    const interestToDecision = Math.max(0, interest - decision);
    const decisionToAction = Math.max(0, decision - action);
    
    let leakStage = 'Awareness to Interest';
    let lostLeads = awarenessToInterest;
    let improvement = 'Improve content quality and lead magnets';
    
    if (interestToDecision > lostLeads) {
      leakStage = 'Interest to Decision';
      lostLeads = interestToDecision;
      improvement = 'Add social proof, case studies, and comparisons';
    }
    
    if (decisionToAction > lostLeads) {
      leakStage = 'Decision to Action';
      lostLeads = decisionToAction;
      improvement = 'Simplify checkout, add urgency, reduce friction';
    }
    
    setFunnelLeak({ leakStage, lostLeads, improvement });
  };

  const calculateNewsletterPerformance = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const sent = parseFloat(formData.get('newsletterSent') as string);
    const opened = parseFloat(formData.get('newsletterOpened') as string);
    const clicked = parseFloat(formData.get('newsletterClicked') as string);
    
    if (!Number.isFinite(sent) || !Number.isFinite(opened) || !Number.isFinite(clicked) ||
        sent <= 0 || opened < 0 || clicked < 0 || clicked > opened || opened > sent) {
      setNewsletterPerformance(null);
      return;
    }
    
    const ctr = (clicked / sent) * 100;
    const ctor = opened > 0 ? (clicked / opened) * 100 : 0;
    
    let rating = '';
    if (ctor >= 15) rating = 'Excellent';
    else if (ctor >= 10) rating = 'Good';
    else if (ctor >= 5) rating = 'Average';
    else rating = 'Needs Improvement';
    
    setNewsletterPerformance({ ctr, ctor, rating });
  };

  const calculateRetargetingRoi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const spent = parseFloat(formData.get('retargetingSpent') as string);
    const conversions = parseFloat(formData.get('retargetingConversions') as string);
    const revenue = parseFloat(formData.get('retargetingRevenue') as string);
    
    if (!Number.isFinite(spent) || !Number.isFinite(conversions) || !Number.isFinite(revenue) ||
        spent <= 0 || conversions <= 0 || revenue < 0) {
      setRetargetingRoi(null);
      return;
    }
    
    const roi = ((revenue - spent) / spent) * 100;
    const cpa = spent / conversions;
    
    setRetargetingRoi({ roi, cpa });
  };

  const compareMobileDesktop = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mobileVisitors = parseFloat(formData.get('mobileVisitors') as string);
    const mobileConversions = parseFloat(formData.get('mobileConversions') as string);
    const desktopVisitors = parseFloat(formData.get('desktopVisitors') as string);
    const desktopConversions = parseFloat(formData.get('desktopConversions') as string);
    
    if (!Number.isFinite(mobileVisitors) || !Number.isFinite(mobileConversions) ||
        !Number.isFinite(desktopVisitors) || !Number.isFinite(desktopConversions) ||
        mobileVisitors <= 0 || desktopVisitors <= 0 || mobileConversions < 0 || desktopConversions < 0 ||
        mobileConversions > mobileVisitors || desktopConversions > desktopVisitors) {
      setMobileVsDesktop(null);
      return;
    }
    
    const mobileRate = (mobileConversions / mobileVisitors) * 100;
    const desktopRate = (desktopConversions / desktopVisitors) * 100;
    
    const winner = mobileRate > desktopRate ? 'Mobile' : 'Desktop';
    const difference = Math.abs(mobileRate - desktopRate);
    
    setMobileVsDesktop({ winner, difference });
  };

  const calculateMqlScore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailOpened = formData.get('emailOpened') === 'yes';
    const websiteVisits = parseFloat(formData.get('websiteVisits') as string);
    const contentDownloads = parseFloat(formData.get('contentDownloads') as string);
    const budgetMatch = formData.get('budgetMatch') === 'yes';
    const decisionMaker = formData.get('decisionMaker') === 'yes';
    
    let score = 0;
    const recommendations = [];
    
    if (emailOpened) {
      score += 15;
    } else {
      recommendations.push('Re-engage with targeted email campaigns');
    }
    
    if (websiteVisits >= 3) {
      score += 25;
    } else {
      recommendations.push('Encourage more website engagement');
    }
    
    if (contentDownloads >= 1) {
      score += 20;
    } else {
      recommendations.push('Offer valuable content downloads');
    }
    
    if (budgetMatch) {
      score += 20;
    } else {
      recommendations.push('Qualify budget alignment');
    }
    
    if (decisionMaker) {
      score += 20;
    } else {
      recommendations.push('Connect with decision makers');
    }
    
    let quality = '';
    if (score >= 80) quality = 'Hot Lead - High Priority';
    else if (score >= 60) quality = 'Warm Lead - Good Potential';
    else if (score >= 40) quality = 'Cold Lead - Nurture Required';
    else quality = 'Unqualified - Low Priority';
    
    setMqlScore({ score, quality, recommendations });
  };

  const calculateDownloadRate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pageViews = parseFloat(formData.get('pageViews') as string);
    const downloads = parseFloat(formData.get('downloads') as string);
    
    if (!Number.isFinite(pageViews) || !Number.isFinite(downloads) ||
        pageViews <= 0 || downloads < 0 || downloads > pageViews) {
      setDownloadRate(null);
      return;
    }
    
    const rate = (downloads / pageViews) * 100;
    
    let effectiveness = '';
    if (rate >= 10) effectiveness = 'Excellent - High Converting';
    else if (rate >= 5) effectiveness = 'Good - Above Average';
    else if (rate >= 2) effectiveness = 'Average - Room for Improvement';
    else effectiveness = 'Low - Needs Optimization';
    
    setDownloadRate({ rate, effectiveness });
  };

  const calculateSeoTrafficValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const monthlyVisitors = parseFloat(formData.get('seoVisitors') as string);
    const avgCpc = parseFloat(formData.get('avgCpc') as string);
    
    if (!monthlyVisitors || !avgCpc) {
      setSeoTrafficValue(null);
      return;
    }
    
    const monthlyValue = monthlyVisitors * avgCpc;
    const annualValue = monthlyValue * 12;
    
    setSeoTrafficValue({ monthlyValue, annualValue });
  };

  const analyzeBacklinkQuality = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const domainRating = parseFloat(formData.get('domainRating') as string);
    const dofollow = formData.get('dofollow') === 'true';
    const relevantNiche = formData.get('relevantNiche') === 'true';
    
    let score = 0;
    
    if (domainRating >= 70) score += 40;
    else if (domainRating >= 50) score += 30;
    else if (domainRating >= 30) score += 20;
    else score += 10;
    
    if (dofollow) score += 30;
    if (relevantNiche) score += 30;
    
    let quality = '';
    let advice = '';
    if (score >= 80) {
      quality = 'Excellent - High Authority';
      advice = 'This is a premium backlink. Focus on getting more like this.';
    } else if (score >= 60) {
      quality = 'Good - Valuable Link';
      advice = 'Quality backlink that will help your rankings.';
    } else if (score >= 40) {
      quality = 'Average - Some Value';
      advice = 'Acceptable but aim for higher quality links.';
    } else {
      quality = 'Low - Minimal Impact';
      advice = 'Focus on acquiring links from higher authority sites.';
    }
    
    setBacklinkQuality({ score, quality, advice });
  };

  const estimateDomainAuthority = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const backlinks = parseFloat(formData.get('backlinks') as string);
    const referringDomains = parseFloat(formData.get('referringDomains') as string);
    const domainAge = parseFloat(formData.get('domainAge') as string);
    
    let score = 0;
    
    if (backlinks >= 10000) score += 35;
    else if (backlinks >= 1000) score += 25;
    else if (backlinks >= 100) score += 15;
    else score += 5;
    
    if (referringDomains >= 500) score += 35;
    else if (referringDomains >= 100) score += 25;
    else if (referringDomains >= 20) score += 15;
    else score += 5;
    
    if (domainAge >= 5) score += 30;
    else if (domainAge >= 2) score += 20;
    else score += 10;
    
    let level = '';
    if (score >= 80) level = 'Very High Authority';
    else if (score >= 60) level = 'High Authority';
    else if (score >= 40) level = 'Medium Authority';
    else level = 'Low Authority';
    
    setDomainAuthority({ score, level });
  };

  const calculateSocialGrowthRate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const currentFollowers = parseFloat(formData.get('currentFollowers') as string);
    const newFollowers = parseFloat(formData.get('newFollowersMonth') as string);
    const months = parseFloat(formData.get('projectionMonths') as string) || 6;
    
    if (!currentFollowers) {
      setSocialGrowthRate(null);
      return;
    }
    
    const monthlyGrowth = (newFollowers / currentFollowers) * 100;
    const projectedFollowers = currentFollowers * Math.pow(1 + (monthlyGrowth / 100), months);
    
    setSocialGrowthRate({ monthlyGrowth, projectedFollowers: Math.round(projectedFollowers) });
  };

  const calculateViralCoefficient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const invitesSent = parseFloat(formData.get('invitesSent') as string);
    const conversionRate = parseFloat(formData.get('inviteConversion') as string);
    
    const coefficient = (invitesSent * (conversionRate / 100));
    
    let viralStatus = '';
    if (coefficient > 1) viralStatus = 'Viral! Your product is growing exponentially';
    else if (coefficient >= 0.8) viralStatus = 'Near Viral - Close to exponential growth';
    else if (coefficient >= 0.5) viralStatus = 'Good Growth - Positive word of mouth';
    else viralStatus = 'Low - Need more referral incentives';
    
    setViralCoefficient({ coefficient, viralStatus });
  };

  const calculateChurnRate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const startCustomers = parseFloat(formData.get('startCustomers') as string);
    const endCustomers = parseFloat(formData.get('endCustomers') as string);
    
    if (!startCustomers || startCustomers === 0) {
      setChurnRate(null);
      return;
    }
    
    const churned = startCustomers - endCustomers;
    const rate = (churned / startCustomers) * 100;
    const retention = 100 - rate;
    
    setChurnRate({ rate: Math.max(0, rate), retention: Math.max(0, retention) });
  };

  const calculateLtvCacRatio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ltv = parseFloat(formData.get('ltv') as string);
    const cac = parseFloat(formData.get('cacRatio') as string);
    
    if (!cac || cac === 0) {
      setLtvCacRatio(null);
      return;
    }
    
    const ratio = ltv / cac;
    
    let health = '';
    if (ratio >= 3) health = 'Excellent - Highly Profitable';
    else if (ratio >= 2) health = 'Good - Sustainable Growth';
    else if (ratio >= 1) health = 'Fair - Break Even';
    else health = 'Poor - Losing Money';
    
    setLtvCacRatio({ ratio, health });
  };

  const calculatePaybackPeriod = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const cac = parseFloat(formData.get('cacPayback') as string);
    const monthlyRevenue = parseFloat(formData.get('monthlyRevenue') as string);
    
    if (!monthlyRevenue || monthlyRevenue === 0) {
      setPaybackPeriod(null);
      return;
    }
    
    const months = cac / monthlyRevenue;
    
    let assessment = '';
    if (months <= 6) assessment = 'Excellent - Quick Payback';
    else if (months <= 12) assessment = 'Good - Reasonable Timeline';
    else if (months <= 18) assessment = 'Fair - Long Payback';
    else assessment = 'Poor - Very Long Payback';
    
    setPaybackPeriod({ months, assessment });
  };

  const calculateImpressionShare = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const impressions = parseFloat(formData.get('impressions') as string);
    const eligibleImpressions = parseFloat(formData.get('eligibleImpressions') as string);
    
    if (!eligibleImpressions || eligibleImpressions === 0) {
      setImpressionShare(null);
      return;
    }
    
    const share = (impressions / eligibleImpressions) * 100;
    const lostOpportunity = 100 - share;
    
    setImpressionShare({ share, lostOpportunity });
  };

  const calculateGoogleAdsQuality = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ctr = parseFloat(formData.get('adCtr') as string);
    const relevance = parseFloat(formData.get('adRelevance') as string);
    const landingExperience = parseFloat(formData.get('landingExperience') as string);
    
    const score = Math.round((ctr + relevance + landingExperience) / 3);
    
    let rating = '';
    let tips: string[] = [];
    if (score >= 8) {
      rating = 'Excellent - Top Performance';
      tips = ['Maintain current performance', 'Test new ad variations'];
    } else if (score >= 6) {
      rating = 'Good - Above Average';
      tips = ['Improve landing page speed', 'Test different CTAs'];
    } else if (score >= 4) {
      rating = 'Average - Room for Improvement';
      tips = ['Increase ad relevance', 'Optimize landing page', 'Improve CTR with better copy'];
    } else {
      rating = 'Poor - Needs Work';
      tips = ['Revise ad copy completely', 'Align keywords with ad text', 'Create dedicated landing pages'];
    }
    
    setGoogleAdsQuality({ score, rating, tips });
  };

  const calculateFbAdRelevance = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const engagementRate = parseFloat(formData.get('fbEngagementRate') as string);
    const conversionRate = parseFloat(formData.get('fbConversionRate') as string);
    
    const score = Math.round(engagementRate * 3 + conversionRate * 7);
    
    let rating = '';
    if (score >= 8) rating = 'Excellent - High Relevance';
    else if (score >= 6) rating = 'Good - Above Average';
    else if (score >= 4) rating = 'Average - Moderate Relevance';
    else rating = 'Below Average - Improve Targeting';
    
    setFbAdRelevance({ score, rating });
  };

  const calculateInstagramEngagement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const likes = parseFloat(formData.get('igLikes') as string) || 0;
    const comments = parseFloat(formData.get('igComments') as string) || 0;
    const saves = parseFloat(formData.get('igSaves') as string) || 0;
    const followers = parseFloat(formData.get('igFollowers') as string);
    
    if (!followers || followers === 0) {
      setInstagramEngagement(null);
      return;
    }
    
    const rate = ((likes + comments * 2 + saves * 3) / followers) * 100;
    
    let quality = '';
    if (rate >= 5) quality = 'Excellent - Highly Engaging';
    else if (rate >= 3) quality = 'Good - Strong Engagement';
    else if (rate >= 1) quality = 'Average - Normal Performance';
    else quality = 'Low - Needs Improvement';
    
    setInstagramEngagement({ rate, quality });
  };

  const calculateTiktokEngagement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const views = parseFloat(formData.get('tiktokViews') as string);
    const likes = parseFloat(formData.get('tiktokLikes') as string) || 0;
    const shares = parseFloat(formData.get('tiktokShares') as string) || 0;
    const comments = parseFloat(formData.get('tiktokComments') as string) || 0;
    
    if (!views || views === 0) {
      setTiktokEngagement(null);
      return;
    }
    
    const rate = ((likes + shares * 2 + comments * 3) / views) * 100;
    
    let viralPotential = '';
    if (rate >= 10) viralPotential = 'Viral! Excellent Performance';
    else if (rate >= 5) viralPotential = 'High - Strong Potential';
    else if (rate >= 2) viralPotential = 'Good - Above Average';
    else viralPotential = 'Low - Optimize Content';
    
    setTiktokEngagement({ rate, viralPotential });
  };

  const calculateLinkedinReach = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const connections = parseFloat(formData.get('linkedinConnections') as string);
    const postEngagement = parseFloat(formData.get('linkedinPostEngagement') as string);
    
    const estimatedReach = Math.round(connections * 3.5);
    const engagement = (postEngagement / estimatedReach) * 100;
    
    setLinkedinReach({ estimatedReach, engagement });
  };

  const calculateYoutubeCpm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const views = parseFloat(formData.get('youtubeViews') as string);
    const cpm = parseFloat(formData.get('estimatedCpm') as string);
    
    if (!views) {
      setYoutubeCpm(null);
      return;
    }
    
    const estimatedRevenue = (views / 1000) * cpm;
    
    setYoutubeCpm({ cpm, estimatedRevenue });
  };

  const calculateTwitterEngagement = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const likes = parseFloat(formData.get('twitterLikes') as string) || 0;
    const retweets = parseFloat(formData.get('twitterRetweets') as string) || 0;
    const replies = parseFloat(formData.get('twitterReplies') as string) || 0;
    const followers = parseFloat(formData.get('twitterFollowers') as string);
    
    if (!followers || followers === 0) {
      setTwitterEngagement(null);
      return;
    }
    
    const rate = ((likes + retweets * 2 + replies * 3) / followers) * 100;
    const impressions = Math.round(followers * 3.8);
    
    setTwitterEngagement({ rate, impressions });
  };

  const calculatePinterestPerformance = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const impressions = parseFloat(formData.get('pinterestImpressions') as string);
    const saves = parseFloat(formData.get('pinterestSaves') as string);
    
    if (!impressions || impressions === 0) {
      setPinterestPerformance(null);
      return;
    }
    
    const saveRate = (saves / impressions) * 100;
    const reach = Math.round(saves * 15);
    
    setPinterestPerformance({ saveRate, reach });
  };

  const analyzeEmailDeliverability = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bounceRate = parseFloat(formData.get('bounceRate') as string);
    const spamRate = parseFloat(formData.get('spamRate') as string);
    const openRate = parseFloat(formData.get('emailOpenRate') as string);
    
    let score = 100;
    score -= bounceRate * 5;
    score -= spamRate * 10;
    if (openRate < 15) score -= 20;
    
    score = Math.max(0, Math.min(100, score));
    
    const issues: string[] = [];
    if (bounceRate > 5) issues.push('High bounce rate - Clean your email list');
    if (spamRate > 0.5) issues.push('Spam complaints - Review your content');
    if (openRate < 15) issues.push('Low open rate - Improve subject lines');
    if (issues.length === 0) issues.push('Good deliverability - Keep monitoring');
    
    setEmailDeliverability({ score, issues });
  };

  const calculateCartAbandonment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const cartsCreated = parseFloat(formData.get('cartsCreated') as string);
    const cartsCompleted = parseFloat(formData.get('cartsCompleted') as string);
    const avgCartValue = parseFloat(formData.get('avgCartValue') as string);
    
    if (!cartsCreated || cartsCreated === 0) {
      setCartAbandonment(null);
      return;
    }
    
    const rate = ((cartsCreated - cartsCompleted) / cartsCreated) * 100;
    const lostRevenue = (cartsCreated - cartsCompleted) * avgCartValue;
    
    setCartAbandonment({ rate, lostRevenue });
  };

  const calculateAffiliateCommission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const sales = parseFloat(formData.get('affiliateSales') as string);
    const commissionRate = parseFloat(formData.get('commissionRate') as string);
    const adSpend = parseFloat(formData.get('affiliateAdSpend') as string) || 0;
    
    const commission = sales * (commissionRate / 100);
    const roi = adSpend > 0 ? ((commission - adSpend) / adSpend) * 100 : 0;
    
    setAffiliateCommission({ commission, roi });
  };

  const calculatePodcastRoi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productionCost = parseFloat(formData.get('productionCost') as string);
    const promotionCost = parseFloat(formData.get('promotionCost') as string);
    const revenue = parseFloat(formData.get('podcastRevenue') as string);
    const listeners = parseFloat(formData.get('listeners') as string);
    
    const totalCost = productionCost + promotionCost;
    
    if (!totalCost || totalCost === 0) {
      setPodcastRoi(null);
      return;
    }
    
    const roi = ((revenue - totalCost) / totalCost) * 100;
    const costPerListener = listeners > 0 ? totalCost / listeners : 0;
    
    setPodcastRoi({ roi, costPerListener });
  };

  const analyzeBlogPerformance = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pageviews = parseFloat(formData.get('blogPageviews') as string);
    const avgTimeOnPage = parseFloat(formData.get('avgTimeOnPage') as string);
    const shareRate = parseFloat(formData.get('shareRate') as string);
    
    let score = 0;
    const recommendations: string[] = [];
    
    if (pageviews >= 1000) {
      score += 30;
    } else {
      recommendations.push('Increase SEO optimization and promotion');
    }
    
    if (avgTimeOnPage >= 3) {
      score += 40;
    } else {
      recommendations.push('Improve content engagement and readability');
    }
    
    if (shareRate >= 2) {
      score += 30;
    } else {
      recommendations.push('Add more social sharing buttons and CTAs');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Excellent performance - Keep creating quality content');
    }
    
    setBlogPerformance({ score, recommendations });
  };

  const calculateKeywordDifficulty = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const domainAuthority = parseFloat(formData.get('competitorDA') as string);
    const backlinks = parseFloat(formData.get('competitorBacklinks') as string);
    const searchVolume = parseFloat(formData.get('searchVolume') as string);
    
    let difficulty = 0;
    
    if (domainAuthority >= 70) difficulty += 40;
    else if (domainAuthority >= 50) difficulty += 30;
    else if (domainAuthority >= 30) difficulty += 20;
    else difficulty += 10;
    
    if (backlinks >= 1000) difficulty += 30;
    else if (backlinks >= 100) difficulty += 20;
    else difficulty += 10;
    
    if (searchVolume >= 10000) difficulty += 30;
    else if (searchVolume >= 1000) difficulty += 20;
    else difficulty += 10;
    
    let level = '';
    if (difficulty >= 70) level = 'Very Hard - Long-term Strategy';
    else if (difficulty >= 50) level = 'Hard - Significant Effort Required';
    else if (difficulty >= 30) level = 'Medium - Achievable with Work';
    else level = 'Easy - Quick Win Opportunity';
    
    setKeywordDifficulty({ difficulty, level });
  };

  const calculateSerpClickDistribution = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const position = parseFloat(formData.get('serpPosition') as string);
    
    const ctrMap: Record<number, number> = {
      1: 31.7, 2: 24.7, 3: 18.7, 4: 13.6, 5: 9.5,
      6: 6.3, 7: 4.5, 8: 3.1, 9: 2.2, 10: 1.6
    };
    
    const expectedCtr = ctrMap[position] || (position <= 20 ? 1.0 : 0.3);
    
    setSerpClickDistribution({ position, expectedCtr });
  };

  const analyzeCompetitorGap = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const yourTraffic = parseFloat(formData.get('yourTraffic') as string);
    const competitorTraffic = parseFloat(formData.get('competitorTraffic') as string);
    
    if (!yourTraffic || !competitorTraffic) {
      setCompetitorGap(null);
      return;
    }
    
    const gap = ((competitorTraffic - yourTraffic) / competitorTraffic) * 100;
    
    const opportunities: string[] = [];
    if (gap > 50) {
      opportunities.push('Analyze competitor keywords');
      opportunities.push('Improve content quality');
      opportunities.push('Build more backlinks');
    } else if (gap > 25) {
      opportunities.push('Optimize existing content');
      opportunities.push('Target long-tail keywords');
    } else {
      opportunities.push('Maintain current strategy');
      opportunities.push('Focus on conversion optimization');
    }
    
    setCompetitorGap({ gap, opportunities });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-tools-heading">
                Free Digital Marketing Tools
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-tools-description">
                60+ powerful calculators and analyzers to optimize your marketing campaigns
              </p>
            </div>

            <Tabs defaultValue="roi" className="w-full">
              <div className="overflow-x-auto">
                <TabsList className="inline-flex w-auto min-w-full mb-8 flex-wrap h-auto" data-testid="tabs-tools">
                  <TabsTrigger value="roi" data-testid="tab-roi" className="whitespace-nowrap">ROI</TabsTrigger>
                  <TabsTrigger value="conversion" data-testid="tab-conversion" className="whitespace-nowrap">Conversion</TabsTrigger>
                  <TabsTrigger value="ctr" data-testid="tab-ctr" className="whitespace-nowrap">CTR</TabsTrigger>
                  <TabsTrigger value="clv" data-testid="tab-clv" className="whitespace-nowrap">CLV</TabsTrigger>
                  <TabsTrigger value="engagement" data-testid="tab-engagement" className="whitespace-nowrap">Engagement</TabsTrigger>
                  <TabsTrigger value="video" data-testid="tab-video" className="whitespace-nowrap">Video</TabsTrigger>
                  <TabsTrigger value="email-open" data-testid="tab-email-open" className="whitespace-nowrap">Email Open</TabsTrigger>
                  <TabsTrigger value="email-growth" data-testid="tab-email-growth" className="whitespace-nowrap">Email Growth</TabsTrigger>
                  <TabsTrigger value="subject" data-testid="tab-subject" className="whitespace-nowrap">Subject</TabsTrigger>
                  <TabsTrigger value="adspend" data-testid="tab-adspend" className="whitespace-nowrap">Ad ROAS</TabsTrigger>
                  <TabsTrigger value="cpl" data-testid="tab-cpl" className="whitespace-nowrap">CPL</TabsTrigger>
                  <TabsTrigger value="cac" data-testid="tab-cac" className="whitespace-nowrap">CAC</TabsTrigger>
                  <TabsTrigger value="cpc" data-testid="tab-cpc" className="whitespace-nowrap">CPC/CPM</TabsTrigger>
                  <TabsTrigger value="abtest" data-testid="tab-abtest" className="whitespace-nowrap">A/B Test</TabsTrigger>
                  <TabsTrigger value="bounce" data-testid="tab-bounce" className="whitespace-nowrap">Bounce</TabsTrigger>
                  <TabsTrigger value="influencer" data-testid="tab-influencer" className="whitespace-nowrap">Influencer</TabsTrigger>
                  <TabsTrigger value="landing" data-testid="tab-landing" className="whitespace-nowrap">Landing Page</TabsTrigger>
                  <TabsTrigger value="social-reach" data-testid="tab-social-reach" className="whitespace-nowrap">Social Reach</TabsTrigger>
                  <TabsTrigger value="content-score" data-testid="tab-content-score" className="whitespace-nowrap">Content</TabsTrigger>
                  <TabsTrigger value="meta" data-testid="tab-meta" className="whitespace-nowrap">Meta</TabsTrigger>
                  <TabsTrigger value="hashtags" data-testid="tab-hashtags" className="whitespace-nowrap">Hashtags</TabsTrigger>
                  <TabsTrigger value="utm" data-testid="tab-utm" className="whitespace-nowrap">UTM</TabsTrigger>
                  <TabsTrigger value="keyword" data-testid="tab-keyword" className="whitespace-nowrap">Keywords</TabsTrigger>
                  <TabsTrigger value="readability" data-testid="tab-readability" className="whitespace-nowrap">Reading</TabsTrigger>
                  <TabsTrigger value="budget" data-testid="tab-budget" className="whitespace-nowrap">Budget</TabsTrigger>
                  <TabsTrigger value="page-speed" data-testid="tab-page-speed" className="whitespace-nowrap">Page Speed</TabsTrigger>
                  <TabsTrigger value="post-time" data-testid="tab-post-time" className="whitespace-nowrap">Best Time</TabsTrigger>
                  <TabsTrigger value="webinar" data-testid="tab-webinar" className="whitespace-nowrap">Webinar</TabsTrigger>
                  <TabsTrigger value="brand" data-testid="tab-brand" className="whitespace-nowrap">Brand</TabsTrigger>
                  <TabsTrigger value="funnel" data-testid="tab-funnel" className="whitespace-nowrap">Funnel</TabsTrigger>
                  <TabsTrigger value="newsletter" data-testid="tab-newsletter" className="whitespace-nowrap">Newsletter</TabsTrigger>
                  <TabsTrigger value="retargeting" data-testid="tab-retargeting" className="whitespace-nowrap">Retargeting</TabsTrigger>
                  <TabsTrigger value="mobile-desktop" data-testid="tab-mobile-desktop" className="whitespace-nowrap">Mobile vs Desktop</TabsTrigger>
                  <TabsTrigger value="mql" data-testid="tab-mql" className="whitespace-nowrap">MQL Score</TabsTrigger>
                  <TabsTrigger value="download-rate" data-testid="tab-download-rate" className="whitespace-nowrap">Download Rate</TabsTrigger>
                  <TabsTrigger value="seo-traffic-value" data-testid="tab-seo-traffic-value" className="whitespace-nowrap">SEO Value</TabsTrigger>
                  <TabsTrigger value="backlink-quality" data-testid="tab-backlink-quality" className="whitespace-nowrap">Backlink</TabsTrigger>
                  <TabsTrigger value="domain-authority" data-testid="tab-domain-authority" className="whitespace-nowrap">Domain Authority</TabsTrigger>
                  <TabsTrigger value="social-growth" data-testid="tab-social-growth" className="whitespace-nowrap">Social Growth</TabsTrigger>
                  <TabsTrigger value="viral-coefficient" data-testid="tab-viral-coefficient" className="whitespace-nowrap">Viral</TabsTrigger>
                  <TabsTrigger value="churn-rate" data-testid="tab-churn-rate" className="whitespace-nowrap">Churn Rate</TabsTrigger>
                  <TabsTrigger value="ltv-cac" data-testid="tab-ltv-cac" className="whitespace-nowrap">LTV/CAC</TabsTrigger>
                  <TabsTrigger value="payback-period" data-testid="tab-payback-period" className="whitespace-nowrap">Payback</TabsTrigger>
                  <TabsTrigger value="impression-share" data-testid="tab-impression-share" className="whitespace-nowrap">Impression Share</TabsTrigger>
                  <TabsTrigger value="google-ads-quality" data-testid="tab-google-ads-quality" className="whitespace-nowrap">Google Ads</TabsTrigger>
                  <TabsTrigger value="fb-ad-relevance" data-testid="tab-fb-ad-relevance" className="whitespace-nowrap">Facebook Ads</TabsTrigger>
                  <TabsTrigger value="instagram-engagement" data-testid="tab-instagram-engagement" className="whitespace-nowrap">Instagram</TabsTrigger>
                  <TabsTrigger value="tiktok-engagement" data-testid="tab-tiktok-engagement" className="whitespace-nowrap">TikTok</TabsTrigger>
                  <TabsTrigger value="linkedin-reach" data-testid="tab-linkedin-reach" className="whitespace-nowrap">LinkedIn</TabsTrigger>
                  <TabsTrigger value="youtube-cpm" data-testid="tab-youtube-cpm" className="whitespace-nowrap">YouTube CPM</TabsTrigger>
                  <TabsTrigger value="twitter-engagement" data-testid="tab-twitter-engagement" className="whitespace-nowrap">Twitter/X</TabsTrigger>
                  <TabsTrigger value="pinterest-performance" data-testid="tab-pinterest-performance" className="whitespace-nowrap">Pinterest</TabsTrigger>
                  <TabsTrigger value="email-deliverability" data-testid="tab-email-deliverability" className="whitespace-nowrap">Email Deliverability</TabsTrigger>
                  <TabsTrigger value="cart-abandonment" data-testid="tab-cart-abandonment" className="whitespace-nowrap">Cart Abandonment</TabsTrigger>
                  <TabsTrigger value="affiliate-commission" data-testid="tab-affiliate-commission" className="whitespace-nowrap">Affiliate</TabsTrigger>
                  <TabsTrigger value="podcast-roi" data-testid="tab-podcast-roi" className="whitespace-nowrap">Podcast ROI</TabsTrigger>
                  <TabsTrigger value="blog-performance" data-testid="tab-blog-performance" className="whitespace-nowrap">Blog Performance</TabsTrigger>
                  <TabsTrigger value="keyword-difficulty" data-testid="tab-keyword-difficulty" className="whitespace-nowrap">Keyword Difficulty</TabsTrigger>
                  <TabsTrigger value="serp-ctr" data-testid="tab-serp-ctr" className="whitespace-nowrap">SERP CTR</TabsTrigger>
                  <TabsTrigger value="competitor-gap" data-testid="tab-competitor-gap" className="whitespace-nowrap">Competitor Gap</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="roi">
                <Card data-testid="card-roi-calculator">
                  <CardHeader>
                    <CardTitle><Calculator className="inline h-5 w-5 mr-2" />ROI Calculator</CardTitle>
                    <CardDescription>Calculate your return on investment for marketing campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateROI} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="revenue">Total Revenue ($)</Label>
                        <Input 
                          id="revenue" 
                          name="revenue" 
                          type="number" 
                          step="0.01"
                          placeholder="10000" 
                          required 
                          data-testid="input-revenue"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="investment">Total Investment ($)</Label>
                        <Input 
                          id="investment" 
                          name="investment" 
                          type="number" 
                          step="0.01"
                          placeholder="3000" 
                          required 
                          data-testid="input-investment"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-roi">Calculate ROI</Button>
                      
                      {roiResults && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-roi">
                          <p className="text-lg font-semibold">
                            ROI: ${roiResults.roi.toFixed(2)}
                          </p>
                          <p className="text-lg font-semibold">
                            ROI Percentage: {roiResults.percentage.toFixed(2)}%
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="conversion">
                <Card data-testid="card-conversion-calculator">
                  <CardHeader>
                    <CardTitle><Target className="inline h-5 w-5 mr-2" />Conversion Rate Calculator</CardTitle>
                    <CardDescription>Calculate your website or campaign conversion rate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateConversionRate} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="conversions">Total Conversions</Label>
                        <Input 
                          id="conversions" 
                          name="conversions" 
                          type="number" 
                          placeholder="150" 
                          required 
                          data-testid="input-conversions"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="visitors">Total Visitors</Label>
                        <Input 
                          id="visitors" 
                          name="visitors" 
                          type="number" 
                          placeholder="5000" 
                          required 
                          data-testid="input-visitors"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-conversion">Calculate Conversion Rate</Button>
                      
                      {conversionRate !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-conversion">
                          <p className="text-lg font-semibold">
                            Conversion Rate: {conversionRate.toFixed(2)}%
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ctr">
                <Card data-testid="card-ctr-calculator">
                  <CardHeader>
                    <CardTitle><MousePointer className="inline h-5 w-5 mr-2" />Click-Through Rate (CTR) Calculator</CardTitle>
                    <CardDescription>Calculate your ad or link click-through rate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateCTR} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="ctr-clicks">Total Clicks</Label>
                        <Input 
                          id="ctr-clicks" 
                          name="ctr-clicks" 
                          type="number" 
                          placeholder="500" 
                          required 
                          data-testid="input-ctr-clicks"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ctr-impressions">Total Impressions</Label>
                        <Input 
                          id="ctr-impressions" 
                          name="ctr-impressions" 
                          type="number" 
                          placeholder="50000" 
                          required 
                          data-testid="input-ctr-impressions"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-ctr">Calculate CTR</Button>
                      
                      {ctr !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-ctr">
                          <p className="text-lg font-semibold">
                            Click-Through Rate: {ctr.toFixed(2)}%
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="clv">
                <Card data-testid="card-clv-calculator">
                  <CardHeader>
                    <CardTitle><Users className="inline h-5 w-5 mr-2" />Customer Lifetime Value (CLV) Calculator</CardTitle>
                    <CardDescription>Calculate the total value of a customer over their lifetime</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateCLV} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="avgPurchase">Average Purchase Value ($)</Label>
                        <Input 
                          id="avgPurchase" 
                          name="avgPurchase" 
                          type="number" 
                          step="0.01"
                          placeholder="100" 
                          required 
                          data-testid="input-avgPurchase"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="frequency">Purchase Frequency (per year)</Label>
                        <Input 
                          id="frequency" 
                          name="frequency" 
                          type="number" 
                          step="0.1"
                          placeholder="4" 
                          required 
                          data-testid="input-frequency"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lifespan">Customer Lifespan (years)</Label>
                        <Input 
                          id="lifespan" 
                          name="lifespan" 
                          type="number" 
                          step="0.1"
                          placeholder="5" 
                          required 
                          data-testid="input-lifespan"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-clv">Calculate CLV</Button>
                      
                      {clv !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-clv">
                          <p className="text-lg font-semibold">
                            Customer Lifetime Value: ${clv.toFixed(2)}
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="engagement">
                <Card data-testid="card-engagement-calculator">
                  <CardHeader>
                    <CardTitle><TrendingUp className="inline h-5 w-5 mr-2" />Social Media Engagement Rate Calculator</CardTitle>
                    <CardDescription>Calculate your social media engagement rate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateEngagement} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="likes">Likes</Label>
                          <Input 
                            id="likes" 
                            name="likes" 
                            type="number" 
                            placeholder="500" 
                            data-testid="input-likes"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="comments">Comments</Label>
                          <Input 
                            id="comments" 
                            name="comments" 
                            type="number" 
                            placeholder="50" 
                            data-testid="input-comments"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="shares">Shares</Label>
                          <Input 
                            id="shares" 
                            name="shares" 
                            type="number" 
                            placeholder="25" 
                            data-testid="input-shares"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="followers">Followers</Label>
                          <Input 
                            id="followers" 
                            name="followers" 
                            type="number" 
                            placeholder="10000" 
                            required 
                            data-testid="input-followers"
                          />
                        </div>
                      </div>
                      <Button type="submit" data-testid="button-calculate-engagement">Calculate Engagement Rate</Button>
                      
                      {engagementResults !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-engagement">
                          <p className="text-lg font-semibold">
                            Engagement Rate: {engagementResults.toFixed(2)}%
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="video">
                <Card data-testid="card-video-calculator">
                  <CardHeader>
                    <CardTitle><Video className="inline h-5 w-5 mr-2" />Video Engagement Rate Calculator</CardTitle>
                    <CardDescription>Calculate engagement rate for your video content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateVideoEngagement} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="views">Video Views</Label>
                        <Input 
                          id="views" 
                          name="views" 
                          type="number" 
                          placeholder="10000" 
                          required 
                          data-testid="input-views"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="videoLikes">Likes</Label>
                          <Input 
                            id="videoLikes" 
                            name="videoLikes" 
                            type="number" 
                            placeholder="500" 
                            data-testid="input-videoLikes"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="videoComments">Comments</Label>
                          <Input 
                            id="videoComments" 
                            name="videoComments" 
                            type="number" 
                            placeholder="50" 
                            data-testid="input-videoComments"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="videoShares">Shares</Label>
                          <Input 
                            id="videoShares" 
                            name="videoShares" 
                            type="number" 
                            placeholder="25" 
                            data-testid="input-videoShares"
                          />
                        </div>
                      </div>
                      <Button type="submit" data-testid="button-calculate-video">Calculate Video Engagement</Button>
                      
                      {videoEngagement !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-video">
                          <p className="text-lg font-semibold">
                            Video Engagement Rate: {videoEngagement.toFixed(2)}%
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="email-open">
                <Card data-testid="card-email-open-calculator">
                  <CardHeader>
                    <CardTitle><Mail className="inline h-5 w-5 mr-2" />Email Open Rate Calculator</CardTitle>
                    <CardDescription>Calculate your email campaign open rate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateEmailOpenRate} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="opens">Total Opens</Label>
                        <Input 
                          id="opens" 
                          name="opens" 
                          type="number" 
                          placeholder="2500" 
                          required 
                          data-testid="input-opens"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sent">Emails Sent</Label>
                        <Input 
                          id="sent" 
                          name="sent" 
                          type="number" 
                          placeholder="10000" 
                          required 
                          data-testid="input-sent"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-email-open">Calculate Open Rate</Button>
                      
                      {emailOpenRate !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-email-open">
                          <p className="text-lg font-semibold">
                            Email Open Rate: {emailOpenRate.toFixed(2)}%
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="email-growth">
                <Card data-testid="card-email-growth-calculator">
                  <CardHeader>
                    <CardTitle><ListChecks className="inline h-5 w-5 mr-2" />Email List Growth Rate Calculator</CardTitle>
                    <CardDescription>Calculate your email list growth rate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateEmailGrowth} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="newSubs">New Subscribers</Label>
                        <Input 
                          id="newSubs" 
                          name="newSubs" 
                          type="number" 
                          placeholder="150" 
                          required 
                          data-testid="input-newSubs"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="unsubscribes">Unsubscribes</Label>
                        <Input 
                          id="unsubscribes" 
                          name="unsubscribes" 
                          type="number" 
                          placeholder="20" 
                          required 
                          data-testid="input-unsubscribes"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="totalSubs">Total Subscribers</Label>
                        <Input 
                          id="totalSubs" 
                          name="totalSubs" 
                          type="number" 
                          placeholder="5000" 
                          required 
                          data-testid="input-totalSubs"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-email-growth">Calculate Growth Rate</Button>
                      
                      {emailGrowth !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-email-growth">
                          <p className="text-lg font-semibold">
                            Email List Growth Rate: {emailGrowth.toFixed(2)}%
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subject">
                <Card data-testid="card-subject-analyzer">
                  <CardHeader>
                    <CardTitle><Mail className="inline h-5 w-5 mr-2" />Email Subject Line Analyzer</CardTitle>
                    <CardDescription>Analyze and score your email subject lines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={analyzeSubjectLine} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject Line</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          placeholder="Get 50% Off Your First Purchase Today!" 
                          required 
                          data-testid="input-subject"
                        />
                      </div>
                      <Button type="submit" data-testid="button-analyze-subject">Analyze Subject Line</Button>
                      
                      {subjectScore && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-subject">
                          <p className="text-2xl font-bold mb-2">Score: {subjectScore.score}/100</p>
                          <pre className="text-sm whitespace-pre-wrap">{subjectScore.analysis}</pre>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="adspend">
                <Card data-testid="card-adspend-calculator">
                  <CardHeader>
                    <CardTitle><DollarSign className="inline h-5 w-5 mr-2" />Ad Spend ROAS Calculator</CardTitle>
                    <CardDescription>Calculate Return on Ad Spend (ROAS)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateAdSpend} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="adSpent">Ad Spend ($)</Label>
                        <Input 
                          id="adSpent" 
                          name="adSpent" 
                          type="number" 
                          step="0.01"
                          placeholder="1000" 
                          required 
                          data-testid="input-adSpent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adRevenue">Revenue from Ads ($)</Label>
                        <Input 
                          id="adRevenue" 
                          name="adRevenue" 
                          type="number" 
                          step="0.01"
                          placeholder="5000" 
                          required 
                          data-testid="input-adRevenue"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-adspend">Calculate ROAS</Button>
                      
                      {adSpendResults && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-adspend">
                          <p className="text-lg font-semibold">
                            ROAS: {adSpendResults.roas.toFixed(2)}x
                          </p>
                          <p className="text-lg font-semibold">
                            Profit: ${adSpendResults.profit.toFixed(2)}
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cpl">
                <Card data-testid="card-cpl-calculator">
                  <CardHeader>
                    <CardTitle><Target className="inline h-5 w-5 mr-2" />Cost Per Lead (CPL) Calculator</CardTitle>
                    <CardDescription>Calculate your cost per lead</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateCPL} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cplSpent">Total Spent ($)</Label>
                        <Input 
                          id="cplSpent" 
                          name="cplSpent" 
                          type="number" 
                          step="0.01"
                          placeholder="1500" 
                          required 
                          data-testid="input-cplSpent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="leads">Total Leads</Label>
                        <Input 
                          id="leads" 
                          name="leads" 
                          type="number" 
                          placeholder="100" 
                          required 
                          data-testid="input-leads"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-cpl">Calculate CPL</Button>
                      
                      {costPerLead !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-cpl">
                          <p className="text-lg font-semibold">
                            Cost Per Lead: ${costPerLead.toFixed(2)}
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cac">
                <Card data-testid="card-cac-calculator">
                  <CardHeader>
                    <CardTitle><Users className="inline h-5 w-5 mr-2" />Customer Acquisition Cost (CAC) Calculator</CardTitle>
                    <CardDescription>Calculate your customer acquisition cost</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateCAC} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="marketingSpent">Marketing Spend ($)</Label>
                        <Input 
                          id="marketingSpent" 
                          name="marketingSpent" 
                          type="number" 
                          step="0.01"
                          placeholder="5000" 
                          required 
                          data-testid="input-marketingSpent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="salesSpent">Sales Spend ($)</Label>
                        <Input 
                          id="salesSpent" 
                          name="salesSpent" 
                          type="number" 
                          step="0.01"
                          placeholder="2000" 
                          required 
                          data-testid="input-salesSpent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="customers">New Customers</Label>
                        <Input 
                          id="customers" 
                          name="customers" 
                          type="number" 
                          placeholder="100" 
                          required 
                          data-testid="input-customers"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-cac">Calculate CAC</Button>
                      
                      {cac !== null && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-cac">
                          <p className="text-lg font-semibold">
                            Customer Acquisition Cost: ${cac.toFixed(2)}
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cpc">
                <Card data-testid="card-cpc-calculator">
                  <CardHeader>
                    <CardTitle><DollarSign className="inline h-5 w-5 mr-2" />CPC/CPM Calculator</CardTitle>
                    <CardDescription>Calculate Cost Per Click and Cost Per Mille</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateCPC} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="spent">Amount Spent ($)</Label>
                        <Input 
                          id="spent" 
                          name="spent" 
                          type="number" 
                          step="0.01"
                          placeholder="500" 
                          required 
                          data-testid="input-spent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clicks">Total Clicks</Label>
                        <Input 
                          id="clicks" 
                          name="clicks" 
                          type="number" 
                          placeholder="1000" 
                          required 
                          data-testid="input-clicks"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="impressions">Total Impressions</Label>
                        <Input 
                          id="impressions" 
                          name="impressions" 
                          type="number" 
                          placeholder="50000" 
                          required 
                          data-testid="input-impressions"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-cpc">Calculate</Button>
                      
                      {cpcResults && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-cpc">
                          <p className="text-lg font-semibold">CPC: ${cpcResults.cpc.toFixed(2)}</p>
                          <p className="text-lg font-semibold">CPM: ${cpcResults.cpm.toFixed(2)}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="abtest">
                <Card data-testid="card-abtest-calculator">
                  <CardHeader>
                    <CardTitle><TestTube className="inline h-5 w-5 mr-2" />A/B Test Significance Calculator</CardTitle>
                    <CardDescription>Determine if your A/B test results are statistically significant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateABTest} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="visitorsA">Visitors (Version A)</Label>
                          <Input 
                            id="visitorsA" 
                            name="visitorsA" 
                            type="number" 
                            placeholder="1000" 
                            required 
                            data-testid="input-visitorsA"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="conversionsA">Conversions (Version A)</Label>
                          <Input 
                            id="conversionsA" 
                            name="conversionsA" 
                            type="number" 
                            placeholder="50" 
                            required 
                            data-testid="input-conversionsA"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="visitorsB">Visitors (Version B)</Label>
                          <Input 
                            id="visitorsB" 
                            name="visitorsB" 
                            type="number" 
                            placeholder="1000" 
                            required 
                            data-testid="input-visitorsB"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="conversionsB">Conversions (Version B)</Label>
                          <Input 
                            id="conversionsB" 
                            name="conversionsB" 
                            type="number" 
                            placeholder="65" 
                            required 
                            data-testid="input-conversionsB"
                          />
                        </div>
                      </div>
                      <Button type="submit" data-testid="button-calculate-abtest">Calculate Significance</Button>
                      
                      {abTestResults && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-abtest">
                          <p className="text-lg font-semibold mb-2">
                            Result: {abTestResults.significant ? 'Statistically Significant ✓' : 'Not Significant ✗'}
                          </p>
                          <p className="text-lg font-semibold">
                            Confidence Level: {abTestResults.confidence.toFixed(2)}%
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bounce">
                <Card data-testid="card-bounce-calculator">
                  <CardHeader>
                    <CardTitle><Eye className="inline h-5 w-5 mr-2" />Bounce Rate Impact Calculator</CardTitle>
                    <CardDescription>Calculate potential lost conversions and revenue from bounce rate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateBounceImpact} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bounceVisitors">Total Visitors</Label>
                        <Input 
                          id="bounceVisitors" 
                          name="bounceVisitors" 
                          type="number" 
                          placeholder="10000" 
                          required 
                          data-testid="input-bounceVisitors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bounceRate">Bounce Rate (%)</Label>
                        <Input 
                          id="bounceRate" 
                          name="bounceRate" 
                          type="number" 
                          step="0.1"
                          placeholder="60" 
                          required 
                          data-testid="input-bounceRate"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bounceConversionRate">Target Conversion Rate (%)</Label>
                        <Input 
                          id="bounceConversionRate" 
                          name="bounceConversionRate" 
                          type="number" 
                          step="0.1"
                          placeholder="3" 
                          required 
                          data-testid="input-bounceConversionRate"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="avgValue">Avg. Conversion Value ($)</Label>
                        <Input 
                          id="avgValue" 
                          name="avgValue" 
                          type="number" 
                          step="0.01"
                          placeholder="100" 
                          required 
                          data-testid="input-avgValue"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-bounce">Calculate Impact</Button>
                      
                      {bounceImpact && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-bounce">
                          <p className="text-lg font-semibold">
                            Potential Lost Conversions: {bounceImpact.lostConversions.toFixed(0)}
                          </p>
                          <p className="text-lg font-semibold">
                            Potential Lost Revenue: ${bounceImpact.lostRevenue.toFixed(2)}
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="influencer">
                <Card data-testid="card-influencer-calculator">
                  <CardHeader>
                    <CardTitle><Zap className="inline h-5 w-5 mr-2" />Influencer Marketing ROI Calculator</CardTitle>
                    <CardDescription>Calculate return on investment from influencer campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateInfluencerROI} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="influencerSpent">Campaign Cost ($)</Label>
                        <Input 
                          id="influencerSpent" 
                          name="influencerSpent" 
                          type="number" 
                          step="0.01"
                          placeholder="2000" 
                          required 
                          data-testid="input-influencerSpent"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="influencerEarnings">Revenue Generated ($)</Label>
                        <Input 
                          id="influencerEarnings" 
                          name="influencerEarnings" 
                          type="number" 
                          step="0.01"
                          placeholder="8000" 
                          required 
                          data-testid="input-influencerEarnings"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-influencer">Calculate ROI</Button>
                      
                      {influencerRoi && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-influencer">
                          <p className="text-lg font-semibold">
                            ROI: {influencerRoi.roi.toFixed(2)}%
                          </p>
                          <p className="text-lg font-semibold">
                            Net Earnings: ${influencerRoi.earnings.toFixed(2)}
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="landing">
                <Card data-testid="card-landing-calculator">
                  <CardHeader>
                    <CardTitle><Target className="inline h-5 w-5 mr-2" />Landing Page Score Analyzer</CardTitle>
                    <CardDescription>Analyze and score your landing page effectiveness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={analyzeLandingPage} className="space-y-4">
                      <div className="space-y-2">
                        <Label>Has Clear Headline?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasHeadline" value="yes" required />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasHeadline" value="no" required />
                            No
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Has Strong CTA Button?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasCTA" value="yes" required />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasCTA" value="no" required />
                            No
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Has Testimonials/Reviews?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasTestimonials" value="yes" required />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasTestimonials" value="no" required />
                            No
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="loadTime">Load Time (seconds)</Label>
                        <Input 
                          id="loadTime" 
                          name="loadTime" 
                          type="number" 
                          step="0.1"
                          placeholder="2.5" 
                          required 
                          data-testid="input-loadTime"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Mobile Optimized?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="mobileOptimized" value="yes" required />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="mobileOptimized" value="no" required />
                            No
                          </label>
                        </div>
                      </div>
                      <Button type="submit" data-testid="button-analyze-landing">Analyze Landing Page</Button>
                      
                      {landingPageScore && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-landing">
                          <p className="text-2xl font-bold mb-3">Score: {landingPageScore.score}/100</p>
                          {landingPageScore.recommendations.length > 0 && (
                            <div>
                              <p className="font-semibold mb-2">Recommendations:</p>
                              <ul className="list-disc list-inside space-y-1">
                                {landingPageScore.recommendations.map((rec, index) => (
                                  <li key={index} className="text-sm">{rec}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {landingPageScore.score === 100 && (
                            <p className="text-green-600 font-semibold">Perfect! Your landing page has all key elements.</p>
                          )}
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social-reach">
                <Card data-testid="card-social-reach-calculator">
                  <CardHeader>
                    <CardTitle><TrendingUp className="inline h-5 w-5 mr-2" />Social Media Reach Calculator</CardTitle>
                    <CardDescription>Estimate your social media post reach potential</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateSocialReach} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reachFollowers">Total Followers</Label>
                        <Input 
                          id="reachFollowers" 
                          name="reachFollowers" 
                          type="number" 
                          placeholder="10000" 
                          required 
                          data-testid="input-reachFollowers"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="avgEngagement">Avg. Engagement Rate (%)</Label>
                        <Input 
                          id="avgEngagement" 
                          name="avgEngagement" 
                          type="number" 
                          step="0.1"
                          placeholder="3.5" 
                          required 
                          data-testid="input-avgEngagement"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shareRate">Share Rate (avg per engaged user)</Label>
                        <Input 
                          id="shareRate" 
                          name="shareRate" 
                          type="number" 
                          step="0.01"
                          placeholder="0.1" 
                          data-testid="input-shareRate"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-social-reach">Calculate Reach</Button>
                      
                      {socialReach && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-social-reach">
                          <p className="text-lg font-semibold">
                            Estimated Total Reach: {socialReach.estimatedReach.toFixed(0)} people
                          </p>
                          <p className="text-lg font-semibold">
                            Viral Reach Potential: {socialReach.potential.toFixed(0)} people
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content-score">
                <Card data-testid="card-content-score-calculator">
                  <CardHeader>
                    <CardTitle><FileText className="inline h-5 w-5 mr-2" />Content Performance Score</CardTitle>
                    <CardDescription>Analyze your content quality and SEO potential</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={analyzeContent} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="wordCount">Word Count</Label>
                        <Input 
                          id="wordCount" 
                          name="wordCount" 
                          type="number" 
                          placeholder="1500" 
                          required 
                          data-testid="input-wordCount"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Has Images?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasImages" value="yes" required />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasImages" value="no" required />
                            No
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Has Internal/External Links?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasLinks" value="yes" required />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasLinks" value="no" required />
                            No
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Uses H2/H3 Headings?</Label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasHeadings" value="yes" required />
                            Yes
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="hasHeadings" value="no" required />
                            No
                          </label>
                        </div>
                      </div>
                      <Button type="submit" data-testid="button-analyze-content">Analyze Content</Button>
                      
                      {contentScore && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-content-score">
                          <p className="text-2xl font-bold mb-2">Score: {contentScore.score}/100</p>
                          <pre className="text-sm whitespace-pre-wrap">{contentScore.analysis}</pre>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="meta">
                <Card data-testid="card-meta-generator">
                  <CardHeader>
                    <CardTitle><FileText className="inline h-5 w-5 mr-2" />Meta Description Generator</CardTitle>
                    <CardDescription>Generate SEO-optimized meta descriptions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={generateMetaDescription} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="topic">Topic/Title</Label>
                        <Input 
                          id="topic" 
                          name="topic" 
                          placeholder="Best Digital Marketing Strategies" 
                          required 
                          data-testid="input-topic"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                        <Input 
                          id="keywords" 
                          name="keywords" 
                          placeholder="SEO, PPC, social media" 
                          required 
                          data-testid="input-keywords"
                        />
                      </div>
                      <Button type="submit" data-testid="button-generate-meta">Generate Description</Button>
                      
                      {metaDescription && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-meta">
                          <p className="text-sm mb-2">Generated Meta Description ({metaDescription.length} characters):</p>
                          <p className="font-medium">{metaDescription}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hashtags">
                <Card data-testid="card-hashtag-generator">
                  <CardHeader>
                    <CardTitle><Hash className="inline h-5 w-5 mr-2" />Hashtag Generator</CardTitle>
                    <CardDescription>Generate relevant hashtags for your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={generateHashtags} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="hashtag-topic">Topic</Label>
                        <Input 
                          id="hashtag-topic" 
                          name="topic" 
                          placeholder="marketing, seo, social, content, business" 
                          required 
                          data-testid="input-hashtag-topic"
                        />
                      </div>
                      <Button type="submit" data-testid="button-generate-hashtags">Generate Hashtags</Button>
                      
                      {hashtags.length > 0 && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-hashtags">
                          <p className="text-sm mb-3">Generated Hashtags:</p>
                          <div className="flex flex-wrap gap-2">
                            {hashtags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-sm" data-testid={`badge-hashtag-${index}`}>
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="utm">
                <Card data-testid="card-utm-builder">
                  <CardHeader>
                    <CardTitle><LinkIcon className="inline h-5 w-5 mr-2" />UTM Link Builder</CardTitle>
                    <CardDescription>Create trackable campaign URLs with UTM parameters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={buildUTMLink} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="url">Website URL</Label>
                        <Input 
                          id="url" 
                          name="url" 
                          type="url"
                          placeholder="https://example.com" 
                          required 
                          data-testid="input-url"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="source">Campaign Source</Label>
                        <Input 
                          id="source" 
                          name="source" 
                          placeholder="google, facebook, newsletter" 
                          required 
                          data-testid="input-source"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="medium">Campaign Medium</Label>
                        <Input 
                          id="medium" 
                          name="medium" 
                          placeholder="cpc, email, social" 
                          required 
                          data-testid="input-medium"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="campaign">Campaign Name</Label>
                        <Input 
                          id="campaign" 
                          name="campaign" 
                          placeholder="spring_sale_2024" 
                          required 
                          data-testid="input-campaign"
                        />
                      </div>
                      <Button type="submit" data-testid="button-build-utm">Build UTM Link</Button>
                      
                      {utmLink && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-utm">
                          <p className="text-sm mb-2">Generated UTM Link:</p>
                          <p className="font-mono text-sm break-all">{utmLink}</p>
                          <Button 
                            className="mt-3" 
                            variant="outline" 
                            onClick={() => navigator.clipboard.writeText(utmLink)}
                            data-testid="button-copy-utm"
                          >
                            Copy to Clipboard
                          </Button>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="keyword">
                <Card data-testid="card-keyword-density">
                  <CardHeader>
                    <CardTitle><Search className="inline h-5 w-5 mr-2" />Keyword Density Checker</CardTitle>
                    <CardDescription>Analyze keyword density in your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={analyzeKeywordDensity} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea 
                          id="content" 
                          name="content" 
                          placeholder="Paste your content here..." 
                          rows={6}
                          required 
                          data-testid="input-content"
                        />
                      </div>
                      <Button type="submit" data-testid="button-analyze-keyword">Analyze Keyword Density</Button>
                      
                      {keywordDensity.length > 0 && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-keyword">
                          <p className="text-sm font-semibold mb-3">Top Keywords:</p>
                          <div className="space-y-2">
                            {keywordDensity.map((item, index) => (
                              <div key={index} className="flex justify-between items-center" data-testid={`keyword-item-${index}`}>
                                <span className="font-medium">{item.keyword}</span>
                                <div className="text-sm text-muted-foreground">
                                  {item.count} times ({item.density.toFixed(2)}%)
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="readability">
                <Card data-testid="card-readability-analyzer">
                  <CardHeader>
                    <CardTitle><PenTool className="inline h-5 w-5 mr-2" />Content Readability Analyzer</CardTitle>
                    <CardDescription>Check the readability of your content using Flesch Reading Ease</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={analyzeReadability} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="text">Text Content</Label>
                        <Textarea 
                          id="text" 
                          name="text" 
                          placeholder="Paste your text here..." 
                          rows={6}
                          required 
                          data-testid="input-text"
                        />
                      </div>
                      <Button type="submit" data-testid="button-analyze-readability">Analyze Readability</Button>
                      
                      {readabilityScore && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-readability">
                          <p className="text-2xl font-bold mb-2">
                            Score: {readabilityScore.score.toFixed(1)}/100
                          </p>
                          <p className="text-lg">
                            Reading Level: <span className="font-semibold">{readabilityScore.level}</span>
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="budget">
                <Card data-testid="card-budget-calculator">
                  <CardHeader>
                    <CardTitle><BarChart className="inline h-5 w-5 mr-2" />Marketing Budget Allocator</CardTitle>
                    <CardDescription>Get recommended budget allocation across channels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateBudget} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Total Marketing Budget ($)</Label>
                        <Input 
                          id="budget" 
                          name="budget" 
                          type="number" 
                          step="0.01"
                          placeholder="10000" 
                          required 
                          data-testid="input-budget"
                        />
                      </div>
                      <Button type="submit" data-testid="button-calculate-budget">Calculate Allocation</Button>
                      
                      {budgetBreakdown && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-budget">
                          <p className="text-sm font-semibold mb-3">Recommended Allocation:</p>
                          <div className="space-y-2">
                            <div className="flex justify-between" data-testid="budget-item-ppc">
                              <span>PPC Advertising (30%)</span>
                              <span className="font-semibold">${budgetBreakdown.ppc.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between" data-testid="budget-item-social">
                              <span>Social Media (25%)</span>
                              <span className="font-semibold">${budgetBreakdown.social.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between" data-testid="budget-item-content">
                              <span>Content Marketing (20%)</span>
                              <span className="font-semibold">${budgetBreakdown.content.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between" data-testid="budget-item-seo">
                              <span>SEO (15%)</span>
                              <span className="font-semibold">${budgetBreakdown.seo.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between" data-testid="budget-item-email">
                              <span>Email Marketing (10%)</span>
                              <span className="font-semibold">${budgetBreakdown.email.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="page-speed">
                <Card data-testid="card-page-speed-calculator">
                  <CardHeader>
                    <CardTitle><Gauge className="inline h-5 w-5 mr-2" />Page Speed Impact Calculator</CardTitle>
                    <CardDescription>Calculate revenue impact of slow page load times</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculatePageSpeedImpact} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="speedVisitors">Monthly Visitors</Label>
                        <Input id="speedVisitors" name="speedVisitors" type="number" placeholder="10000" required data-testid="input-speedVisitors" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="loadTime">Page Load Time (seconds)</Label>
                        <Input id="loadTime" name="loadTime" type="number" step="0.1" placeholder="5" required data-testid="input-loadTime" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="speedAvgValue">Avg. Conversion Value ($)</Label>
                        <Input id="speedAvgValue" name="speedAvgValue" type="number" step="0.01" placeholder="100" required data-testid="input-speedAvgValue" />
                      </div>
                      <Button type="submit" data-testid="button-calculate-page-speed">Calculate Impact</Button>
                      {pageSpeedImpact && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-page-speed">
                          <p className="text-lg font-semibold">Lost Visitors: {pageSpeedImpact.lostVisitors.toFixed(0)}</p>
                          <p className="text-lg font-semibold">Lost Revenue: ${pageSpeedImpact.lostRevenue.toFixed(2)}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="post-time">
                <Card data-testid="card-post-time-calculator">
                  <CardHeader>
                    <CardTitle><Clock className="inline h-5 w-5 mr-2" />Social Media Best Time Calculator</CardTitle>
                    <CardDescription>Find the best time to post on social media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateBestPostTime} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="platform">Platform</Label>
                        <select id="platform" name="platform" required className="w-full p-2 border rounded" data-testid="select-platform">
                          <option value="facebook">Facebook</option>
                          <option value="instagram">Instagram</option>
                          <option value="twitter">Twitter</option>
                          <option value="linkedin">LinkedIn</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="audience">Audience Type</Label>
                        <select id="audience" name="audience" required className="w-full p-2 border rounded" data-testid="select-audience">
                          <option value="b2b">B2B</option>
                          <option value="b2c">B2C</option>
                        </select>
                      </div>
                      <Button type="submit" data-testid="button-calculate-post-time">Get Best Time</Button>
                      {bestPostTime && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-post-time">
                          <p className="text-lg font-semibold">Best Day: {bestPostTime.day}</p>
                          <p className="text-lg font-semibold">Best Time: {bestPostTime.time}</p>
                          <p className="text-sm mt-2">{bestPostTime.reason}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="webinar">
                <Card data-testid="card-webinar-calculator">
                  <CardHeader>
                    <CardTitle><Presentation className="inline h-5 w-5 mr-2" />Webinar ROI Calculator</CardTitle>
                    <CardDescription>Calculate return on investment for webinars</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateWebinarRoi} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="webinarCost">Webinar Cost ($)</Label>
                        <Input id="webinarCost" name="webinarCost" type="number" step="0.01" placeholder="500" required data-testid="input-webinarCost" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="attendees">Attendees</Label>
                        <Input id="attendees" name="attendees" type="number" placeholder="100" required data-testid="input-attendees" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="webinarConversions">Conversions</Label>
                        <Input id="webinarConversions" name="webinarConversions" type="number" placeholder="10" required data-testid="input-webinarConversions" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="avgSale">Avg. Sale Value ($)</Label>
                        <Input id="avgSale" name="avgSale" type="number" step="0.01" placeholder="500" required data-testid="input-avgSale" />
                      </div>
                      <Button type="submit" data-testid="button-calculate-webinar">Calculate ROI</Button>
                      {webinarRoi && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-webinar">
                          <p className="text-lg font-semibold">ROI: {webinarRoi.roi.toFixed(2)}%</p>
                          <p className="text-lg font-semibold">Profit Per Attendee: ${webinarRoi.profitPerAttendee.toFixed(2)}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="brand">
                <Card data-testid="card-brand-calculator">
                  <CardHeader>
                    <CardTitle><Award className="inline h-5 w-5 mr-2" />Brand Awareness Calculator</CardTitle>
                    <CardDescription>Measure your brand awareness score</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateBrandAwareness} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="directSearches">Monthly Direct Searches</Label>
                        <Input id="directSearches" name="directSearches" type="number" placeholder="500" data-testid="input-directSearches" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="socialMentions">Social Media Mentions</Label>
                        <Input id="socialMentions" name="socialMentions" type="number" placeholder="200" data-testid="input-socialMentions" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="brandTraffic">Website Traffic</Label>
                        <Input id="brandTraffic" name="brandTraffic" type="number" placeholder="5000" data-testid="input-brandTraffic" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="backlinks">Total Backlinks</Label>
                        <Input id="backlinks" name="backlinks" type="number" placeholder="100" data-testid="input-backlinks" />
                      </div>
                      <Button type="submit" data-testid="button-calculate-brand">Calculate Score</Button>
                      {brandAwareness && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-brand">
                          <p className="text-2xl font-bold mb-2">Score: {brandAwareness.score.toFixed(1)}/100</p>
                          <p className="text-lg">{brandAwareness.level}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="funnel">
                <Card data-testid="card-funnel-calculator">
                  <CardHeader>
                    <CardTitle><Filter className="inline h-5 w-5 mr-2" />Sales Funnel Leak Detector</CardTitle>
                    <CardDescription>Find where you're losing leads in your funnel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={analyzeFunnelLeak} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="awareness">Awareness Stage (Visitors)</Label>
                        <Input id="awareness" name="awareness" type="number" placeholder="1000" required data-testid="input-awareness" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="interest">Interest Stage (Leads)</Label>
                        <Input id="interest" name="interest" type="number" placeholder="500" required data-testid="input-interest" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="decision">Decision Stage (Prospects)</Label>
                        <Input id="decision" name="decision" type="number" placeholder="200" required data-testid="input-decision" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="action">Action Stage (Customers)</Label>
                        <Input id="action" name="action" type="number" placeholder="50" required data-testid="input-action" />
                      </div>
                      <Button type="submit" data-testid="button-calculate-funnel">Analyze Funnel</Button>
                      {funnelLeak && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-funnel">
                          <p className="text-lg font-semibold">Biggest Leak: {funnelLeak.leakStage}</p>
                          <p className="text-lg font-semibold">Lost Leads: {funnelLeak.lostLeads}</p>
                          <p className="text-sm mt-2">{funnelLeak.improvement}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="newsletter">
                <Card data-testid="card-newsletter-calculator">
                  <CardHeader>
                    <CardTitle><Newspaper className="inline h-5 w-5 mr-2" />Newsletter Performance Calculator</CardTitle>
                    <CardDescription>Calculate CTR and CTOR for your newsletters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateNewsletterPerformance} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="newsletterSent">Emails Sent</Label>
                        <Input id="newsletterSent" name="newsletterSent" type="number" placeholder="10000" required data-testid="input-newsletterSent" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newsletterOpened">Emails Opened</Label>
                        <Input id="newsletterOpened" name="newsletterOpened" type="number" placeholder="2500" required data-testid="input-newsletterOpened" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newsletterClicked">Clicks</Label>
                        <Input id="newsletterClicked" name="newsletterClicked" type="number" placeholder="250" required data-testid="input-newsletterClicked" />
                      </div>
                      <Button type="submit" data-testid="button-calculate-newsletter">Calculate Performance</Button>
                      {newsletterPerformance && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-newsletter">
                          <p className="text-lg font-semibold">CTR: {newsletterPerformance.ctr.toFixed(2)}%</p>
                          <p className="text-lg font-semibold">CTOR: {newsletterPerformance.ctor.toFixed(2)}%</p>
                          <p className="text-lg">Rating: {newsletterPerformance.rating}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="retargeting">
                <Card data-testid="card-retargeting-calculator">
                  <CardHeader>
                    <CardTitle><RefreshCcw className="inline h-5 w-5 mr-2" />Retargeting Campaign ROI</CardTitle>
                    <CardDescription>Calculate ROI for retargeting campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateRetargetingRoi} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="retargetingSpent">Campaign Spend ($)</Label>
                        <Input id="retargetingSpent" name="retargetingSpent" type="number" step="0.01" placeholder="1000" required data-testid="input-retargetingSpent" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="retargetingConversions">Conversions</Label>
                        <Input id="retargetingConversions" name="retargetingConversions" type="number" placeholder="50" required data-testid="input-retargetingConversions" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="retargetingRevenue">Revenue Generated ($)</Label>
                        <Input id="retargetingRevenue" name="retargetingRevenue" type="number" step="0.01" placeholder="5000" required data-testid="input-retargetingRevenue" />
                      </div>
                      <Button type="submit" data-testid="button-calculate-retargeting">Calculate ROI</Button>
                      {retargetingRoi && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-retargeting">
                          <p className="text-lg font-semibold">ROI: {retargetingRoi.roi.toFixed(2)}%</p>
                          <p className="text-lg font-semibold">Cost Per Acquisition: ${retargetingRoi.cpa.toFixed(2)}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mobile-desktop">
                <Card data-testid="card-mobile-desktop-calculator">
                  <CardHeader>
                    <CardTitle><Smartphone className="inline h-5 w-5 mr-2" />Mobile vs Desktop Conversion</CardTitle>
                    <CardDescription>Compare mobile and desktop conversion rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={compareMobileDesktop} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="mobileVisitors">Mobile Visitors</Label>
                          <Input id="mobileVisitors" name="mobileVisitors" type="number" placeholder="5000" required data-testid="input-mobileVisitors" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobileConversions">Mobile Conversions</Label>
                          <Input id="mobileConversions" name="mobileConversions" type="number" placeholder="100" required data-testid="input-mobileConversions" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="desktopVisitors">Desktop Visitors</Label>
                          <Input id="desktopVisitors" name="desktopVisitors" type="number" placeholder="5000" required data-testid="input-desktopVisitors" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="desktopConversions">Desktop Conversions</Label>
                          <Input id="desktopConversions" name="desktopConversions" type="number" placeholder="200" required data-testid="input-desktopConversions" />
                        </div>
                      </div>
                      <Button type="submit" data-testid="button-calculate-mobile-desktop">Compare</Button>
                      {mobileVsDesktop && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-mobile-desktop">
                          <p className="text-lg font-semibold">Winner: {mobileVsDesktop.winner}</p>
                          <p className="text-lg font-semibold">Difference: {mobileVsDesktop.difference.toFixed(2)}%</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mql">
                <Card data-testid="card-mql-calculator">
                  <CardHeader>
                    <CardTitle><CheckCircle2 className="inline h-5 w-5 mr-2" />Marketing Qualified Lead (MQL) Score</CardTitle>
                    <CardDescription>Score and qualify your leads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateMqlScore} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="emailOpened">Opened Recent Emails?</Label>
                        <select id="emailOpened" name="emailOpened" className="w-full p-2 border rounded" data-testid="select-emailOpened">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="websiteVisits">Website Visits (Last 30 Days)</Label>
                        <Input id="websiteVisits" name="websiteVisits" type="number" placeholder="5" required data-testid="input-websiteVisits" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contentDownloads">Content Downloads</Label>
                        <Input id="contentDownloads" name="contentDownloads" type="number" placeholder="2" required data-testid="input-contentDownloads" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budgetMatch">Budget Aligned?</Label>
                        <select id="budgetMatch" name="budgetMatch" className="w-full p-2 border rounded" data-testid="select-budgetMatch">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="decisionMaker">Is Decision Maker?</Label>
                        <select id="decisionMaker" name="decisionMaker" className="w-full p-2 border rounded" data-testid="select-decisionMaker">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <Button type="submit" data-testid="button-calculate-mql">Calculate MQL Score</Button>
                      {mqlScore && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-mql">
                          <p className="text-2xl font-bold mb-2">Score: {mqlScore.score}/100</p>
                          <p className="text-lg mb-2">{mqlScore.quality}</p>
                          {mqlScore.recommendations.length > 0 && (
                            <div className="mt-2">
                              <p className="font-semibold text-sm mb-1">Recommendations:</p>
                              <ul className="text-sm space-y-1">
                                {mqlScore.recommendations.map((rec, i) => (
                                  <li key={i}>• {rec}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="download-rate">
                <Card data-testid="card-download-rate-calculator">
                  <CardHeader>
                    <CardTitle><Download className="inline h-5 w-5 mr-2" />Content Download Rate Calculator</CardTitle>
                    <CardDescription>Measure content lead magnet effectiveness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={calculateDownloadRate} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="pageViews">Landing Page Views</Label>
                        <Input id="pageViews" name="pageViews" type="number" placeholder="1000" required data-testid="input-pageViews" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="downloads">Total Downloads</Label>
                        <Input id="downloads" name="downloads" type="number" placeholder="50" required data-testid="input-downloads" />
                      </div>
                      <Button type="submit" data-testid="button-calculate-download-rate">Calculate Rate</Button>
                      {downloadRate && (
                        <div className="mt-6 p-4 bg-primary/10 rounded-lg" data-testid="result-download-rate">
                          <p className="text-lg font-semibold">Download Rate: {downloadRate.rate.toFixed(2)}%</p>
                          <p className="text-lg">Effectiveness: {downloadRate.effectiveness}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seo-traffic-value">
                <Card><CardHeader><CardTitle><Search className="inline h-5 w-5 mr-2" />SEO Traffic Value Calculator</CardTitle><CardDescription>Calculate the monetary value of your organic traffic</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateSeoTrafficValue} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="seoVisitors">Monthly Organic Visitors</Label>
                        <Input id="seoVisitors" name="seoVisitors" type="number" placeholder="10000" required /></div>
                      <div className="space-y-2"><Label htmlFor="avgCpc">Average CPC in Your Niche ($)</Label>
                        <Input id="avgCpc" name="avgCpc" type="number" step="0.01" placeholder="2.50" required /></div>
                      <Button type="submit">Calculate Value</Button>
                      {seoTrafficValue && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Monthly Traffic Value: ${seoTrafficValue.monthlyValue.toFixed(2)}</p>
                          <p className="text-lg font-semibold">Annual Traffic Value: ${seoTrafficValue.annualValue.toFixed(2)}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="backlink-quality">
                <Card><CardHeader><CardTitle><LinkIcon className="inline h-5 w-5 mr-2" />Backlink Quality Analyzer</CardTitle><CardDescription>Assess the quality and value of backlinks</CardDescription></CardHeader>
                  <CardContent><form onSubmit={analyzeBacklinkQuality} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="domainRating">Domain Rating (0-100)</Label>
                        <Input id="domainRating" name="domainRating" type="number" placeholder="50" required /></div>
                      <div className="space-y-2"><Label>Link Type</Label>
                        <select name="dofollow" className="w-full p-2 border rounded"><option value="true">Dofollow</option><option value="false">Nofollow</option></select></div>
                      <div className="space-y-2"><Label>Niche Relevance</Label>
                        <select name="relevantNiche" className="w-full p-2 border rounded"><option value="true">Relevant</option><option value="false">Not Relevant</option></select></div>
                      <Button type="submit">Analyze Quality</Button>
                      {backlinkQuality && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Quality Score: {backlinkQuality.score}/100</p>
                          <p className="text-lg">Quality: {backlinkQuality.quality}</p>
                          <p className="text-sm mt-2">{backlinkQuality.advice}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="domain-authority">
                <Card><CardHeader><CardTitle><Award className="inline h-5 w-5 mr-2" />Domain Authority Estimator</CardTitle><CardDescription>Estimate your domain's authority score</CardDescription></CardHeader>
                  <CardContent><form onSubmit={estimateDomainAuthority} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="backlinks">Total Backlinks</Label>
                        <Input id="backlinks" name="backlinks" type="number" placeholder="500" required /></div>
                      <div className="space-y-2"><Label htmlFor="referringDomains">Referring Domains</Label>
                        <Input id="referringDomains" name="referringDomains" type="number" placeholder="50" required /></div>
                      <div className="space-y-2"><Label htmlFor="domainAge">Domain Age (years)</Label>
                        <Input id="domainAge" name="domainAge" type="number" step="0.1" placeholder="3" required /></div>
                      <Button type="submit">Estimate Authority</Button>
                      {domainAuthority && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Domain Authority: {domainAuthority.score}/100</p>
                          <p className="text-lg">Level: {domainAuthority.level}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="social-growth">
                <Card><CardHeader><CardTitle><TrendingUp className="inline h-5 w-5 mr-2" />Social Media Growth Rate</CardTitle><CardDescription>Project future follower growth</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateSocialGrowthRate} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="currentFollowers">Current Followers</Label>
                        <Input id="currentFollowers" name="currentFollowers" type="number" placeholder="10000" required /></div>
                      <div className="space-y-2"><Label htmlFor="newFollowersMonth">New Followers This Month</Label>
                        <Input id="newFollowersMonth" name="newFollowersMonth" type="number" placeholder="500" required /></div>
                      <div className="space-y-2"><Label htmlFor="projectionMonths">Projection Period (months)</Label>
                        <Input id="projectionMonths" name="projectionMonths" type="number" placeholder="6" /></div>
                      <Button type="submit">Calculate Growth</Button>
                      {socialGrowthRate && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Monthly Growth Rate: {socialGrowthRate.monthlyGrowth.toFixed(2)}%</p>
                          <p className="text-lg">Projected Followers: {socialGrowthRate.projectedFollowers.toLocaleString()}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="viral-coefficient">
                <Card><CardHeader><CardTitle><Zap className="inline h-5 w-5 mr-2" />Viral Coefficient Calculator</CardTitle><CardDescription>Measure viral growth potential</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateViralCoefficient} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="invitesSent">Avg Invites Sent Per User</Label>
                        <Input id="invitesSent" name="invitesSent" type="number" step="0.1" placeholder="5" required /></div>
                      <div className="space-y-2"><Label htmlFor="inviteConversion">Invite Conversion Rate (%)</Label>
                        <Input id="inviteConversion" name="inviteConversion" type="number" step="0.1" placeholder="20" required /></div>
                      <Button type="submit">Calculate Coefficient</Button>
                      {viralCoefficient && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Viral Coefficient: {viralCoefficient.coefficient.toFixed(2)}</p>
                          <p className="text-lg">Status: {viralCoefficient.viralStatus}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="churn-rate">
                <Card><CardHeader><CardTitle><RefreshCcw className="inline h-5 w-5 mr-2" />Churn Rate Calculator</CardTitle><CardDescription>Measure customer retention</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateChurnRate} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="startCustomers">Customers at Start</Label>
                        <Input id="startCustomers" name="startCustomers" type="number" placeholder="1000" required /></div>
                      <div className="space-y-2"><Label htmlFor="endCustomers">Customers at End</Label>
                        <Input id="endCustomers" name="endCustomers" type="number" placeholder="950" required /></div>
                      <Button type="submit">Calculate Churn</Button>
                      {churnRate && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Churn Rate: {churnRate.rate.toFixed(2)}%</p>
                          <p className="text-lg">Retention Rate: {churnRate.retention.toFixed(2)}%</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="ltv-cac">
                <Card><CardHeader><CardTitle><BarChart className="inline h-5 w-5 mr-2" />LTV/CAC Ratio Calculator</CardTitle><CardDescription>Measure business model health</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateLtvCacRatio} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="ltv">Customer Lifetime Value ($)</Label>
                        <Input id="ltv" name="ltv" type="number" step="0.01" placeholder="1000" required /></div>
                      <div className="space-y-2"><Label htmlFor="cacRatio">Customer Acquisition Cost ($)</Label>
                        <Input id="cacRatio" name="cacRatio" type="number" step="0.01" placeholder="300" required /></div>
                      <Button type="submit">Calculate Ratio</Button>
                      {ltvCacRatio && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">LTV/CAC Ratio: {ltvCacRatio.ratio.toFixed(2)}</p>
                          <p className="text-lg">Health: {ltvCacRatio.health}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="payback-period">
                <Card><CardHeader><CardTitle><Clock className="inline h-5 w-5 mr-2" />Payback Period Calculator</CardTitle><CardDescription>Calculate time to recover acquisition costs</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculatePaybackPeriod} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="cacPayback">Customer Acquisition Cost ($)</Label>
                        <Input id="cacPayback" name="cacPayback" type="number" step="0.01" placeholder="300" required /></div>
                      <div className="space-y-2"><Label htmlFor="monthlyRevenue">Monthly Revenue Per Customer ($)</Label>
                        <Input id="monthlyRevenue" name="monthlyRevenue" type="number" step="0.01" placeholder="50" required /></div>
                      <Button type="submit">Calculate Period</Button>
                      {paybackPeriod && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Payback Period: {paybackPeriod.months.toFixed(1)} months</p>
                          <p className="text-lg">Assessment: {paybackPeriod.assessment}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="impression-share">
                <Card><CardHeader><CardTitle><Eye className="inline h-5 w-5 mr-2" />Impression Share Calculator</CardTitle><CardDescription>Measure ad visibility opportunity</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateImpressionShare} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="impressions">Your Impressions</Label>
                        <Input id="impressions" name="impressions" type="number" placeholder="50000" required /></div>
                      <div className="space-y-2"><Label htmlFor="eligibleImpressions">Eligible Impressions</Label>
                        <Input id="eligibleImpressions" name="eligibleImpressions" type="number" placeholder="100000" required /></div>
                      <Button type="submit">Calculate Share</Button>
                      {impressionShare && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Impression Share: {impressionShare.share.toFixed(2)}%</p>
                          <p className="text-lg">Lost Opportunity: {impressionShare.lostOpportunity.toFixed(2)}%</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="google-ads-quality">
                <Card><CardHeader><CardTitle><Target className="inline h-5 w-5 mr-2" />Google Ads Quality Score</CardTitle><CardDescription>Estimate your ads quality score</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateGoogleAdsQuality} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="adCtr">Expected CTR (1-10)</Label>
                        <Input id="adCtr" name="adCtr" type="number" min="1" max="10" placeholder="7" required /></div>
                      <div className="space-y-2"><Label htmlFor="adRelevance">Ad Relevance (1-10)</Label>
                        <Input id="adRelevance" name="adRelevance" type="number" min="1" max="10" placeholder="8" required /></div>
                      <div className="space-y-2"><Label htmlFor="landingExperience">Landing Page Experience (1-10)</Label>
                        <Input id="landingExperience" name="landingExperience" type="number" min="1" max="10" placeholder="6" required /></div>
                      <Button type="submit">Calculate Score</Button>
                      {googleAdsQuality && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Quality Score: {googleAdsQuality.score}/10</p>
                          <p className="text-lg">Rating: {googleAdsQuality.rating}</p>
                          <ul className="mt-2 text-sm list-disc list-inside">{googleAdsQuality.tips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="fb-ad-relevance">
                <Card><CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Facebook Ad Relevance Score</CardTitle><CardDescription>Measure Facebook ad quality</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateFbAdRelevance} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="fbEngagementRate">Engagement Rate (1-10)</Label>
                        <Input id="fbEngagementRate" name="fbEngagementRate" type="number" min="1" max="10" placeholder="7" required /></div>
                      <div className="space-y-2"><Label htmlFor="fbConversionRate">Conversion Rate (1-10)</Label>
                        <Input id="fbConversionRate" name="fbConversionRate" type="number" min="1" max="10" placeholder="6" required /></div>
                      <Button type="submit">Calculate Score</Button>
                      {fbAdRelevance && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Relevance Score: {fbAdRelevance.score}/10</p>
                          <p className="text-lg">Rating: {fbAdRelevance.rating}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="instagram-engagement">
                <Card><CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />Instagram Engagement Calculator</CardTitle><CardDescription>Measure Instagram post performance</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateInstagramEngagement} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="igFollowers">Followers</Label>
                        <Input id="igFollowers" name="igFollowers" type="number" placeholder="10000" required /></div>
                      <div className="space-y-2"><Label htmlFor="igLikes">Likes</Label>
                        <Input id="igLikes" name="igLikes" type="number" placeholder="500" /></div>
                      <div className="space-y-2"><Label htmlFor="igComments">Comments</Label>
                        <Input id="igComments" name="igComments" type="number" placeholder="50" /></div>
                      <div className="space-y-2"><Label htmlFor="igSaves">Saves</Label>
                        <Input id="igSaves" name="igSaves" type="number" placeholder="20" /></div>
                      <Button type="submit">Calculate Engagement</Button>
                      {instagramEngagement && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Engagement Rate: {instagramEngagement.rate.toFixed(2)}%</p>
                          <p className="text-lg">Quality: {instagramEngagement.quality}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="tiktok-engagement">
                <Card><CardHeader><CardTitle><Video className="inline h-5 w-5 mr-2" />TikTok Engagement Calculator</CardTitle><CardDescription>Measure TikTok video viral potential</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateTiktokEngagement} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="tiktokViews">Video Views</Label>
                        <Input id="tiktokViews" name="tiktokViews" type="number" placeholder="100000" required /></div>
                      <div className="space-y-2"><Label htmlFor="tiktokLikes">Likes</Label>
                        <Input id="tiktokLikes" name="tiktokLikes" type="number" placeholder="5000" /></div>
                      <div className="space-y-2"><Label htmlFor="tiktokShares">Shares</Label>
                        <Input id="tiktokShares" name="tiktokShares" type="number" placeholder="500" /></div>
                      <div className="space-y-2"><Label htmlFor="tiktokComments">Comments</Label>
                        <Input id="tiktokComments" name="tiktokComments" type="number" placeholder="200" /></div>
                      <Button type="submit">Calculate Engagement</Button>
                      {tiktokEngagement && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Engagement Rate: {tiktokEngagement.rate.toFixed(2)}%</p>
                          <p className="text-lg">Viral Potential: {tiktokEngagement.viralPotential}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="linkedin-reach">
                <Card><CardHeader><CardTitle><Users className="inline h-5 w-5 mr-2" />LinkedIn Post Reach Estimator</CardTitle><CardDescription>Estimate your LinkedIn post reach</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateLinkedinReach} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="linkedinConnections">Connections</Label>
                        <Input id="linkedinConnections" name="linkedinConnections" type="number" placeholder="2000" required /></div>
                      <div className="space-y-2"><Label htmlFor="linkedinPostEngagement">Post Engagements</Label>
                        <Input id="linkedinPostEngagement" name="linkedinPostEngagement" type="number" placeholder="100" required /></div>
                      <Button type="submit">Estimate Reach</Button>
                      {linkedinReach && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Estimated Reach: {linkedinReach.estimatedReach.toLocaleString()}</p>
                          <p className="text-lg">Engagement Rate: {linkedinReach.engagement.toFixed(2)}%</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="youtube-cpm">
                <Card><CardHeader><CardTitle><Video className="inline h-5 w-5 mr-2" />YouTube CPM Revenue Calculator</CardTitle><CardDescription>Estimate YouTube ad revenue</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateYoutubeCpm} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="youtubeViews">Video Views</Label>
                        <Input id="youtubeViews" name="youtubeViews" type="number" placeholder="100000" required /></div>
                      <div className="space-y-2"><Label htmlFor="estimatedCpm">Estimated CPM ($)</Label>
                        <Input id="estimatedCpm" name="estimatedCpm" type="number" step="0.01" placeholder="5.00" required /></div>
                      <Button type="submit">Calculate Revenue</Button>
                      {youtubeCpm && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">CPM: ${youtubeCpm.cpm.toFixed(2)}</p>
                          <p className="text-lg">Estimated Revenue: ${youtubeCpm.estimatedRevenue.toFixed(2)}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="twitter-engagement">
                <Card><CardHeader><CardTitle><Hash className="inline h-5 w-5 mr-2" />Twitter/X Engagement Calculator</CardTitle><CardDescription>Measure tweet performance</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateTwitterEngagement} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="twitterFollowers">Followers</Label>
                        <Input id="twitterFollowers" name="twitterFollowers" type="number" placeholder="5000" required /></div>
                      <div className="space-y-2"><Label htmlFor="twitterLikes">Likes</Label>
                        <Input id="twitterLikes" name="twitterLikes" type="number" placeholder="100" /></div>
                      <div className="space-y-2"><Label htmlFor="twitterRetweets">Retweets</Label>
                        <Input id="twitterRetweets" name="twitterRetweets" type="number" placeholder="20" /></div>
                      <div className="space-y-2"><Label htmlFor="twitterReplies">Replies</Label>
                        <Input id="twitterReplies" name="twitterReplies" type="number" placeholder="10" /></div>
                      <Button type="submit">Calculate Engagement</Button>
                      {twitterEngagement && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Engagement Rate: {twitterEngagement.rate.toFixed(2)}%</p>
                          <p className="text-lg">Estimated Impressions: {twitterEngagement.impressions.toLocaleString()}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="pinterest-performance">
                <Card><CardHeader><CardTitle><Filter className="inline h-5 w-5 mr-2" />Pinterest Pin Performance</CardTitle><CardDescription>Measure pin engagement and reach</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculatePinterestPerformance} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="pinterestImpressions">Pin Impressions</Label>
                        <Input id="pinterestImpressions" name="pinterestImpressions" type="number" placeholder="10000" required /></div>
                      <div className="space-y-2"><Label htmlFor="pinterestSaves">Total Saves</Label>
                        <Input id="pinterestSaves" name="pinterestSaves" type="number" placeholder="200" required /></div>
                      <Button type="submit">Calculate Performance</Button>
                      {pinterestPerformance && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Save Rate: {pinterestPerformance.saveRate.toFixed(2)}%</p>
                          <p className="text-lg">Estimated Reach: {pinterestPerformance.reach.toLocaleString()}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="email-deliverability">
                <Card><CardHeader><CardTitle><Mail className="inline h-5 w-5 mr-2" />Email Deliverability Score</CardTitle><CardDescription>Assess email list health</CardDescription></CardHeader>
                  <CardContent><form onSubmit={analyzeEmailDeliverability} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="bounceRate">Bounce Rate (%)</Label>
                        <Input id="bounceRate" name="bounceRate" type="number" step="0.1" placeholder="2" required /></div>
                      <div className="space-y-2"><Label htmlFor="spamRate">Spam Complaint Rate (%)</Label>
                        <Input id="spamRate" name="spamRate" type="number" step="0.01" placeholder="0.1" required /></div>
                      <div className="space-y-2"><Label htmlFor="emailOpenRate">Open Rate (%)</Label>
                        <Input id="emailOpenRate" name="emailOpenRate" type="number" step="0.1" placeholder="25" required /></div>
                      <Button type="submit">Analyze Deliverability</Button>
                      {emailDeliverability && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Deliverability Score: {emailDeliverability.score.toFixed(0)}/100</p>
                          <ul className="mt-2 text-sm list-disc list-inside">{emailDeliverability.issues.map((issue, i) => <li key={i}>{issue}</li>)}</ul>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="cart-abandonment">
                <Card><CardHeader><CardTitle><Smartphone className="inline h-5 w-5 mr-2" />Cart Abandonment Calculator</CardTitle><CardDescription>Measure e-commerce lost revenue</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateCartAbandonment} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="cartsCreated">Carts Created</Label>
                        <Input id="cartsCreated" name="cartsCreated" type="number" placeholder="1000" required /></div>
                      <div className="space-y-2"><Label htmlFor="cartsCompleted">Completed Purchases</Label>
                        <Input id="cartsCompleted" name="cartsCompleted" type="number" placeholder="300" required /></div>
                      <div className="space-y-2"><Label htmlFor="avgCartValue">Average Cart Value ($)</Label>
                        <Input id="avgCartValue" name="avgCartValue" type="number" step="0.01" placeholder="75" required /></div>
                      <Button type="submit">Calculate Abandonment</Button>
                      {cartAbandonment && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Abandonment Rate: {cartAbandonment.rate.toFixed(2)}%</p>
                          <p className="text-lg text-red-500">Lost Revenue: ${cartAbandonment.lostRevenue.toFixed(2)}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="affiliate-commission">
                <Card><CardHeader><CardTitle><DollarSign className="inline h-5 w-5 mr-2" />Affiliate Commission Calculator</CardTitle><CardDescription>Calculate affiliate marketing earnings</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateAffiliateCommission} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="affiliateSales">Total Sales ($)</Label>
                        <Input id="affiliateSales" name="affiliateSales" type="number" step="0.01" placeholder="10000" required /></div>
                      <div className="space-y-2"><Label htmlFor="commissionRate">Commission Rate (%)</Label>
                        <Input id="commissionRate" name="commissionRate" type="number" step="0.1" placeholder="10" required /></div>
                      <div className="space-y-2"><Label htmlFor="affiliateAdSpend">Ad Spend ($)</Label>
                        <Input id="affiliateAdSpend" name="affiliateAdSpend" type="number" step="0.01" placeholder="500" /></div>
                      <Button type="submit">Calculate Commission</Button>
                      {affiliateCommission && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Total Commission: ${affiliateCommission.commission.toFixed(2)}</p>
                          <p className="text-lg">ROI: {affiliateCommission.roi.toFixed(2)}%</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="podcast-roi">
                <Card><CardHeader><CardTitle><Presentation className="inline h-5 w-5 mr-2" />Podcast ROI Calculator</CardTitle><CardDescription>Measure podcast profitability</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculatePodcastRoi} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="productionCost">Production Cost ($)</Label>
                        <Input id="productionCost" name="productionCost" type="number" step="0.01" placeholder="500" required /></div>
                      <div className="space-y-2"><Label htmlFor="promotionCost">Promotion Cost ($)</Label>
                        <Input id="promotionCost" name="promotionCost" type="number" step="0.01" placeholder="200" required /></div>
                      <div className="space-y-2"><Label htmlFor="podcastRevenue">Revenue ($)</Label>
                        <Input id="podcastRevenue" name="podcastRevenue" type="number" step="0.01" placeholder="1000" required /></div>
                      <div className="space-y-2"><Label htmlFor="listeners">Total Listeners</Label>
                        <Input id="listeners" name="listeners" type="number" placeholder="5000" required /></div>
                      <Button type="submit">Calculate ROI</Button>
                      {podcastRoi && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">ROI: {podcastRoi.roi.toFixed(2)}%</p>
                          <p className="text-lg">Cost Per Listener: ${podcastRoi.costPerListener.toFixed(3)}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="blog-performance">
                <Card><CardHeader><CardTitle><FileText className="inline h-5 w-5 mr-2" />Blog Post Performance Analyzer</CardTitle><CardDescription>Evaluate blog content effectiveness</CardDescription></CardHeader>
                  <CardContent><form onSubmit={analyzeBlogPerformance} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="blogPageviews">Monthly Pageviews</Label>
                        <Input id="blogPageviews" name="blogPageviews" type="number" placeholder="5000" required /></div>
                      <div className="space-y-2"><Label htmlFor="avgTimeOnPage">Avg Time on Page (minutes)</Label>
                        <Input id="avgTimeOnPage" name="avgTimeOnPage" type="number" step="0.1" placeholder="3.5" required /></div>
                      <div className="space-y-2"><Label htmlFor="shareRate">Social Share Rate (%)</Label>
                        <Input id="shareRate" name="shareRate" type="number" step="0.1" placeholder="2.5" required /></div>
                      <Button type="submit">Analyze Performance</Button>
                      {blogPerformance && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Performance Score: {blogPerformance.score}/100</p>
                          <ul className="mt-2 text-sm list-disc list-inside">{blogPerformance.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}</ul>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="keyword-difficulty">
                <Card><CardHeader><CardTitle><Search className="inline h-5 w-5 mr-2" />Keyword Difficulty Estimator</CardTitle><CardDescription>Assess SEO keyword competition</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateKeywordDifficulty} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="competitorDA">Top Competitor Domain Authority</Label>
                        <Input id="competitorDA" name="competitorDA" type="number" placeholder="65" required /></div>
                      <div className="space-y-2"><Label htmlFor="competitorBacklinks">Competitor Backlinks</Label>
                        <Input id="competitorBacklinks" name="competitorBacklinks" type="number" placeholder="500" required /></div>
                      <div className="space-y-2"><Label htmlFor="searchVolume">Monthly Search Volume</Label>
                        <Input id="searchVolume" name="searchVolume" type="number" placeholder="5000" required /></div>
                      <Button type="submit">Estimate Difficulty</Button>
                      {keywordDifficulty && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Difficulty Score: {keywordDifficulty.difficulty}/100</p>
                          <p className="text-lg">Level: {keywordDifficulty.level}</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="serp-ctr">
                <Card><CardHeader><CardTitle><ListChecks className="inline h-5 w-5 mr-2" />SERP Click Distribution</CardTitle><CardDescription>Estimate CTR by search position</CardDescription></CardHeader>
                  <CardContent><form onSubmit={calculateSerpClickDistribution} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="serpPosition">Your Current Position (1-20)</Label>
                        <Input id="serpPosition" name="serpPosition" type="number" min="1" max="20" placeholder="5" required /></div>
                      <Button type="submit">Estimate CTR</Button>
                      {serpClickDistribution && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Position #{serpClickDistribution.position}</p>
                          <p className="text-lg">Expected CTR: {serpClickDistribution.expectedCtr}%</p>
                        </div>)}</form></CardContent></Card>
              </TabsContent>

              <TabsContent value="competitor-gap">
                <Card><CardHeader><CardTitle><Target className="inline h-5 w-5 mr-2" />Competitor Gap Analyzer</CardTitle><CardDescription>Compare your traffic to competitors</CardDescription></CardHeader>
                  <CardContent><form onSubmit={analyzeCompetitorGap} className="space-y-4">
                      <div className="space-y-2"><Label htmlFor="yourTraffic">Your Monthly Traffic</Label>
                        <Input id="yourTraffic" name="yourTraffic" type="number" placeholder="10000" required /></div>
                      <div className="space-y-2"><Label htmlFor="competitorTraffic">Competitor Monthly Traffic</Label>
                        <Input id="competitorTraffic" name="competitorTraffic" type="number" placeholder="50000" required /></div>
                      <Button type="submit">Analyze Gap</Button>
                      {competitorGap && (<div className="mt-6 p-4 bg-primary/10 rounded-lg">
                          <p className="text-lg font-semibold">Traffic Gap: {competitorGap.gap.toFixed(2)}%</p>
                          <p className="font-semibold mt-2">Opportunities:</p>
                          <ul className="mt-2 text-sm list-disc list-inside">{competitorGap.opportunities.map((opp, i) => <li key={i}>{opp}</li>)}</ul>
                        </div>)}</form></CardContent></Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
