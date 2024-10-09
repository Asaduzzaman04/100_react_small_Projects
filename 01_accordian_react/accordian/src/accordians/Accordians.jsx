import { useState } from "react";
import data from "./data";
import Faq from "./Faq";
import MultiSelect from "./MultiSelect";

const Accordians = () => {
  const [select, setSelect] = useState();
  const [close, setClose] = useState(false);
  const [multiSelectButton, setMultiSelectButton] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleClick = (elem) => {
    setSelect(elem);
    setClose(!close);
  };

  const multiSelectionButton = () => {
    setMultiSelectButton(!multiSelectButton);

  };
  const handleMultiSelection = (index) => {

  let copymultiple = [...multiSelect]
  let  currentIndex = copymultiple.indexOf(index)
  if(currentIndex == -1){
    copymultiple.push(index)
  }
  setMultiSelect(copymultiple)

  };
  return (
    <>
      {/* data */}
      <div className="  w-[40%]  flex flex-col justify-center items-center gap-5 ">
        <MultiSelect
          multiSelectButton={multiSelectionButton}
          text={
            multiSelectButton
              ? "Disable Multi-Selection"
              : "Enable Multi-Selection"
          }
        />
        {data && data.length > 0 ? (
          data.map((element, index) => (
            <Faq
              close={close}
              select={select}
              value={element}
              key={index}
              handleClick={handleClick}
              handleMultiSelection={handleMultiSelection}
              multiSelectButton={multiSelectButton}
              multiSelect={multiSelect}
            />
          ))
        ) : (
          <h2>data not found</h2>
        )}
      </div>
    </>
  );
};

export default Accordians;
