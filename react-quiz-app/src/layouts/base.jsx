import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

function LayoutBase() {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Outlet />
      </div>
    </div>
  );
}

export { LayoutBase };
