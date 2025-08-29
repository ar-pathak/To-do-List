import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/utils/Navbar";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
