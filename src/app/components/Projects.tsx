import ProjectCard from "./ProjectCard";
import constants from "../utils/constantUtils";

export default function Projects() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="flex flex-wrap justify-center gap-8">
        {constants.projectList.map((project) => (
          <ProjectCard key={project.id} cardInfo={project} />
        ))}
      </div>
    </div>
  );
}
