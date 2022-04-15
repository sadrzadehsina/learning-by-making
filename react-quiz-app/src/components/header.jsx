import { Logo } from "./logo";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./logout-button";

function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <header className=" body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <div className="md:ml-auto flex flex-wrap items-center justify-center" />
        {isAuthenticated && <LogoutButton />}
      </div>
    </header>
  );
}

export { Header };
