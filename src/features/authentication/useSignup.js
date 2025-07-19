import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../../services/authentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending: signingUp } = useMutation({
    mutationFn: ({ email, password }) => signUpApi({ email, password }),

    onSuccess: () => {
      console.log("You Successfully Create an account");
      toast.success("You Successfully Create an account 🎉");
      navigate("/user");
    },
  });

  return { signup, signingUp };
}
