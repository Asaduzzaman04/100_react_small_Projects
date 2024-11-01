import { useState } from "react";
import data from "./../data/data";
import Faq from "../components/Faq";

const Accordians = () => {
  const [click, setClick] = useState(false);

  const handleVisible = (id) => {
    setClick((prev) => (prev === id ? false : id)); // it takes previous value  if the previous value is equal to id then false else it true
  };

  return (
    <>
      <ul className="list-none rounded-md p-5 flex flex-col gap-5 bg-indigo-800 w-[40%]">
        {data.map((data) => (
          <Faq
            key={data.id}
            handleVisible={handleVisible}
            value={data}
            click={click}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordians;
