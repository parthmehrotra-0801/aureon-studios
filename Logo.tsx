export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  link: string;
  details: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}
