import { useMutation } from "@tanstack/react-query";
import { logOutApi } from "../../services/authentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const {
    mutate: logOut,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: logOutApi,

    onSuccess: () => {
      console.log("You Successfully logout 🎉");
      toast.success("You Successfully logout 🎉");
      navigate("/");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logOut, isPending, isError, error };
}
