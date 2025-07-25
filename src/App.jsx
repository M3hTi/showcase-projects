import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Group routes by feature for better code splitting
const AppLayout = lazy(
  () => import("./ui/AppLayout" /* webpackChunkName: "layout" */),
);

// Auth pages
const LoginPage = lazy(
  () => import("./pages/LoginPage" /* webpackChunkName: "auth" */),
);
const SignupPage = lazy(
  () => import("./pages/SignupPage" /* webpackChunkName: "auth" */),
);

// Main pages
const Landing = lazy(
  () => import("./pages/Landing" /* webpackChunkName: "main" */),
);
const HomePage = lazy(
  () => import("./pages/HomePage" /* webpackChunkName: "main" */),
);
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Dashboard feature
const DashboardLayout = lazy(
  () =>
    import(
      "./features/Dashboard/DashboardLayout" /* webpackChunkName: "dashboard" */
    ),
);
const EditProfile = lazy(
  () =>
    import(
      "./features/Dashboard/EditProfile" /* webpackChunkName: "dashboard" */
    ),
);
const CreateProject = lazy(
  () =>
    import(
      "./features/Dashboard/CreateProject" /* webpackChunkName: "dashboard" */
    ),
);
const Profile = lazy(
  () =>
    import("./features/Dashboard/Profile" /* webpackChunkName: "dashboard" */),
);

// UI Components
const PageNotFound = lazy(
  () => import("./ui/PageNotFound" /* webpackChunkName: "ui" */),
);
const ProtectRoute = lazy(
  () => import("./ui/ProtectRoute" /* webpackChunkName: "ui" */),
);

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Loading from "./ui/Loading";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default App;
