import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/authentication";

export function useUpdateInfo() {
  const { mutate: updateUserInfo, isPending: updating } = useMutation({
    mutationFn: ({ email, password, data: { fullname, bio } }) =>
      updateUser({ email, password, data: { fullname, bio } }),
  });

  return { updateUserInfo, updating };
}
