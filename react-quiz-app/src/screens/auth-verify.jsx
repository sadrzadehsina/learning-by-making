import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Loading } from "../components/loading";

function AuthVerify() {
  const timeoutId = useRef();

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      timeoutId.current = setTimeout(() => navigate("/quiz"), 2000);
    }
    return () => clearTimeout(timeoutId.current);
  }, [isAuthenticated, navigate]);

  return (
    <div className="container mx-auto p-4 flex flex-wrap flex-col  justify-center items-center w-full h-screen">
      <div>
        <Loading immediate />
      </div>
      <div>
        <h1 className="text-3xl">Wait to verify your authentication</h1>
      </div>
    </div>
  );
}

export { AuthVerify };
