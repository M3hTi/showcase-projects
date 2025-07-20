import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import UserHeading from "../../ui/UserHeading";
import Error from "../../ui/Error";
import { useUser } from "../authentication/useUser";
import { useCreateProject } from "./useCreateProject";
import MiniLoading from "../../ui/MiniLoading";

function CreateProject() {
  const { user } = useUser();

  const { isCreating, createProject } = useCreateProject();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function submit(data) {
    console.log(data);

    const projectData = { ...data, user_id: user?.id };

    console.log(projectData);

    createProject(projectData, {
      onSettled: () => {
        reset();
      },
    });
  }
  return (
    <div className="h-full overflow-y-auto bg-gray-900 text-white">
      <div className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm">
            <div className="space-y-8">
              <UserHeading />
              {/* Tab Navigation */}
              <div className="flex space-x-4 border-b border-gray-700">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-orange-500 px-4 py-2 text-orange-500"
                      : "px-4 py-2 text-gray-400 hover:text-orange-500"
                  }
                >
                  Edit Profile
                </NavLink>
                <NavLink
                  to="/profile/create-project"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-orange-500 px-4 py-2 text-orange-500"
                      : "px-4 py-2 text-gray-400 hover:text-orange-500"
                  }
                >
                  Create Project
                </NavLink>
                <NavLink
                  to="/profile/my-projects"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-orange-500 px-4 py-2 text-orange-500"
                      : "px-4 py-2 text-gray-400 hover:text-orange-500"
                  }
                >
                  My Projects
                </NavLink>
              </div>

              {/* Create Project Form */}
              <div className="space-y-6">
                <div className="rounded-lg bg-gray-900/50 p-6">
                  <h2 className="mb-4 text-xl font-semibold text-orange-500">
                    Create New Project
                  </h2>
                  <form className="space-y-4" onSubmit={handleSubmit(submit)}>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Project Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Enter project name"
                        {...register("name", {
                          required: "Please enter a name for your project",
                        })}
                      />
                      {errors?.name?.message && (
                        <Error>{errors?.name?.message}</Error>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Description
                      </label>
                      <textarea
                        name="description"
                        rows="4"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Describe your project"
                        {...register("description", {
                          required:
                            "Please enter a sentence to describe your project.",
                        })}
                      ></textarea>
                      {errors?.description?.message && (
                        <Error>{errors?.description?.message}</Error>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        GitHub URL
                      </label>
                      <input
                        type="url"
                        name="githubUrl"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="https://github.com/username/repository"
                        {...register("githubUrl", {
                          required: "Please enter a github URL.",
                          pattern: {
                            value:
                              /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+\/?$/,
                            message:
                              "Please enter a valid GitHub repository URL in the format: https://github.com/username/repository.",
                          },
                        })}
                      />
                      {errors?.githubUrl?.message && (
                        <Error>{errors?.githubUrl?.message}</Error>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Live Demo URL
                      </label>
                      <input
                        type="url"
                        name="demoUrl"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="https://your-project-demo.com"
                        {...register("demoUrl")}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Project Image
                      </label>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        {...register("image", {
                          required: "Please upload your project image",
                        })}
                        className="mt-1 w-full cursor-pointer rounded-lg bg-gray-800 p-2 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:text-white hover:file:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      />
                      {errors?.image?.message && (
                        <Error>{errors?.image?.message}</Error>
                      )}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="submit"
                        className="cursor-pointer rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-all hover:bg-orange-600"
                      >
                        {isCreating ? <MiniLoading /> : "Create Project"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
