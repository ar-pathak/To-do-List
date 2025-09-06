import React from "react";
import { Outlet } from "react-router";
import SideNavbar from "./components/nav/SideNavbar";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <div>
        {/* sideNavbar */}
        <div>
          <SideNavbar />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
