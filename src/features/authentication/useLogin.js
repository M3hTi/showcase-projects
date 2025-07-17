import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/authentication";
import toast from "react-hot-toast";

export function useLogin() {
  const {
    mutate: login,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: () => {
      //   console.log("You Entered Successfully!");
      toast.success("You Entered Successfully!");
    },

    onError: (error) => {
    //   console.log(error.message);
      toast.error(error.message);
    },
  });

  return { login, isPending, isError, error };
}
