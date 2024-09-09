import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow py-2 px-20 max-w-screen-2xl mx-auto w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
