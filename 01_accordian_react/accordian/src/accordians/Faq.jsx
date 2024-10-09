/* eslint-disable react/prop-types */
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";

const Faq = ({ value, handleClick, select, close,handleMultiSelection,multiSelectButton,multiSelect }) => {
  return (
    <>
      <div
        onClick={multiSelectButton ? () =>handleMultiSelection(value.id) :() => handleClick(value.id)}
        className="bg-[#4f9730] w-full px-5 py-5 rounded-lg font-semibold text-xl text-white flex flex-col justify-center items-center gap-2"
      >
        <div className="flex justify-between gap-5 items-center  w-full cursor-pointer py-3 ">
          <h2>{value.question}</h2>
          <span>{ select === value.id && close || multiSelect.indexOf(value.id) !== -1  ? <FaMinus /> : <TiPlus />}</span>
        </div>
        <h2>{select === value.id && close || multiSelect.indexOf(value.id) !== -1  ? <p>{value.answer}</p> : null}</h2>
      </div>
    </>
  );
};

export default Faq;
