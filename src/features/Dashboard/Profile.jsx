import { useUser } from "../authentication/useUser";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import Button from "../../ui/Button";
import MiniLoading from "../../ui/MiniLoading";
import { useLogout } from "../authentication/useLogout";
import { useProjects } from "../projects/useProjects";

function Profile() {
  const { user } = useUser();
  const { logOut, isPending } = useLogout();

  const {
    email,
    user_metadata: { fullname, expertiseArr, bio },
  } = user || {};

  const { projects, isLoading, isError, error } = useProjects(true);

  return (
    <div className="p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Biography Section */}
        <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-semibold">Developer Biography</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-xl">{fullname || email}</p>
              <Button
                onClick={logOut}
                className="cursor-pointer rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-all hover:bg-red-600"
              >
                {isPending ? <MiniLoading /> : "Sign Out"}
              </Button>
            </div>
            <p className="text-gray-300">
              {bio ||
                "A passionate developer dedicated to creating innovative solutions and delivering exceptional user experiences."}
            </p>
            {expertiseArr && (
              <div>
                <p className="mb-2 text-lg font-medium">Expertise</p>
                <p className="text-gray-300">{expertiseArr.join(", ")}</p>
              </div>
            )}
          </div>
        </div>

        {/* Projects Section */}
        <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-semibold">My Projects</h2>

          {isLoading && <Loading />}
          {!isLoading && isError && <Error>{error.message}</Error>}
          <div className="space-y-6">
            {!isLoading && !isError && projects?.length === 0 && (
              <div className="py-8 text-center">
                <p className="mb-2 text-gray-300">
                  No projects to display yet.
                </p>
                <p className="text-sm text-gray-400">
                  Your projects will appear here once you add them.
                </p>
              </div>
            )}
            {projects?.map((project, index) => (
              <div key={index} className="rounded-lg bg-gray-700/50 p-6">
                <h3 className="mb-2 text-xl font-medium">
                  {project.name || `Project ${index + 1}`}
                </h3>
                <p className="mb-3 text-gray-300">
                  {project.description ||
                    "No description available for this project."}
                </p>
                {project.technologies && (
                  <div className="mb-3">
                    <p className="mb-1 text-sm font-medium text-gray-400">
                      Technologies Used:
                    </p>
                    <p className="text-sm text-gray-300">
                      {project.technologies.join(", ")}
                    </p>
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 transition-colors hover:text-blue-300"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
