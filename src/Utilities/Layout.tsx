import Footer from "../Components/Footer";
import Navbar from "../Components/Nav-bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  console.log("Inside layout");

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
