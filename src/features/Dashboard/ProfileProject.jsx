import { FiExternalLink } from "react-icons/fi";
import { useDeleteProject } from "../projects/useDeleteProject";
import Button from "../../ui/Button";
import MiniLoading from "../../ui/MiniLoading";

function ProfileProject({ project }) {
  const { name, github_url, description, livedemo_url, image, id } =
    project || {};
  const { deleteProject, deleteing } = useDeleteProject();
  return (
    <div className="space-y-4 rounded-lg bg-gray-700/50 p-6">
      <div className="flex items-center justify-between">
        <a
          href={github_url}
          target="_blank"
          className="flex items-center gap-1"
        >
          <h3 className="mb-2 text-xl font-medium">{name}</h3>
          <span>
            <FiExternalLink />
          </span>
        </a>
        <Button
          onClick={() => deleteProject(id)}
          className="cursor-pointer rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition-all hover:bg-red-600"
        >
          {deleteing ? <MiniLoading /> : "DELETE"}
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="flex-1 text-gray-300">
          {description || "No description available for this project."}
        </p>
        <div className="flex justify-center md:justify-end">
          <a href={livedemo_url} target="_blank">
            <img
              src={image}
              alt={name}
              className="h-48 w-64 rounded-lg object-cover shadow-lg md:h-40 md:w-56"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileProject;
