import { Outlet } from "react-router-dom";

import { Navbar } from "../../components/navbar";
import Sidebar from "./sidebar/Sidebar";
import { useSidebarContext } from "../../contexts/SidebarContext";

const Files = () => {
  const { sidebarOpen } = useSidebarContext();

  return (
    <div className="h-full">
      <Navbar />
      <div className="flex flex-row">
        {sidebarOpen && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
};

export default Files;
