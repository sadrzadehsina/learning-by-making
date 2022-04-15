import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className=" bg-blue-500 hover:bg-blue-600 text-white inline-flex items-center border-0 py-1 px-3 focus:outline-none  rounded mt-4 md:mt-0"
    >
      Logout
    </button>
  );
}

export { LogoutButton };
