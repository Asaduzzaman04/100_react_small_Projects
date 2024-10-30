import { memo, useEffect, useState } from "react";
import { useExpenceData } from "../../context/ExpencsContext/ExpenseContext";
import SummaryTable from "./SummaryTable";

const SummaryOfExpence = memo(({ time }) => {
  const { expDate } = time; // get the last added date from addExpences  component
  const [total, setTotal] = useState([]);
  const { expenceData } = useExpenceData();
  useEffect(() => {
    const handleData = () => {
      setTotal((prev) => [...prev, expenceData]);
    };
    handleData();
  }, [expenceData]);

  const handleDelete = (title) => {
    const deletedExpence = total.filter((item) => item.title !== title); // the deleted expences from the list
    setTotal(deletedExpence);
  };

  return (
    <>
      <main className="w-fit md:w-full border-2 border-[#111] rounded-md ">
        <div className="rounded-lg ">
          <table className="w-full  text-left rtl:text-right ">
            <thead className="text-base text-light bg-button capitalize text-center ">
              <tr>
                <th scope="col" className=" px-2 py-3  md:px-6 md:py-3">
                  expences category
                </th>
                <th scope="col" className=" px-2 py-3  md:px-6 md:py-3">
                  amount
                </th>
                <th scope="col" className=" px-2 py-3  md:px-6 md:py-3">
                  date
                </th>
                <th scope="col" className=" px-2 py-3  md:px-6 md:py-3">
                  edit
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {total
                ? total.map((item, index) => (
                    <SummaryTable
                      handleDelete={handleDelete}
                      value={item}
                      key={index}
                      date={expDate}
                    />
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
});

export default SummaryOfExpence;
