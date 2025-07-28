import { useTechnologyFilter } from "../../context/TechnologyContext";
import Error from "../../ui/Error";
import Filter from "../../ui/Filter";
import Loading from "../../ui/Loading";
import { useProjects } from "../projects/useProjects";
import ProfileProject from "./ProfileProject";

function ProfileProjects() {
  const { projects, isLoading, isError, error } = useProjects(true);
  const { filterTechnology } = useTechnologyFilter();

  const filteredProjects = !filterTechnology
    ? projects
    : projects.filter((project) =>
        project?.tech_stack?.includes(filterTechnology),
      );

  return (
    <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm">
      <div className="flex flex-col justify-center pb-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="mb-6 text-2xl font-semibold">My Projects</h2>
        <Filter projects={projects} />
      </div>

      {isLoading && <Loading />}
      {!isLoading && isError && <Error>{error.message}</Error>}
      <div className="space-y-6">
        {!isLoading && !isError && projects?.length === 0 && (
          <div className="py-8 text-center">
            <p className="mb-2 text-gray-300">No projects to display yet.</p>
            <p className="text-sm text-gray-400">
              Your projects will appear here once you add them.
            </p>
          </div>
        )}
        {filteredProjects?.map((project) => (
          <ProfileProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProfileProjects;
