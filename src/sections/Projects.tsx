"use client";

import ProjectCard from "@/components/ProjectCard";
import ProjectTag from "@/components/ProjectTag";
import SectionTitle from "@/components/SectionTitle";
import { portfolioProjects } from "@/data/projectsData";
import { Project } from "@/type/type";
import { useState } from "react";

const Projects = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = portfolioProjects.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section className="pb-16 lg:py-24">
      <div className="container" id="projects">
        <SectionTitle
          title="Real-world results"
          subtitle="Featured Projects"
          description="See how i transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-wrap justify-center gap-2 mt-16">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Design"
            isSelected={tag === "Design"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Functional"
            isSelected={tag === "Functional"}
          />
        </div>

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {filteredProjects.map((project: Project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              projectIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
