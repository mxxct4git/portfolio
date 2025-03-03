import ProjectCard from "./ProjectCard";
import constants from "../utils/constantUtils";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      className="bg-white py-24 sm:py-32"
      style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 flex items-center gap-x-6">
          <h2 className="text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            Projects
          </h2>
          <Link
            href={`/projects/1`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pretty text-base font-semibold text-indigo-500 sm:text-xl"
          >
            More
          </Link>
        </div>
        <div className="mx-auto flex mt-1 gap-8 border-t border-gray-200 pt-4 sm:mt-4 sm:pt-4 sm: flex-wrap lg:justify-between lg:flex-nowrap">
          {constants.projectList.map((project) => (
            <div key={project.id} className="w-full sm:w-1/2 md:w-1/3">
              <ProjectCard key={project.id} cardInfo={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
