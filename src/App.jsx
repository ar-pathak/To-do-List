import { Outlet } from "react-router";
import Navbar from "./features/navbar/pages/Navbar";
import SideNavbar from "./features/navbar/pages/SideNavbar";

const App = () => {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1 h-full">
        {/* Side Navbar */}
        <div className="hidden lg:block mt-22">
          <SideNavbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 mt-22 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
