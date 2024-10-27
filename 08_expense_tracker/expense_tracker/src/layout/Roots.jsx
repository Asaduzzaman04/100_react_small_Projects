import Navbar from "./../components/Navbar";

import { Outlet } from "react-router-dom";

import {DataProvider} from "../context/DataProvider";

const Roots = () => {
  document.title = "ExpensEase";
  return (
    <>
      <main className="">
        <DataProvider>
          <Navbar />
          <Outlet /> {/* outlet */}
        </DataProvider>
      </main>
    </>
  );
};

export default Roots;
