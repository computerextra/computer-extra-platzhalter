import { Outlet } from "react-router";
import Navbar from "./components/menu";

export default function Layout() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <section className="container mx-auto mt-5">
        <Outlet />
      </section>
    </div>
  );
}
