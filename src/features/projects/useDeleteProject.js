import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectApi } from "../../services/projects";
import toast from "react-hot-toast";
import { useUser } from "../authentication/useUser";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const user_id = user?.id;
  const { mutate: deleteProject, isPending: deleteing } = useMutation({
    mutationFn: (id) => deleteProjectApi(id),

    onSuccess: (data) => {
      toast.success(`You Successfully delete ${data.name} project 🎉`);
      queryClient.invalidateQueries({ queryKey: ["projects",user_id] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteProject, deleteing };
}
