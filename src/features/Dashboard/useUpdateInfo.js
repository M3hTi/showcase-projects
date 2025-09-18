import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser } from "../../services/authentication";

export function useUpdateInfo() {
  const queryClient = useQueryClient();

  const { mutate: updateUserInfo, isPending: updating } = useMutation({
    mutationFn: ({ email, password, data: { fullname, bio, expertiseArr } }) =>
      updateUser({ email, password, data: { fullname, bio, expertiseArr } }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { updateUserInfo, updating };
}
