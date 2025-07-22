import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import { useProjects } from "../projects/useProjects";
import ProfileProject from "./ProfileProject";

function ProfileProjects() {
  const { projects, isLoading, isError, error } = useProjects(true);
  return (
    <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm">
      <h2 className="mb-6 text-2xl font-semibold">My Projects</h2>

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
        {projects?.map((project) => (
          <ProfileProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProfileProjects;
