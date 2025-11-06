export interface ChatResponse {
  message: string;
  quickReplies?: string[];
}

interface KnowledgeItem {
  keywords: string[];
  responses: string[];
  quickReplies?: string[];
  weight?: number;
}

const knowledgeBase: Record<string, KnowledgeItem> = {
  greetings: {
    keywords: ['hi', 'hello', 'hey', 'salam', 'assalam', 'good morning', 'good evening', 'hola', 'namaste'],
    responses: [
      "Hello! I'm Muhammad Sameer's AI assistant. How can I help you today?",
      "Hi there! Welcome to Muhammad Sameer's Digital Marketing Portfolio. What would you like to know?",
      "Assalam o Alaikum! I'm here to help you learn about Muhammad's digital marketing services. What can I assist you with?"
    ],
    quickReplies: ['View Services', 'Check Portfolio', 'Pricing Info', 'Free Tools'],
    weight: 1
  },
  
  services: {
    keywords: ['service', 'what do you do', 'what can you help', 'offerings', 'provide', 'help with', 'do you offer'],
    responses: [
      "Muhammad Sameer offers comprehensive digital marketing services:\n\n📈 **SEO Optimization**\n• Keyword Research & Strategy\n• On-Page & Technical SEO\n• Link Building & Local SEO\n• Results: 300%+ organic traffic increase\n\n🎯 **PPC Campaigns**\n• Google Ads (Search & Display)\n• Meta Ads (Facebook/Instagram)\n• LinkedIn Advertising\n• Average ROI: 250%+\n\n📱 **Social Media Marketing**\n• Content Strategy & Planning\n• Community Management\n• Paid Social & Influencer Marketing\n\n✉️ **Email Marketing**\n• Campaign Automation\n• List Segmentation & A/B Testing\n• Analytics & Optimization\n\n📝 **Content Marketing**\n• Blog Writing & Video Scripts\n• Infographics & Case Studies\n\n📊 **Analytics & Reporting**\n• GA4 Setup & Custom Dashboards\n• ROI Tracking & Data Analysis\n\nWhich service interests you?"
    ],
    quickReplies: ['SEO Details', 'PPC Info', 'Social Media', 'View Pricing'],
    weight: 2
  },

  seo: {
    keywords: ['seo', 'search engine', 'organic', 'ranking', 'google ranking', 'optimization', 'keyword research', 'backlink', 'link building'],
    responses: [
      "**SEO Optimization Services:**\n\n✅ **Keyword Research & Strategy**\n• Competitive analysis\n• Long-tail keyword targeting\n• Search intent mapping\n\n✅ **On-Page SEO**\n• Meta tags optimization\n• Content optimization\n• Internal linking strategy\n• Schema markup implementation\n\n✅ **Technical SEO**\n• Site speed optimization\n• Mobile optimization\n• Core Web Vitals improvement\n• XML sitemap & robots.txt\n\n✅ **Link Building**\n• Quality backlink acquisition\n• Guest posting\n• Digital PR campaigns\n\n✅ **Local SEO**\n• Google Business Profile optimization\n• Local citations & NAP consistency\n• Review management\n\n**Results:** Clients typically see:\n• 300%+ organic traffic increase\n• First page rankings within 3-6 months\n• 5x increase in qualified leads\n\n**Case Study:** E-commerce client achieved 250% traffic boost and 400% revenue increase in 8 months!\n\nInterested in a free SEO audit?"
    ],
    quickReplies: ['Free SEO Audit', 'Pricing', 'Case Studies', 'Get Started'],
    weight: 2
  },

  ppc: {
    keywords: ['ppc', 'google ads', 'paid advertising', 'facebook ads', 'meta ads', 'instagram ads', 'linkedin ads', 'advertising campaign', 'paid search'],
    responses: [
      "**PPC Campaign Management:**\n\n🎯 **Google Ads**\n• Search campaigns (high-intent keywords)\n• Display network (brand awareness)\n• Shopping ads (e-commerce)\n• YouTube advertising\n• Remarketing campaigns\n\n🎯 **Meta Ads (Facebook & Instagram)**\n• Feed & Stories ads\n• Carousel & Collection ads\n• Lead generation campaigns\n• E-commerce catalogs\n\n🎯 **LinkedIn Advertising**\n• Sponsored content\n• InMail campaigns\n• B2B lead generation\n\n🎯 **Campaign Optimization**\n• A/B testing (ad copy, visuals, landing pages)\n• Bid strategy optimization\n• Negative keyword management\n• Conversion tracking & attribution\n\n**Average Results:**\n• 250%+ ROI\n• 40-60% reduction in cost per acquisition\n• 3x increase in conversion rates\n\n**Pricing:** Starting from $500/month + ad spend\n(Includes setup, management, optimization & reporting)\n\nReady to maximize your ad spend?"
    ],
    quickReplies: ['Get Quote', 'Success Stories', 'Start Campaign', 'Learn More'],
    weight: 2
  },

  social: {
    keywords: ['social media', 'instagram', 'facebook', 'linkedin', 'twitter', 'tiktok', 'community', 'engagement', 'social post'],
    responses: [
      "**Social Media Marketing Services:**\n\n📱 **Strategy & Planning**\n• Audience research & persona development\n• Content calendar creation\n• Platform-specific strategies\n• Competitor analysis\n\n📱 **Content Creation**\n• Professional graphics & videos\n• Engaging captions & hashtags\n• Stories & Reels\n• User-generated content campaigns\n\n📱 **Community Management**\n• Daily engagement & response\n• Reputation management\n• Crisis communication\n• Customer service via social\n\n📱 **Paid Social Campaigns**\n• Targeted advertising\n• Lookalike audience creation\n• Retargeting campaigns\n\n📱 **Analytics & Reporting**\n• Engagement metrics tracking\n• Follower growth analysis\n• ROI measurement\n\n**Results:** Clients see 3-5x engagement growth and 200%+ follower increase in 6 months!\n\nWhich platform do you want to focus on?"
    ],
    quickReplies: ['Instagram Strategy', 'LinkedIn B2B', 'Pricing', 'Case Studies'],
    weight: 2
  },

  portfolio: {
    keywords: ['portfolio', 'work', 'case study', 'case studies', 'examples', 'results', 'success', 'previous work', 'clients'],
    responses: [
      "**Featured Success Stories:**\n\n🚀 **E-commerce Growth Campaign**\nClient: Fashion Retail Store\n• 400% revenue increase in 8 months\n• 250% organic traffic boost\n• SEO + PPC + Social Media strategy\n• $50K → $250K monthly revenue\n\n🏢 **Local Business Transformation**\nClient: Dental Clinic\n• 350% increase in qualified leads\n• 180% revenue growth\n• Local SEO + Google Ads\n• Became #1 in local search results\n\n💻 **SaaS Marketing Success**\nClient: B2B Software Company\n• 300% organic traffic increase\n• 45% conversion rate improvement\n• Content marketing + SEO + LinkedIn Ads\n• Generated 500+ qualified leads\n\n🎯 **Real Estate Campaign**\nClient: Property Developer\n• 5x increase in property inquiries\n• 280% website traffic growth\n• Facebook Ads + SEO + Email Marketing\n\n**Industry Experience:**\n✓ E-commerce & Retail\n✓ Healthcare & Wellness\n✓ SaaS & Technology\n✓ Real Estate & Construction\n✓ Education & Training\n✓ Food & Hospitality\n\nWant detailed case studies?"
    ],
    quickReplies: ['View Full Portfolio', 'Similar Results', 'Get Started', 'Pricing'],
    weight: 2
  },

  pricing: {
    keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'fees', 'rate', 'charge', 'payment', 'affordable', 'expensive'],
    responses: [
      "**Pricing & Packages:**\n\n💼 **Starter Package** ($799/month)\nIdeal for: Small businesses & startups\n• 1 service (SEO OR PPC OR Social Media)\n• Monthly strategy & optimization\n• Performance reporting\n• Email support\n\n💼 **Growth Package** ($1,499/month)\nIdeal for: Growing businesses\n• 2-3 combined services\n• Advanced analytics & tracking\n• Bi-weekly optimization\n• Priority support\n• Quarterly strategy reviews\n\n💼 **Enterprise Package** ($2,999+/month)\nIdeal for: Established companies\n• Full-service digital marketing\n• Dedicated account manager\n• Custom strategy & campaigns\n• Weekly optimization & reporting\n• 24/7 support\n\n💼 **Project-Based**\nStarting at $2,500/project\n• Website SEO audits\n• One-time campaign setup\n• Content marketing projects\n• Social media setup & training\n\n**What's Included in All Packages:**\n✅ Strategy development\n✅ Implementation & management\n✅ Performance tracking & analytics\n✅ Monthly reporting\n✅ Ongoing optimization\n✅ Regular consultation calls\n\n**Payment Options:**\n• Monthly retainer (save 10%)\n• Quarterly payment (save 15%)\n• Annual contract (save 20%)\n\n**Guarantee:** I offer a 30-day money-back guarantee if you're not satisfied!\n\nReady for a free consultation to discuss your specific needs?"
    ],
    quickReplies: ['Free Consultation', 'Compare Packages', 'Get Started', 'Custom Quote'],
    weight: 3
  },

  tools: {
    keywords: ['tools', 'calculator', 'free tools', 'utm', 'roi calculator', 'keyword', 'generator', 'checker'],
    responses: [
      "**Free Digital Marketing Tools:**\n\n🔧 **ROI Calculator**\n• Calculate marketing campaign ROI\n• Compare investment vs returns\n• Budget planning assistance\n\n🔧 **UTM Link Builder**\n• Create trackable campaign URLs\n• Organize marketing campaigns\n• Track traffic sources\n\n🔧 **Keyword Density Checker**\n• Analyze content keyword usage\n• SEO optimization helper\n• Avoid keyword stuffing\n\n🔧 **Meta Tags Generator**\n• Create SEO-friendly meta titles\n• Generate meta descriptions\n• Open Graph tags for social\n\n🔧 **Email Subject Line Tester**\n• Score email subject lines\n• Spam word detection\n• Improve open rates\n\n🔧 **Social Media Hashtag Generator**\n• Find trending hashtags\n• Industry-specific suggestions\n• Engagement optimization\n\n🔧 **Content Readability Analyzer**\n• Check reading level\n• Improve content clarity\n• SEO readability score\n\n🔧 **CPC Calculator**\n• Calculate cost-per-click\n• Budget estimation\n• ROI projections\n\n🔧 **Engagement Rate Calculator**\n• Social media metrics\n• Influencer analysis\n• Campaign performance\n\n🔧 **Color Palette Generator**\n• Brand color schemes\n• Marketing material design\n• Visual consistency\n\n**All tools are 100% free, no sign-up required!**\n\nVisit the Tools page: /tools"
    ],
    quickReplies: ['Go to Tools', 'View Services', 'Contact'],
    weight: 2
  },

  contact: {
    keywords: ['contact', 'reach', 'talk', 'discuss', 'consultation', 'meeting', 'call', 'email', 'whatsapp', 'get in touch', 'schedule'],
    responses: [
      "**Let's Connect!**\n\n💬 **WhatsApp** (Recommended)\nClick the green WhatsApp button (bottom-right)\nResponse time: Within 2-4 hours\nBest for: Quick questions & instant chat\n\n📧 **Email**\nFill out the contact form on the website\nResponse time: Within 24 hours\nBest for: Detailed inquiries & proposals\n\n📅 **Free Consultation**\nSchedule a 30-minute strategy call\nNo obligation, 100% free\nBest for: Discussing your specific needs\n\n📍 **Office Hours**\nMonday - Friday: 9 AM - 6 PM (PKT)\nSaturday: 10 AM - 2 PM\nSunday: Closed\n\n**What to Expect:**\n✅ Response within 2-4 hours\n✅ Free initial consultation\n✅ Custom strategy proposal\n✅ Transparent pricing\n✅ No pressure, friendly discussion\n\n**Before You Contact:**\nHave these ready to speed up the process:\n• Your website URL (if any)\n• Current marketing challenges\n• Goals & budget range\n• Preferred timeline\n\nHow would you like to connect?"
    ],
    quickReplies: ['WhatsApp Now', 'Email Form', 'Schedule Call', 'View Pricing'],
    weight: 2
  },

  experience: {
    keywords: ['experience', 'expertise', 'background', 'qualifications', 'about', 'who are you', 'credentials', 'certified'],
    responses: [
      "**About Muhammad Sameer**\n\n👨‍💼 **Digital Marketing Expert**\nFull-stack marketing strategist with proven track record\n\n📊 **Experience Highlights:**\n• 5+ years in digital marketing\n• 50+ successful campaigns\n• $2M+ in client revenue generated\n• 100+ satisfied clients\n• 250%+ average ROI\n\n🎓 **Certifications:**\n✅ Google Ads Certified\n✅ Google Analytics Certified\n✅ Facebook Blueprint Certified\n✅ HubSpot Content Marketing\n✅ SEMrush SEO Certified\n\n🏆 **Specializations:**\n• SEO & Organic Growth\n• PPC Campaign Management\n• Social Media Marketing\n• Content Strategy\n• Analytics & Data Analysis\n• Conversion Rate Optimization\n\n💡 **Approach:**\nData-driven strategies focused on measurable results. I believe in transparency, regular communication, and continuous optimization to maximize ROI.\n\n🌟 **Industry Experience:**\nE-commerce • SaaS • Healthcare • Real Estate • Education • Food & Hospitality • Local Businesses\n\n**Why Choose Me:**\n✓ Proven results (not just promises)\n✓ Transparent reporting\n✓ Customized strategies\n✓ Direct communication (no middlemen)\n✓ Money-back guarantee\n\nWant to see my portfolio?"
    ],
    quickReplies: ['View Portfolio', 'Get Started', 'Free Consultation', 'Services'],
    weight: 2
  },

  blog: {
    keywords: ['blog', 'article', 'content', 'read', 'tips', 'guide', 'tutorial', 'learn'],
    responses: [
      "**Marketing Insights Blog**\n\nExplore free digital marketing tips, strategies, and industry insights:\n\n📰 **Latest Topics:**\n• SEO best practices for 2025\n• PPC campaign optimization strategies\n• Social media trends & tactics\n• Content marketing that converts\n• Email marketing automation\n• Analytics & data interpretation\n\n**Popular Articles:**\n• \"10 SEO Mistakes Killing Your Rankings\"\n• \"How to 3x Your ROI with Google Ads\"\n• \"Instagram Marketing Guide for Businesses\"\n• \"Email Marketing: Complete Beginner's Guide\"\n\n**Visit the Blog:** /blog\n\nStay updated with weekly marketing insights!\n\nWhat marketing topic interests you most?"
    ],
    quickReplies: ['Visit Blog', 'SEO Tips', 'PPC Guide', 'Social Media'],
    weight: 1
  },

  help: {
    keywords: ['help', 'support', 'assist', 'question', 'confused', 'not sure'],
    responses: [
      "I'm here to help! **I can assist you with:**\n\n📌 **Services & Offerings**\n• Learn about SEO, PPC, Social Media, etc.\n• Service packages & what's included\n\n📌 **Pricing & Packages**\n• Compare pricing tiers\n• Custom quotes for your needs\n\n📌 **Portfolio & Results**\n• View case studies & success stories\n• See real client results\n\n📌 **Free Tools**\n• Access 10+ free marketing tools\n• Calculators, generators & analyzers\n\n📌 **Getting Started**\n• Schedule free consultation\n• Contact information\n• Next steps process\n\n📌 **Expertise & Experience**\n• Muhammad's background\n• Certifications & credentials\n\n**Quick Links:**\n• Services: /services\n• Portfolio: /portfolio\n• Tools: /tools\n• Blog: /blog\n• Contact: /contact\n\nWhat would you like to know?"
    ],
    quickReplies: ['Services', 'Pricing', 'Portfolio', 'Free Tools'],
    weight: 1
  }
};

function calculateMatchScore(message: string, item: KnowledgeItem): number {
  const lowerMessage = message.toLowerCase();
  let score = 0;
  
  for (const keyword of item.keywords) {
    if (lowerMessage.includes(keyword)) {
      const keywordLength = keyword.split(' ').length;
      score += keywordLength * (item.weight || 1);
    }
  }
  
  return score;
}

function findBestMatch(message: string): ChatResponse {
  const lowerMessage = message.toLowerCase();
  
  let bestMatch: { category: string; score: number; item: KnowledgeItem } | null = null;
  
  for (const [category, item] of Object.entries(knowledgeBase)) {
    const score = calculateMatchScore(message, item);
    
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { category, score, item };
    }
  }
  
  if (bestMatch) {
    const response = Array.isArray(bestMatch.item.responses) 
      ? bestMatch.item.responses[Math.floor(Math.random() * bestMatch.item.responses.length)]
      : bestMatch.item.responses;
    return {
      message: response,
      quickReplies: bestMatch.item.quickReplies
    };
  }
  
  return {
    message: "I'd be happy to help! 😊\n\n**I can tell you about:**\n\n• 📈 Digital marketing services (SEO, PPC, Social Media)\n• 💼 Pricing & packages\n• 🎯 Portfolio & success stories\n• 🔧 Free marketing tools\n• 📞 How to get started\n• 👨‍💼 Muhammad's experience & credentials\n\nWhat would you like to know more about?",
    quickReplies: ['Services', 'Pricing', 'Portfolio', 'Free Tools']
  };
}

export function getChatResponse(message: string): ChatResponse {
  return findBestMatch(message);
}

export function getWelcomeMessage(): ChatResponse {
  return {
    message: "👋 **Hello! I'm Muhammad Sameer's Marketing Assistant.**\n\nI can help you with:\n\n✅ Digital marketing services\n✅ Portfolio & case studies\n✅ Pricing information\n✅ Free marketing tools\n✅ Getting started\n\nWhat would you like to know?",
    quickReplies: ['View Services', 'Check Portfolio', 'Pricing Info', 'Free Tools']
  };
}
