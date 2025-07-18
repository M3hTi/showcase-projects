import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/authentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
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
      navigate("/home");
    },

    onError: (error) => {
      //   console.log(error.message);
      toast.error(error.message);
    },
  });

  return { login, isPending, isError, error };
}
