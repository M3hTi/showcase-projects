import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authentication";

export function useUser() {
  const { data: user, isLoading: loadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {user, loadingUser,  isAuthenticate : user?.role === "authenticated"}
}
