/* eslint-disable react/prop-types */


const MultiSelect = ({multiSelectButton,text}) => {
   
    return (
        <>
            <button onClick={multiSelectButton} className="font-semibold text-xl  capitalize active:scale-95 transition-all duration-200 ease-linear px-2 py-1 rounded-md text-white bg-[#ee5253] ">
          {text}
        </button>
        </>
    );
};

export default MultiSelect;