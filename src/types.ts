export interface SocialLink {
  id: string;
  name: string;
  url: string;
  displayValue?: string;
  category: 'social' | 'direct' | 'channel';
  icon: string;
  description: string;
  isPrimary?: boolean;
}

export interface VentureItem {
  id: string;
  name: string;
  category: string;
  badge?: string;
  isMajorFocus?: boolean;
  description: string;
  services?: string[];
  features?: string[];
  role: string;
  accentColor: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Strategy & Leadership' | 'Technology & Automation' | 'Digital Business & Growth';
  levelDescription: string; // e.g. "Knowledge & Practical Interest"
  icon: string;
}

export interface VisionPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LearningPillar {
  id: string;
  title: string;
  detail: string;
  icon: string;
}

export interface RoadmapPhase {
  id: string;
  phase: string; // 'NOW' | 'NEXT' | 'GROW' | 'SCALE'
  title: string;
  description: string;
  focusHighlight: string;
  status: 'Current' | 'Upcoming' | 'Strategic Horizon';
}
