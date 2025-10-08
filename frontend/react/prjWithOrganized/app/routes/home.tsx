import { Outlet } from "react-router";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function HomeLayout() {
  return (
    <div className="home-layout">
      <Header />
      <div className="home-layout__body">
        <Sidebar />
        <main className="home-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
