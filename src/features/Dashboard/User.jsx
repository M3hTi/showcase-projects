import Header from "../../ui/Header";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { Link } from "react-router-dom";
import { useLogout } from "../authentication/useLogout";
import MiniLoading from "../../ui/MiniLoading";
import { useForm } from "react-hook-form";
import Error from "../../ui/Error";
import { useUpdateInfo } from "./useUpdateInfo";
import toast from "react-hot-toast";

function User() {
  const { user } = useUser();

  const { logOut, isPending } = useLogout();

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
    <div className="bg-gray-900">
      <Header />
      <div className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-xl bg-gray-800/40 p-8 backdrop-blur-sm">
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white">
                  User Dashboard
                </h1>
                <p className="mt-2 text-gray-400">
                  Manage your profile and projects
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-4 border-b border-gray-700">
                <Link
                  to="/profile/edit"
                  className="border-b-2 border-orange-500 px-4 py-2 text-orange-500"
                >
                  Edit Profile
                </Link>
                <Link
                  to="/profile/create-project"
                  className="px-4 py-2 text-gray-400 hover:text-orange-500"
                >
                  Create Project
                </Link>
                <Link
                  to="/profile/my-projects"
                  className="px-4 py-2 text-gray-400 hover:text-orange-500"
                >
                  My Projects
                </Link>
              </div>

              {/* Edit Profile Section */}
              <div className="space-y-6">
                <div className="rounded-lg bg-gray-900/50 p-6">
                  <h2 className="mb-4 text-xl font-semibold text-orange-500">
                    Edit Profile
                  </h2>
                  <form className="space-y-4" onSubmit={handleSubmit(submit)}>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Please Enter Your Email",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message:
                              "Please enter a valid email address. For example: user@example.com",
                          },
                        })}
                      />
                      {errors?.email?.message && (
                        <Error>{errors.email.message}</Error>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Password
                      </label>
                      <input
                        type="password"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Leave empty to keep current password"
                        {...register("password", {
                          pattern: {
                            value:
                              /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/,
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
                        type="expertise"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Please Enter Your Expertise"
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
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Tell us about yourself"
                        rows="4"
                        {...register("bio", {
                          required: "Please Enter Your Biography.",
                          minLength: {
                            value: 10,
                            message:
                              "Your Biograpgy must be at least 10 characters",
                          },
                        })}
                      />
                      {errors?.bio?.message && (
                        <Error>{errors.bio.message}</Error>
                      )}
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button
                        type="submit"
                        className="cursor-pointer rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-all hover:bg-orange-600"
                      >
                        {updating ? <MiniLoading /> : "Save Changes"}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <Button
                    to="/home"
                    className="cursor-pointer rounded-lg border-2 border-orange-500 px-6 py-3 font-medium text-orange-500 transition-all hover:bg-orange-500 hover:text-white"
                  >
                    Back to Home
                  </Button>
                  <Button
                    onClick={() => logOut()}
                    className="cursor-pointer rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-all hover:bg-orange-600"
                  >
                    {isPending ? <MiniLoading /> : " Sign Out"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
