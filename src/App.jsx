import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreateProject from "./features/Dashboard/CreateProject";
import DashboardLayout from "./features/Dashboard/DashboardLayout";
import EditProfile from "./features/Dashboard/EditProfile";
import Profile from "./features/Dashboard/Profile";
import HomePage from "./pages/HomePage";
import Landing from "./pages/Landing";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import ProtectRoute from "./ui/ProtectRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Landing />} />
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/profile"
                element={
                  <ProtectRoute>
                    <DashboardLayout />
                  </ProtectRoute>
                }
              >
                <Route path="my-projects" index element={<Profile />} />
                <Route path="edit" element={<EditProfile />} />
                <Route path="create-project" element={<CreateProject />} />
              </Route>
            </Route>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default App;
