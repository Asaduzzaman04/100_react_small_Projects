import { memo, useCallback, useRef, useState } from "react";
import Button from './../Button';

const CreateBudget = memo(({ setAddIncone }) => {
  const [data, setData] = useState();
  const addBudget = useRef(null);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setAddIncone((prev) => ({
      ...prev,
      addIncome: prev.addIncome + Number.parseInt(addBudget.current.value),
      balance: prev.balance + Number.parseInt(addBudget.current.value),
    }));
  });

  return (
    <>
      <main className="">
        <form onSubmit={handleClick}>
          <input ref={addBudget} type="number" placeholder="Enter Budget" />
          <button type="submit"><Button value='Add Budget'/></button>
        </form>
      </main>
    </>
  );
});

export default CreateBudget;
