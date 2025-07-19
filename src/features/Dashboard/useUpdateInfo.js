import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/authentication";

export function useUpdateInfo() {
  const { mutate: updateUserInfo, isPending: updating } = useMutation({
    mutationFn: ({ email, password, data: { fullname, bio, expertiseArr } }) =>
      updateUser({ email, password, data: { fullname, bio, expertiseArr } }),
  });

  return { updateUserInfo, updating };
}
