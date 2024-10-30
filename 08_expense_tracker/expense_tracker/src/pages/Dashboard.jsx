import { useEffect, useState } from "react";
import { useExpenceData } from "../context/ExpencsContext/ExpenseContext";
import { useContextData } from "../context/MyData";
import CreateBudget from "./../components/DashboardComp/CreateBudget";
import AddExpences from "./../components/DashboardComp/AddExpences";
import { motion } from "framer-motion";
import SummaryOfExpence from "./../components/DashboardComp/SummaryOfExpence";
import Balance from "./../components/DashboardComp/Balance";

const Dashboard = () => {
  const [adDate, setAddDate] = useState("");
  const [expDate, setExpDate] = useState("");

  const [expence, setExpence] = useState({
    addIncome: 0,
    addExpencesmoney: 0,
    balance: 0,
    title: "",
  });

  const { user } = useContextData(); // context data for username

  const { setExpenceData } = useExpenceData(); // context data for expences
  useEffect(() => {
    setExpenceData(expence);
  }, [expence]);

  return (
    <>
      <main className=" overflow-hidden w-full bg-light relative group felx flex-col justify-center items-center">
        <div className="absolute w-[20%] group-hover:w-full h-1 md:h-[1%] bg-purple-gradient left-[50%] -translate-x-[50%] top-0 transition-all duration-300 ease-linear"></div>
        {/* user name  section */}
        <section className="text-5xl  ml-5 py-6 font-bold">
          <p className="">
            welcome{" "}
            <span className="text-transparent bg-clip-text bg-purple-gradient capitalize">
              {user ? `${user}` : "enter your name first"},
            </span>
          </p>
        </section>

        <div className=" pt-10 flex flex-col justify-center items-center gap-5 ">
          <section className="grid grid-cols-1 w-full lg:gap-0 gap-8  md:grid-cols-2 lg:grid-cols-3   justify-center items-center ">
            {/*  budget section */}
            <motion.section
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="flex h-full  justify-center items-center "
            >
              <CreateBudget
                setAddIncone={setExpence}
                adDates={{ adDate, setAddDate }}
              />
            </motion.section>

            {/* Expences section */}
            <motion.section
              initial={{ y: -800 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="flex justify-center items-center"
            >
              <AddExpences
                setAddExpences={setExpence}
                expDates={{ expDate, setExpDate }}
              />
            </motion.section>

            {/* balance section */}
            <motion.section
              initial={{ y: -1200 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="flex justify-center items-center h-full "
            >
              <Balance />
            </motion.section>
          </section>

          {/* summery section */}
          <section className=" py-10 flex justify-center items-center px-5 md:px-20  md:w-full lg:px-28 ">
            <SummaryOfExpence time={{  expDate }} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
