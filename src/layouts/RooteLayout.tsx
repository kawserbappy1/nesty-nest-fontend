import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const RooteLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default RooteLayout;
