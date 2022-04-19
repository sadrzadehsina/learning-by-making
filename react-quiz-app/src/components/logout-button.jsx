import { useAuth0 } from "@auth0/auth0-react";
import { PrimaryButton } from "./primary-button";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <PrimaryButton onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </PrimaryButton>
  );
}

export { LogoutButton };
