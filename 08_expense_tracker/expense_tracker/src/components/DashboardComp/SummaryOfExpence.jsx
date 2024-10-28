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
console.log(total);
  return (
    <>
      
    </>
  );
});

export default SummaryOfExpence;
