import Header from "../../ui/Header";
import Button from "../../ui/Button";
import { useUser } from "./useUser";
import { Link } from "react-router-dom";


function User() {
  const { user } = useUser();



  return (
    <div className="bg-gray-900">
      <Header />
      <div className="min-h-screen px-4 py-12">
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
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400">
                        Bio
                      </label>
                      <textarea
                        className="mt-1 w-full rounded-lg bg-gray-800 p-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        placeholder="Tell us about yourself"
                        rows="4"
                      />
                    </div>
                  </form>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <Button
                    to="/home"
                    className="rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-all hover:bg-orange-600"
                  >
                    Back to Home
                  </Button>
                  <Button className="rounded-lg border-2 border-orange-500 px-6 py-3 font-medium text-orange-500 transition-all hover:bg-orange-500 hover:text-white">
                    Sign Out
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
