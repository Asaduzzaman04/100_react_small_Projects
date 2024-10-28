import Navbar from "./../components/Navbar";

import { Outlet } from "react-router-dom";

import { DataProvider } from "../context/DataProvider";
import ExpenceContextProvider from "../context/ExpencsContext/ExpenceContextProvider";

const Roots = () => {
  document.title = "ExpensEase";
  return (
    <>
      <main className="">
        <ExpenceContextProvider>
          <DataProvider>
            <Navbar />
            <Outlet /> {/* outlet */}
          </DataProvider>
        </ExpenceContextProvider>
      </main>
    </>
  );
};

export default Roots;
