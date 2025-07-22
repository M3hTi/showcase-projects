import { useQuery } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { getSpecificProjects } from "../../services/projects";

export function useUserProjects() {
  const { user } = useUser();

  const user_id = user?.id;

  const {
    data: developerProjects,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["developer-projects", user_id],
    queryFn: () => getSpecificProjects(user_id),
  });

  return { developerProjects, isLoading, isError, error };
}
