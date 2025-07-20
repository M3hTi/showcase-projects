import { useMutation } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projects";
import toast from "react-hot-toast";

export function useCreateProject() {
  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: (projectData) => createProjectApi(projectData),

    onSuccess: (data) => {
      console.log(data);

      const { name } = data.at(0);

      toast.success(`${name} project is successfully created 🎉`)
    },

    onError: (err) => {
      toast.error(`${err.message}`);
    },
  });

  return { createProject, isCreating };
}
