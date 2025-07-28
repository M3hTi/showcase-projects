import Project from "./Project";

function Projects({ projects, filterTechnology }) {
  const filteredProjects = !filterTechnology
    ? projects
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
