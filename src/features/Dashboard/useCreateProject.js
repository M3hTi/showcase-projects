import { useMutation } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projects";

export function useCreateProject() {
  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: (projectData) => createProjectApi(projectData),
  });

  return { createProject, isCreating };
}
