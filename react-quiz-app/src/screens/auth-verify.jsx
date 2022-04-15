import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../components/loading";

function AuthVerify() {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useAuth0();
  const startQuiz = () => navigate("/quiz");

  return (
    <div className="container mx-auto p-4 flex flex-wrap flex-col  justify-center items-center w-full h-screen">
      {!isAuthenticated || isLoading ? (
        <>
          <div>
            <Loading immediate />
          </div>
          <div>
            <h1 className="text-3xl">Wait to verify your authentication</h1>
          </div>
        </>
      ) : (
        <>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white inline-flex items-center border-0 py-4 px-10 focus:outline-none  rounded mt-4 md:mt-0 text-2xl"
              onClick={startQuiz}
            >
              I am ready, Start Quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export { AuthVerify };
