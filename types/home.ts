export interface Methodology {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  numberBadge?: string;
  containerClassName?: string;
}

export interface Price {
  type: string;
  price: string;
  includes: string;
}

export interface Factor {
  factor: string;
  description: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  path: string;
  description: string;
  features: string[];
  className?: string;
}

export interface BestCard {
  title: string;
  description: string;
}
