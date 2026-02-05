// components/ProjectCard.tsx
import Image from "next/image";
import clsx from "clsx";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
  showFeaturedBadge?: boolean;
  showServices?: boolean;
}

const ProjectCard = ({
  project,
  className,
  showFeaturedBadge = false,
  showServices = false,
}: ProjectCardProps) => {
  const {
    imageSrc,
    imageAlt,
    isFeatured = false,
    title,
    location,
    description,
    area,
    duration,
    services,
  } = project;

  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl flex flex-col",
        className,
      )}
    >
      {/* Image – fixed aspect ratio */}
      <div className="relative aspect-6/3 w-full shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />

        {/* Featured badge */}
        {showFeaturedBadge && isFeatured && (
          <div className="absolute left-4 top-4 z-10">
            <span className="inline-flex items-center rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content – now using grid with fixed row heights */}
      <div className="px-6 pt-6 pb-3 grow grid grid-rows-[auto_auto_1fr_auto] gap-4">
        {/* Row 1: Title + Location – fixed/auto height */}
        <div className="mb-1">
          <h3 className="font-semibold text-brand-teal-light group-hover:text-brand-orange transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mt-1 text-sm text-brand-orange">{location}</p>
        </div>

        {/* Row 2: Description – takes remaining space, but capped */}
        <p className="text-sm leading-relaxed text-brand-gray line-clamp-4 overflow-hidden">
          {description}
        </p>

        {/* Row 3: Stats – fixed height area */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-brand-gray">
          <div>{area}</div>
          <div>{duration}</div>
        </div>

        {/* Row 4: Services tags – only if allowed, fixed height area */}
        {showServices && services.length > 0 && (
          <div className="flex flex-wrap gap-2 border-t border-brand-gray-bg pt-5 pb-3">
            {services.map((service) => (
              <span
                key={service}
                className="inline-flex items-center rounded-full bg-brand-gray-bg px-3 py-1 text-xs font-medium text-brand-gray"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
