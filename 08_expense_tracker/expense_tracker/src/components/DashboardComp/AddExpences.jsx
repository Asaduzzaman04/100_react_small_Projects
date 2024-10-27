import { memo, useCallback, useRef, useState } from "react";
import ExpenceButton from './ExpenceButton';

const AddExpences = memo(({ setAddExpences }) => {
  const [date, setDate] = useState("");
  const addExpence = useRef(null);

  const handleExpanceClick = useCallback((e) => {
    e.preventDefault();
    if (addExpence.current.value === null) return;
    setAddExpences((prev) => ({
      ...prev,
      addExpencesmoney:
        prev.addExpencesmoney + Number.parseInt(addExpence.current.value),
      balance: prev.balance - Number.parseInt(addExpence.current.value),
      addIncome: prev.addIncome - Number.parseInt(addExpence.current.value),
    }));
    const currentExpenceData = new Date().toLocaleDateString()
   setDate(currentExpenceData)
  });

  return (
    <>
      <main>
        <form onSubmit={handleExpanceClick}>
          <input type="text" ref={addExpence} placeholder="Add Budget" />
          <button type="submit"> <ExpenceButton value='Add expence'/></button>
        </form>
      </main>
    </>
  );
});

export default AddExpences;
