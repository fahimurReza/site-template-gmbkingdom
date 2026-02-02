export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  path: string;
  description: string;
  features: string[];
  className?: string;
}
