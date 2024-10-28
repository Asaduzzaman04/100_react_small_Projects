import { memo, useCallback, useRef, useState } from "react";
import Button from './../Button';

const CreateBudget = memo(({ setAddIncone,adDates }) => {
  const {adDate, setAddDate} = adDates
  
  const addBudget = useRef(null);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setAddIncone((prev) => ({
      ...prev,
      addIncome: prev.addIncome + Number.parseInt(addBudget.current.value),
      balance: prev.balance + Number.parseInt(addBudget.current.value),
    }));
    const currentAddMoney = new Date().toLocaleDateString()
    setAddDate(currentAddMoney)
  });

  return (
    <>
      <main className=" relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full flex flex-col justify-center items-center  px-10 py-10 rounded-lg border-2  border-blue-900  ">
        <div className="grid grid-cols-2 h-full justify-around w-full gap-5 py-5">
          <p className="font-semibold capitalize text-lg md:text-xl">Add your budget </p>
          <p className="font-semibold capitalize text-lg md:text-xl">last added date : <span className={`${adDate ? 'border px-2 py-1 rounded-xl bg-success ' :  'text-base '}`}>{ adDate ?  `${adDate}`: "not added"}</span></p>
        </div>
        <form onSubmit={handleClick} className="flex flex-col w-full justify-center items-center gap-5 ">
          <input ref={addBudget} type="number" placeholder="Enter Budget" className="rounded-md py-3 px-2 shadow-md border-none outline-none focus:outline-success focus:outline-2" />
          <button type="submit"><Button value='Add Budget'/></button>
        </form>
      </main>
    </>
  );
});

export default CreateBudget;
