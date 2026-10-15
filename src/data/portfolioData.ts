import { SocialLink, VentureItem, SkillItem, VisionPrinciple, LearningPillar, RoadmapPhase } from '../types';

export const PERSONAL_INFO = {
  name: "Abdul Ahad",
  titles: "Founder & CEO | Entrepreneur | Business Builder",
  heroIntro: "Building digital businesses, exploring technology, and creating solutions that solve real-world problems.",
  aboutShort: "Abdul Ahad is a Bangladeshi entrepreneur, business builder, and technology-focused founder who is passionate about starting new ventures, learning new skills, and building digital businesses that can solve real-world problems.",
  location: "Bangladesh",
  currentRole: "Founder & CEO at ART Group",
  email: "abdulahad.onr1@gmail.com",
  phone: "01318608322",
  phoneFormatted: "+880 1318 608322",
  whatsappUrl: "https://wa.me/8801318608322",
  mantra: "Learn. Build. Improve. Scale.",
  brandStatement: "Founder & CEO | Entrepreneur | Business Builder"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/8801318608322',
    displayValue: '+880 1318 608322',
    category: 'direct',
    icon: 'MessageSquare',
    description: 'Instant direct messaging for business inquiries and quick discussions.',
    isPrimary: true
  },
  {
    id: 'email',
    name: 'Email Me',
    url: 'mailto:abdulahad.onr1@gmail.com',
    displayValue: 'abdulahad.onr1@gmail.com',
    category: 'direct',
    icon: 'Mail',
    description: 'Direct email for collaborations, strategic partnerships, and proposals.',
    isPrimary: true
  },
  {
    id: 'phone',
    name: 'Direct Call',
    url: 'tel:01318608322',
    displayValue: '01318608322',
    category: 'direct',
    icon: 'Phone',
    description: 'Direct cellular voice contact for urgent communications.',
    isPrimary: true
  },
  {
    id: 'telegram_personal',
    name: 'Telegram (Personal)',
    url: 'https://t.me/Abdul_Ahad7',
    displayValue: '@Abdul_Ahad7',
    category: 'direct',
    icon: 'Send',
    description: 'Personal Telegram handle for quick professional chat.',
    isPrimary: true
  },
  {
    id: 'telegram_channel',
    name: 'TechFinyx Telegram Channel',
    url: 'https://t.me/TECHFINYX_OFFICIAL',
    displayValue: '@TECHFINYX_OFFICIAL',
    category: 'channel',
    icon: 'Radio',
    description: 'Official channel for community announcements and updates.',
    isPrimary: false
  },
  {
    id: 'youtube',
    name: 'YouTube Channel',
    url: 'https://www.youtube.com/channel/UCfeY3wi-puGTkn4nK-Rv-Ew',
    displayValue: 'YouTube @AbdulAhad',
    category: 'social',
    icon: 'Youtube',
    description: 'Videos exploring tech, business insights, and digital strategies.',
    isPrimary: false
  },
  {
    id: 'facebook',
    name: 'Facebook Profile',
    url: 'https://www.facebook.com/profile.php?id=61590846479758',
    displayValue: 'Facebook Profile',
    category: 'social',
    icon: 'Facebook',
    description: 'Personal and entrepreneurial social updates.',
    isPrimary: false
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    url: 'https://x.com/ABDULAHAD_OnR',
    displayValue: '@ABDULAHAD_OnR',
    category: 'social',
    icon: 'Twitter',
    description: 'Thoughts on business building, technology, and AI trends.',
    isPrimary: false
  },
  {
    id: 'tiktok',
    name: 'TikTok Channel',
    url: 'https://www.tiktok.com/@tecify.analysis',
    displayValue: '@tecify.analysis',
    category: 'social',
    icon: 'Video',
    description: 'Short-form analysis on tech, marketing, and growth.',
    isPrimary: false
  }
];

export const INTERSECTION_TOPICS = [
  { title: "Business", desc: "Sustainable model design, monetization, and company building." },
  { title: "Technology", desc: "Modern software tools, web platforms, and digital infrastructure." },
  { title: "AI", desc: "Leveraging intelligent systems for efficiency and new capabilities." },
  { title: "Automation", desc: "Streamlining repetitive workflows to scale operations efficiently." },
  { title: "Digital Marketing", desc: "Targeted outreach, audience growth, and performance marketing." },
  { title: "Digital Platforms", desc: "Developing user-centric web and mobile service portals." },
  { title: "Content Creation", desc: "Educating audiences, documenting learnings, and building brand reach." }
];

export const VISION_PRINCIPLES: VisionPrinciple[] = [
  {
    id: 'v1',
    title: 'Identifying Problems',
    description: 'Recognizing genuine friction points in business workflows, client operations, and consumer digital experiences.',
    icon: 'Search'
  },
  {
    id: 'v2',
    title: 'Finding Practical Solutions',
    description: 'Focusing on actionable, effective, and pragmatic answers over theoretical or over-complicated systems.',
    icon: 'Lightbulb'
  },
  {
    id: 'v3',
    title: 'Learning Continuously',
    description: 'Maintaining a humble student mindset, continuously acquiring technical and market knowledge each day.',
    icon: 'BookOpen'
  },
  {
    id: 'v4',
    title: 'Building Useful Products & Services',
    description: 'Developing digital platforms and agency services that deliver tangible everyday value to end-users.',
    icon: 'Layers'
  },
  {
    id: 'v5',
    title: 'Creating Opportunities',
    description: 'Unlocking economic and growth avenues for collaborators, team members, and client businesses.',
    icon: 'Sparkles'
  },
  {
    id: 'v6',
    title: 'Developing Strong Teams',
    description: 'Transitioning from solo execution into fostering collaborative, disciplined, and aligned teams.',
    icon: 'Users'
  },
  {
    id: 'v7',
    title: 'Using Technology to Improve Businesses',
    description: 'Applying modern AI, digital platforms, and automation tools to enhance traditional and online commerce.',
    icon: 'Cpu'
  },
  {
    id: 'v8',
    title: 'Creating Long-Term Brands',
    description: 'Nurturing durable brands and business entities designed for sustained resilience and multi-year growth.',
    icon: 'TrendingUp'
  }
];

export const VENTURES: VentureItem[] = [
  {
    id: 'e-solutioner-bd',
    name: 'E Solutioner BD',
    category: 'Digital Solutions & Agency',
    badge: 'Major Long-Term Focus',
    isMajorFocus: true,
    description: 'E Solutioner BD is envisioned as a multi-service digital solutions agency designed to help businesses solve technology, marketing, automation, content, and digital business problems from one place.',
    role: 'Flagship Digital Agency',
    accentColor: 'teal',
    services: [
      'AI Automation',
      'Digital Marketing',
      'Business Automation',
      'Video Editing',
      'Content Services',
      'Web Solutions',
      'Digital Business Solutions',
      'Marketing Strategy',
      'Technology Solutions'
    ]
  },
  {
    id: 'boostnex',
    name: 'BoostNex',
    category: 'Social Growth Platform',
    badge: 'Platform Ecosystem',
    isMajorFocus: false,
    description: 'BoostNex is envisioned as a separate digital platform focused on social-media-related growth and promotional services, with particular interest in TikTok growth and advertising-based promotion.',
    role: 'Growth & Promotion Platform',
    accentColor: 'blue',
    features: [
      'Customer registration',
      'User dashboard',
      'Service selection',
      'Order placement',
      'Payment system',
      'Order tracking',
      'Wallet',
      'Referral system',
      'Notifications',
      'Customer support'
    ]
  },
  {
    id: 'techfinyx-smm',
    name: 'TechFinyx SMM Panel',
    category: 'Social Media Services Platform',
    badge: 'Digital Service Portal',
    isMajorFocus: false,
    description: 'TechFinyx SMM Panel represents Abdul Ahad\'s interest and experience in building online platforms around digital marketing and social-media-related services.',
    role: 'Online SMM Infrastructure',
    accentColor: 'emerald',
    features: [
      'SMM catalog management',
      'Automated service processing',
      'Order status dashboard',
      'API connectivity',
      'Client support interface'
    ]
  },
  {
    id: 'techfinyx-earn',
    name: 'TechFinyx Earn',
    category: 'Digital Platform',
    badge: 'Digital Platform Venture',
    isMajorFocus: false,
    description: 'TechFinyx Earn reflects Abdul Ahad\'s interest in developing online platforms and digital products.',
    role: 'Earning & Digital Rewards Concept',
    accentColor: 'cyan',
    features: [
      'Digital product delivery',
      'Reward and task mechanisms',
      'User account management',
      'Interactive participation tracking'
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Strategy & Leadership
  { id: 's1', name: 'Entrepreneurship', category: 'Strategy & Leadership', levelDescription: 'Knowledge & Practical Interest', icon: 'Briefcase' },
  { id: 's2', name: 'Business Strategy', category: 'Strategy & Leadership', levelDescription: 'Knowledge & Practical Interest', icon: 'Compass' },
  { id: 's3', name: 'Business Analysis', category: 'Strategy & Leadership', levelDescription: 'Knowledge & Practical Interest', icon: 'LineChart' },
  { id: 's4', name: 'Leadership', category: 'Strategy & Leadership', levelDescription: 'Knowledge & Practical Interest', icon: 'Award' },
  { id: 's5', name: 'Decision Making', category: 'Strategy & Leadership', levelDescription: 'Knowledge & Practical Interest', icon: 'GitMerge' },
  { id: 's6', name: 'Team Building', category: 'Strategy & Leadership', levelDescription: 'Knowledge & Practical Interest', icon: 'Users' },
  { id: 's7', name: 'Project Management', category: 'Strategy & Leadership', levelDescription: 'Knowledge & Practical Interest', icon: 'Kanban' },

  // Technology & Automation
  { id: 's8', name: 'AI Automation', category: 'Technology & Automation', levelDescription: 'Knowledge & Practical Interest', icon: 'Bot' },
  { id: 's9', name: 'Technology', category: 'Technology & Automation', levelDescription: 'Knowledge & Practical Interest', icon: 'Cpu' },
  { id: 's10', name: 'Cybersecurity Fundamentals', category: 'Technology & Automation', levelDescription: 'Knowledge & Practical Interest', icon: 'ShieldCheck' },
  { id: 's11', name: 'Digital Platforms', category: 'Technology & Automation', levelDescription: 'Knowledge & Practical Interest', icon: 'LayoutGrid' },

  // Digital Business & Growth
  { id: 's12', name: 'Digital Marketing', category: 'Digital Business & Growth', levelDescription: 'Knowledge & Practical Interest', icon: 'Megaphone' },
  { id: 's13', name: 'Video Editing', category: 'Digital Business & Growth', levelDescription: 'Knowledge & Practical Interest', icon: 'Video' },
  { id: 's14', name: 'Communication', category: 'Digital Business & Growth', levelDescription: 'Knowledge & Practical Interest', icon: 'MessagesSquare' },
  { id: 's15', name: 'Sales', category: 'Digital Business & Growth', levelDescription: 'Knowledge & Practical Interest', icon: 'Target' },
  { id: 's16', name: 'Negotiation', category: 'Digital Business & Growth', levelDescription: 'Knowledge & Practical Interest', icon: 'Handshake' },
  { id: 's17', name: 'Online Business', category: 'Digital Business & Growth', levelDescription: 'Knowledge & Practical Interest', icon: 'Globe' }
];

export const LEADERSHIP_PILLARS = [
  { name: 'Leadership', desc: 'Guiding direction, inspiring commitment, and setting high standards.' },
  { name: 'Strategy', desc: 'Formulating clear gameplans and prioritizing long-term value.' },
  { name: 'Management', desc: 'Organizing resources, workflows, and operational efficiency.' },
  { name: 'Business Development', desc: 'Forging partnerships, entering new avenues, and client acquisition.' },
  { name: 'Team Building', desc: 'Recruiting capable talent, mentoring, and fostering cohesive synergy.' },
  { name: 'Decision Making', desc: 'Evaluating trade-offs thoughtfully to take confident, calculated action.' }
];

export const LEARNING_VECTORS: LearningPillar[] = [
  {
    id: 'l1',
    title: 'Building Projects',
    detail: 'Translating concepts into tangible prototypes, digital portals, and active workflows.',
    icon: 'Hammer'
  },
  {
    id: 'l2',
    title: 'Testing Ideas',
    detail: 'Running practical market experiments to validate interest before committing heavy resources.',
    icon: 'FlaskConical'
  },
  {
    id: 'l3',
    title: 'Researching Businesses',
    detail: 'Analyzing successful business models, operational structures, and digital monetization strategies.',
    icon: 'Search'
  },
  {
    id: 'l4',
    title: 'Studying Technology',
    detail: 'Deepening understanding of artificial intelligence, automation architectures, and modern web systems.',
    icon: 'Cpu'
  },
  {
    id: 'l5',
    title: 'Learning from Mistakes',
    detail: 'Treating setbacks and friction as valuable feedback to refine future business executions.',
    icon: 'RotateCcw'
  },
  {
    id: 'l6',
    title: 'Working with Digital Platforms',
    detail: 'Gaining hands-on familiarity with digital marketing tools, panels, dashboards, and growth channels.',
    icon: 'Layers'
  },
  {
    id: 'l7',
    title: 'Understanding Customers',
    detail: 'Listening to client needs, user friction points, and real expectations to tailor better services.',
    icon: 'Smile'
  },
  {
    id: 'l8',
    title: 'Exploring New Business Models',
    detail: 'Investigating emerging trends across agency services, platform SaaS, and digital ecosystem synergies.',
    icon: 'Sparkles'
  }
];

export const ROADMAP_STAGES: RoadmapPhase[] = [
  {
    id: 'r1',
    phase: 'NOW',
    title: 'Learning & Building',
    description: 'Continuously studying, developing core foundations, validating concepts, and gaining direct practical execution experience across digital platforms.',
    focusHighlight: 'Active Execution & Foundation',
    status: 'Current'
  },
  {
    id: 'r2',
    phase: 'NEXT',
    title: 'Strengthening E Solutioner BD',
    description: 'Focusing strategic priority on establishing E Solutioner BD as a reliable, comprehensive multi-service digital solutions agency for businesses.',
    focusHighlight: 'Flagship Agency Priority',
    status: 'Upcoming'
  },
  {
    id: 'r3',
    phase: 'GROW',
    title: 'Building Teams & Systems',
    description: 'Developing standardized operational workflows, delegating specialized roles, and nurturing dedicated teams to move from solo work to collaborative leadership.',
    focusHighlight: 'Systems & Team Growth',
    status: 'Strategic Horizon'
  },
  {
    id: 'r4',
    phase: 'SCALE',
    title: 'Expanding ART Group',
    description: 'Scaling ART Group as a parent business organization housing multiple flourishing companies, specialized brands, and digital platforms.',
    focusHighlight: 'Parent Ecosystem Maturity',
    status: 'Strategic Horizon'
  }
];
