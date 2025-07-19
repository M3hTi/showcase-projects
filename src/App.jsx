import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Landing from "./pages/Landing";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./ui/PageNotFound";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./ui/ProtectRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DashboardEditProfile from "./pages/DashboardEditProfile";

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
                    <DashboardEditProfile />
                  </ProtectRoute>
                }
              />
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
