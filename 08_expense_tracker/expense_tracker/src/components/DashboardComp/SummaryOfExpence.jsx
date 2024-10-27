import { memo, useEffect, useState } from "react";
import { useExpenceData } from "../../context/ExpencsContext/ExpenseContext";

const SummaryOfExpence = memo(({ time }) => {
  const { adDate, expDate } = time; // get the last added date from addExpences and addIncome component
  const [total, setTotal] = useState([]);
  const { expenceData } = useExpenceData();
  useEffect(() => {
    const handleData = () => {
      setTotal((prev) => [...prev, expenceData]);
    };
    handleData();
  }, [expenceData]);

  return (
    <>
      <main className=" w-full">
        <section className="w-full flex flex-col justify-between items-center">
          {total && total.length
            ? total.map((item, idx) => {
                return (
                  <div
                    className="expence-item   my-5 flex-row gap-4 w-full md:gap-10 justify-center items-center "
                    key={idx}
                  >
                    <div className=" rounded-xl  px-2  flex bg-dark text-white  justify-center items-center gap-5 md:gap-9  text-xl font-semibold ">
                      <p>money added</p>
                      <p> {item.addIncome ? item.addIncome : 0}</p>
                    </div>
                    <div className="  rounded-xl  px-2 flex bg-warning  justify-center items-center gap-5 md:gap-9  text-xl font-semibold ">
                      <p>expence</p>
                      <p>{item.addExpencesmoney ? item.addExpencesmoney : 0}</p>
                    </div>
                    <div
                      className={` rounded-xl  px-2 flex  ${
                        item.balance && -1 ? "bg-warning" : "bg-success"
                      } justify-center items-center gap-5 md:gap-9  text-xl font-semibold`}
                    >
                      <p>balance</p>
                      <p c>{item.balance ? item.balance : 0}</p>
                    </div>
                  </div>
                );
              })
            : null}
        </section>
      </main>
    </>
  );
});

export default SummaryOfExpence;
