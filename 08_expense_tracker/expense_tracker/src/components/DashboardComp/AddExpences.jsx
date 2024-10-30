import { memo, useCallback, useRef } from "react";
import ExpenceButton from "./ExpenceButton";

const AddExpences = memo(({ setAddExpences, expDates }) => {
  const { expDate, setExpDate } = expDates;
  const addExpence = useRef(null);
  const addExpenceTitle = useRef(null);

  const handleExpanceClick = useCallback((e) => {
    e.preventDefault();
    if (addExpence.current.value === null) return;
    setAddExpences((prev) => ({
      ...prev,
      addExpencesmoney:
        prev.addExpencesmoney + Number.parseInt(addExpence.current.value),
      balance: prev.balance - Number.parseInt(addExpence.current.value),
      addIncome: prev.addIncome - Number.parseInt(addExpence.current.value),
      title: addExpenceTitle.current.value,
    }));
    const currentExpenceData = new Date().toLocaleDateString();
    setExpDate(currentExpenceData);
  });

  return (
    <>
      <main className="relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]  px-10 py-10 rounded-lg border-2  border-blue-900 ">
        <div className="grid grid-cols-2 justify-around w-full  py-5">
          <p className="font-semibold capitalize text-lg md:text-xl">
            Add new expence{" "}
          </p>
          <p className="font-semibold capitalize text-lg flex  justify-normal items-center">
            last expence date :{" "}
            <span
              className={`${
                expDate
                  ? "border px-2 py-1 rounded-xl bg-warning "
                  : "text-base "
              }`}
            >
              {expDate ? `${expDate}` : "-"}
            </span>
          </p>
        </div>
        <form
          onSubmit={handleExpanceClick}
          className="flex flex-col justify-center items-center gap-5"
        >
          <div className="flex flex-col justify-center md:flex-row  items-center gap-4">
            <input
              type="number"
              required
              ref={addExpence}
              placeholder="Add expences money"
              className="rounded-md py-3 px-2 shadow-md border-none outline-none focus:outline-warning focus:outline-2"
            />
            <input
              type="text"
              required
              ref={addExpenceTitle}
              placeholder="Add title of expences"
              className="rounded-md py-3 px-2 shadow-md border-none outline-none focus:outline-warning focus:outline-2"
            />
          </div>
          <button type="submit">
            {" "}
            <ExpenceButton value="Add expence" />
          </button>
        </form>
      </main>
    </>
  );
});

export default AddExpences;
