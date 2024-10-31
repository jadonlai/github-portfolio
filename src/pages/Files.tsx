import { Outlet } from "react-router-dom";
import Sidebar from "../components/files/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const Files = () => {
  return (
    <>
      <div className="h-full">
        <Navbar />
        <div className="flex flex-row">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Files;
