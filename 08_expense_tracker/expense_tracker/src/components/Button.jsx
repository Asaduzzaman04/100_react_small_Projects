import { Link } from "react-router-dom";
const Button = ({ value }) => {
  return (
    <>
      <p className=" capitalize  rounded-md lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-light bg-button transition-all duration-200 active:scale-95 ">
        {value}
      </p>
    </>
  );
};

export default Button;
