import Header from "./Header";
import Slide from "./Slide";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
const menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Shop",
    path: "/shop",
  },
];
const Layout = () => {
  return (
    <div>
      <Header menus={menus} />
      <Slide />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
