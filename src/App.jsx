import { Outlet } from "react-router";
import SideNavbar from "./components/nav/SideNavbar";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Side Navbar */}
        <div className="hidden md:block ">
          <SideNavbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
