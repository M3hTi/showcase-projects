import { usePaginate } from "../../context/PaginateContext";
import Project from "./Project";

function Projects({ projects, filterTechnology }) {
  const { startIndex, endIndex } = usePaginate();

  const displayedProjects = projects.slice(startIndex, endIndex);

  console.log(
    "%c🔍 DEBUG: projects per page:",
    "color: #8B5CF6; font-weight: bold",
    displayedProjects,
  );

  const filteredProjects = !filterTechnology
    ? displayedProjects
    : projects?.filter((project) =>
        project.tech_stack?.includes(filterTechnology),
      );
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects?.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
