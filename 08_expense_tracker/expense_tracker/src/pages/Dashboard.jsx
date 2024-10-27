import { useEffect, useState } from "react";
import { useExpenceData } from "../context/ExpencsContext/ExpenseContext";
import { useContextData } from "../context/MyData";
import CreateBudget from "./../components/DashboardComp/CreateBudget";
import AddExpences from "./../components/DashboardComp/AddExpences";
import Balance from "./../components/DashboardComp/Balance";

const Dashboard = () => {
  const [expence, setExpence] = useState({
    addIncome: 0,
    addExpencesmoney: 0,
    balance: 0,
  });

  const { user } = useContextData(); // context data for username

  const { expenceData, setExpenceData } = useExpenceData(); // context data for expences
  useEffect(() => {
    setExpenceData(expence);
  }, [expence]);
  console.log(expenceData);

  return (
    <>
      <main className=" w-full bg-light relative group felx flex-col justify-center items-center">
        <div className="absolute w-[20%] group-hover:w-full h-[2%] bg-purple-gradient left-[50%] -translate-x-[50%] top-0 transition-all duration-300 ease-linear"></div>
        {/* user name  section */}
        <section className="text-5xl  ml-5 py-6 font-bold">
          <p className="">
            welcome{" "}
            <span className="text-transparent bg-clip-text bg-purple-gradient capitalize">
              {user ? `${user}` : "enter your name first"},
            </span>
          </p>
        </section>

        <div className="flex flex-col justify-center items-center gap-5 ">
          <section className="grid w-full border-2 border-[#111] grid-cols-2 justify-center items-center ">
            {/*  budget section */}
            <section className="flex justify-center items-center">
              <CreateBudget setAddIncone={setExpence} />
            </section>
            {/* Expences section */}
            <section className="flex justify-center items-center">
              <AddExpences setAddExpences={setExpence} />
            </section>
          </section>
          {/* balance section */}
          <section>
            <Balance balance={setExpence} />
          </section>
          {/* summery section */}
          <section></section>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
