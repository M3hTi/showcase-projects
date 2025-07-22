import { useUser } from "../authentication/useUser";
import Loading from "../../ui/Loading";
import Error from "../../ui/Error";
import Button from "../../ui/Button";
import MiniLoading from "../../ui/MiniLoading";
import { useLogout } from "../authentication/useLogout";
import { useProjects } from "../projects/useProjects";
import { FiExternalLink } from "react-icons/fi";

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
              <div
                key={index}
                className="space-y-4 rounded-lg bg-gray-700/50 p-6"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={project.github_url}
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    <h3 className="mb-2 text-xl font-medium">
                      {project.name || `Project ${index + 1}`}
                    </h3>
                    <span>
                      <FiExternalLink />
                    </span>
                  </a>
                  <Button className="cursor-pointer rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-all hover:bg-red-600">
                    DELETE
                  </Button>
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="flex-1 text-gray-300">
                    {project.description ||
                      "No description available for this project."}
                  </p>
                  <div className="flex justify-center md:justify-end">
                    <a href={project.livedemo_url} target="_blank">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-48 w-64 rounded-lg object-cover shadow-lg md:h-40 md:w-56"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
