// DashboardLayout.jsx - New shared layout component
import { NavLink, Outlet } from "react-router-dom";
import UserHeading from "../../ui/UserHeading";
import { FaPlus, FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../../ui/Button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-full overflow-hidden bg-gray-900 text-white">
      <div className="flex h-full">
        <div className="block lg:hidden">
          <Button
            className="relative top-4 left-2 z-50 cursor-pointer text-3xl sm:left-6"
            onClick={() => setSidebarOpen(true)}
          >
            <GiHamburgerMenu />
          </Button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 z-50 h-full w-80 transform bg-gray-800/95 backdrop-blur-sm transition-transform duration-300 ease-in-out lg:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} `}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <Button
              className="text-3xl text-white hover:text-orange-500"
              onClick={() => setSidebarOpen(false)}
            >
              <IoMdClose />
            </Button>
          </div>

          <div className="p-6 pt-0">
            <UserHeading />

            {/* Mobile Navigation Menu */}
            <nav className="mt-8 space-y-2">
              <NavLink
                to="/profile/edit"
                end
                onClick={() => setSidebarOpen(false)}
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
                onClick={() => setSidebarOpen(false)}
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
                onClick={() => setSidebarOpen(false)}
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

        {/* Left Sidebar Navigation */}
        <div className="hidden w-80 flex-shrink-0 bg-gray-800/40 backdrop-blur-sm lg:block">
          <div className="p-6">
            <UserHeading />

            {/* Navigation Menu */}
            <nav className="mt-8 space-y-2">
              <NavLink
                to="/profile/edit"
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
