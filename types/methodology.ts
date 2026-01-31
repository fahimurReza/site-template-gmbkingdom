export interface Methodology {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  numberBadge?: string;
  containerClassName?: string;
}
