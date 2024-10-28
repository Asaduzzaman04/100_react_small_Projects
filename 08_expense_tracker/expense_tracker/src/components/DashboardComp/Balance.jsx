import { useExpenceData } from "./../../context/ExpencsContext/ExpenseContext";

const Balance = () => {
  const { expenceData } = useExpenceData();

  return (
    <>
      <main className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full h-full px-10 py-10 rounded-lg border-2  border-blue-900  ">
        <div className="flex justify-center items-center w-full h-full gap-10 ">
            <p className="font-semibold capitalize text-xl md:text-2xl">Total balance  : $ {expenceData.balance}</p>
            <p className="font-semibold capitalize text-xl md:text-2xl">Total expence  : ${expenceData.addExpencesmoney}</p>
        </div>
      </main>
    </>
  );
};

export default Balance;
