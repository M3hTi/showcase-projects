import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/projects";
import { useUser } from "../authentication/useUser";

export function useProjects(userSpecific = false) {
  const { user } = useUser();
  const user_id = userSpecific ? user?.id : null;
  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects", user_id],
    queryFn: () => getProjects(user_id),
  });

  return { projects, isLoading, isError, error };
}
