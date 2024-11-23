import { portfolioProjects } from "@/data/projectsData";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container" id="projects">
        <div className="flex justify-center text-center">
          <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world results
          </p>
        </div>
        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-white/60 md:text-lg lg:text-xl md:max-w-md mx-auto text-center">
          See how i transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 overflow-hidden rounded-3xl relative z-0 after:content-['']
                after:absolute after:inset-0 after:rounded-3xl after:outline after:outline-2
              after:outline-white/20 after:-outline-offset-2 after:pointer-events-none px-8 pt-8
                md:px-10 md:pt-12 lg:pt-16 lg:px-20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="text-sm inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
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
                  <a href={project.link}>
                    <button className="flex items-center justify-center mt-8 gap-2 bg-white w-full text-gray-950 h-12 rounded-xl font-semibold md:w-auto px-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
