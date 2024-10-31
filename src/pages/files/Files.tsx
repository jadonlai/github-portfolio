import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import Sidebar from "./sidebar/Sidebar";

const Files = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Files;
