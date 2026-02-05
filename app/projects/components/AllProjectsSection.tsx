"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectType } from "@/types";
import { projects } from "@/data";
import clsx from "clsx";

const filterOptions: ProjectType[] = [
  "All Projects",
  "Patio",
  "Driveway",
  "Sidewalk",
  "Stamped",
  "Foundation",
  "Resurfacing",
];

const AllProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("All Projects");

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All Projects" || project.projectType === activeFilter,
  );

  return (
    <section className="py-16 bg-gray-50">
      {/* Filter Tabs */}
      <div className="mb-14 overflow-x-auto bg-white">
        <div className="flex gap-8 py-6 justify-center base-padding">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={clsx(
                "shrink-0 rounded-full px-6 py-3 font-medium transition-all",
                activeFilter === option
                  ? "bg-brand-orange text-white shadow-md"
                  : "bg-gray-100 text-brand-teal hover:bg-gray-200",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="base-padding">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {activeFilter}
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            {filteredProjects.length} projects
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              showFeaturedBadge={false}
              showServices={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectsSection;
