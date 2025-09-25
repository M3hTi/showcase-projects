import { useQuery } from "@tanstack/react-query";

import { getProjects } from "../../services/projects";
import { useUser } from "../authentication/useUser";

export function useProjects(userSpecific = false, filter = "") {
  const { user } = useUser();
  const user_id = userSpecific ? user?.id : null;
  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects", user_id, filter],
    queryFn: () => getProjects(user_id, filter),
  });

  return { projects, isLoading, isError, error };
}
