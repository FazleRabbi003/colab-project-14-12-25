export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  result: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface CaseResult {
  client: string;
  industry: string;
  metric: string;
  label: string;
  description: string;
}
