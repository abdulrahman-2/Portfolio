import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Project } from "@/type/type";
import Card from "./Card";

const ProjectCard = ({
  project,
  projectIndex,
}: {
  project: Project;
  projectIndex: number;
}) => {
  return (
    <Card
      className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky"
      style={{ top: `calc(62px + ${projectIndex * 25}px)` }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <div className="text-sm inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            <span>{project.company}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
          </div>
          <h2 className="text-2xl font-serif mt-2 md:text-4xl md:mt-5">
            {project.title}
          </h2>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {project.results.map((result) => (
              <li
                key={result.title}
                className="flex gap-2 text-sm text-white/50 md:text-base"
              >
                <CheckIcon className="size-5 md:size-6" />
                <span>{result.title}</span>
              </li>
            ))}
          </ul>
          <a href={project.link} target="_blank">
            <button
              className="flex items-center justify-center mt-8 gap-2 bg-white w-full text-gray-950 h-12 rounded-xl font-semibold md:w-auto px-6
              hover:bg-gray-100 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
            >
              <span>Visit Live Site</span>
              <ArrowUpRightIcon className="size-5" />
            </button>
          </a>
        </div>
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
          />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
