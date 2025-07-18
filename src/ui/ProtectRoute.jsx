import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
function ProtectRoute({ children }) {
  const { loadingUser, isAuthenticate } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!loadingUser && !isAuthenticate) {
      navigate("/login");
    }
  }, [isAuthenticate, loadingUser, navigate]);

  if (loadingUser) {
    return <Loading />;
  }

  if(!loadingUser && isAuthenticate){
    return children
  }
}

export default ProtectRoute;
