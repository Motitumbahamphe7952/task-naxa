import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col mx-10">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
