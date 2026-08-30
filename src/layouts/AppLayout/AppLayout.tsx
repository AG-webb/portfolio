import { Outlet } from "react-router";
import Footer from "../Footer";
import Header from "../Header";
import "./style.css";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
