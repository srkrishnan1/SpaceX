//Basic layout of entire website

import Footer from "../Components/Footer";
import Navbar from "../Components/Nav-bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  

  return (
    <div>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
