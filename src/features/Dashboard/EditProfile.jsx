import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { useLogout } from "../authentication/useLogout";
import MiniLoading from "../../ui/MiniLoading";
import { useForm } from "react-hook-form";
import Error from "../../ui/Error";
import { useUpdateInfo } from "./useUpdateInfo";
import toast from "react-hot-toast";

function EditProfile() {
  const { user } = useUser();
  const { updateUserInfo, updating } = useUpdateInfo();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: user?.email,
      fullname: user?.user_metadata?.fullname,
      bio: user?.user_metadata?.bio,
      expertise: user?.user_metadata?.expertiseArr?.join(","),
    },
  });

  function submit(data) {
    console.log(data);

    const { email, password, fullname, bio, expertise } = data;
    const expertiseArr = expertise.split(",");
    const currentEmail = user?.email;
    const emailToSend = email !== currentEmail ? email : null;
    const passwordToSend = password && password.trim() !== "" ? password : null;

    const newData = {
      email: emailToSend,
      password: passwordToSend,
      data: { fullname, bio, expertiseArr },
    };

    console.log(newData);

    updateUserInfo(newData, {
      onSuccess: () => {
        toast.success("Your information is updated!");
        reset();
      },
      onError: (err) => {
        console.error("Update error:", err);
        toast.error(`${err.message}`);
        reset();
      },
    });
  }

  return (
    <div className="p-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm">
          <h1 className="mb-6 text-2xl font-bold text-orange-500">
            Edit Profile
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit(submit)}>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="Enter your full name"
                  {...register("fullname", {
                    required: "Please Enter Your Full Name",
                  })}
                />
                {errors?.fullname?.message && (
                  <Error>{errors.fullname.message}</Error>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Please Enter Your Email",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message:
                        "Please enter a valid email address. For example: user@example.com",
                    },
                  })}
                />
                {errors?.email?.message && (
                  <Error>{errors.email.message}</Error>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400">
                Password
              </label>
              <input
                type="password"
                className="mt-1 w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Leave empty to keep current password"
                {...register("password", {
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
              <label className="block text-sm font-medium text-gray-400">
                Expertise
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Please Enter Your Expertise (comma separated)"
                {...register("expertise", {
                  required: "Please Enter Your at least 1 Expertise!",
                })}
              />
              {errors?.expertise?.message && (
                <Error>{errors.expertise.message}</Error>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400">
                Bio
              </label>
              <textarea
                className="mt-1 w-full rounded-lg bg-gray-800 p-3 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Tell us about yourself"
                rows="4"
                {...register("bio", {
                  required: "Please Enter Your Biography.",
                  minLength: {
                    value: 10,
                    message: "Your Biography must be at least 10 characters",
                  },
                })}
              />
              {errors?.bio?.message && <Error>{errors.bio.message}</Error>}
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                to="/home"
                className="cursor-pointer rounded-lg border-2 border-orange-500 px-6 py-3 font-medium text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
              >
                Back to Home
              </Button>
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-all hover:bg-orange-600"
              >
                {updating ? <MiniLoading /> : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
