import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

const FeatureSection = () => {
  const featuredProjects = projects.filter((p) => p.isFeatured);

  return (
    <section className="base-padding py-10 bg-gray-50">
      <div className="w-full py-6 flex flex-col items-center gap-y-4">
        <div className="uppercase text-brand-teal-light text-sm font-medium tracking-[3px]">
          Featured Examples
        </div>
        <h2 className="text-center text-4xl font-semibold">
          Example commercial concrete projects
        </h2>
        <p className="text-center max-w-3xl">
          Examples for inspiration. Not a guarantee of outcome. Actual results
          vary by project and location.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 px-8">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            showFeaturedBadge={true}
            showServices={true}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
