import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

import { Loading } from "../components/loading";

function Welcome() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/quiz");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) return <Loading />;

  return (
    <section class=" body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap justify-between items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl ">
            Did you ever wonder what your friends think about you?
          </h1>
          <p class="leading-relaxed mt-4">
            Take this quiz, and see how you stack up against your friends. By
            Signing up, and using the quiz, you will be able to measure your own
            skills and at the end share your results with your friends.
          </p>
        </div>
        <button
          onClick={() =>
            loginWithRedirect({
              redirectUri: "http://localhost:3000/auth-verify",
            })
          }
          class="flex-shrink-0 text-white bg-blue-500 hover:bg-blue-600 border-0 py-2 px-8 focus:outline-none rounded text-xl mt-10 sm:mt-0"
        >
          LogIn to Start
        </button>
      </div>
    </section>
  );
}

export { Welcome };
