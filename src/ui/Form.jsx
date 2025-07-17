import { useForm } from "react-hook-form";
import Error from "./Error";
import { useLogin } from "../features/authentication/useLogin";
import { useEffect, useState } from "react";
import MiniLoading from "./MiniLoading";
function Form({ type }) {
  const [submitForm, setSubmitForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const { login, isPending, isError, error } = useLogin();

  useEffect(() => {
    setTimeout(() => {
      setSubmitForm(false);
    }, 2000);
  }, [submitForm]);

  function submit(data) {
    if (type === "login") {
      console.log("Login data:", data);
      const { email, password } = data;
      login({ email, password });
      setSubmitForm(true);
      reset();
    } else {
      console.log("Signup data:", data);
    }
  }

  function errorOnSubmit(err) {
    console.log("Form errors:", err);
  }

  if (type === "login") {
    return (
      <form
        className="mt-8 space-y-6"
        onSubmit={handleSubmit(submit, errorOnSubmit)}
      >
        <div className="space-y-4 rounded-md">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="relative block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              placeholder="Email address"
              {...register("email", {
                required: "Please Enter Your Email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    "Please enter a valid email address. For example: user@example.com",
                },
              })}
            />
            {errors?.email?.message && <Error>{errors.email.message}</Error>}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="relative block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              placeholder="Password"
              {...register("password", {
                required: "Please Enter Your Password",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/,
                  message:
                    "Password must be 8–16 characters long and include at least one uppercase letter, one number, and one special character.",
                },
              })}
            />
            {errors?.password?.message && (
              <Error>{errors.password?.message}</Error>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative flex w-full cursor-pointer justify-center rounded-lg bg-orange-500 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
          >
            {isPending ? <MiniLoading /> : "Sign in"}
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
        </div>
      </form>
    );
  }

  // SIGNUP FORM - Fixed with proper registration and error handling
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(submit, error)}>
      <div className="space-y-4 rounded-md">
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="relative block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
            placeholder="Username"
            {...register("username", {
              required: "Please Enter Your Username",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
            })}
          />
          {errors?.username?.message && (
            <Error>{errors.username.message}</Error>
          )}
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="relative block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
            placeholder="Email address"
            {...register("email", {
              required: "Please Enter Your Email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "Please enter a valid email address. For example: user@example.com",
              },
            })}
          />
          {errors?.email?.message && <Error>{errors.email.message}</Error>}
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="relative block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
            placeholder="Password"
            {...register("password", {
              required: "Please Enter Your Password",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/,
                message:
                  "Password must be 8–16 characters long and include at least one uppercase letter, one number, and one special character.",
              },
            })}
          />
          {errors?.password?.message && (
            <Error>{errors.password.message}</Error>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword" className="sr-only">
            Repeat Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="relative block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
            placeholder="Repeat password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => {
                const password = getValues("password");
                return value === password || "Passwords do not match";
              },
            })}
          />
          {errors?.confirmPassword?.message && (
            <Error>{errors.confirmPassword.message}</Error>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full cursor-pointer justify-center rounded-lg bg-orange-500 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
        >
          Sign up
        </button>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
      </div>
    </form>
  );
}

export default Form;
