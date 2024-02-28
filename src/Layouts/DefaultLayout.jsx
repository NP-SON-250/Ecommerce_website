import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Defaults/components/Navbar/Navbar";
import Dash_footer from "../shared/dash_footer/Dash_footer";
const Default_layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Dash_footer />
    </div>
  );
};

export default Default_layout;
