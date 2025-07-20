// DashboardLayout.jsx - New shared layout component
import { NavLink, Outlet } from "react-router-dom";
import UserHeading from "../../ui/UserHeading";
import { FaPlus, FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

function DashboardLayout() {
  return (
    <div className="h-full overflow-hidden bg-gray-900 text-white">
      <div className="flex h-full">
        {/* Left Sidebar Navigation */}
        <div className="w-80 flex-shrink-0 bg-gray-800/40 backdrop-blur-sm">
          <div className="p-6">
            <UserHeading />

            {/* Navigation Menu */}
            <nav className="mt-8 space-y-2">
              <NavLink
                to="/profile"
                end
                className={({ isActive }) =>
                  `flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-orange-500"
                  }`
                }
              >
                <FaUser className="mr-3 h-5 w-5" />
                Edit Profile
              </NavLink>

              <NavLink
                to="/profile/create-project"
                className={({ isActive }) =>
                  `flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-orange-500"
                  }`
                }
              >
                <FaPlus className="mr-3 h-5 w-5" />
                Create Project
              </NavLink>

              <NavLink
                to="/profile/my-projects"
                className={({ isActive }) =>
                  `flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-orange-500"
                  }`
                }
              >
                <GrProjects className="mr-3 h-5 w-5" />
                My Projects
              </NavLink>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
