const Button = ({ value, color }) => {
  return (
    <>
      <p
        className={` px-5 py-1.5  rounded-md ${color} font-semibold hover:shadow-[1px_1px_2px_0px_rgba(198,231,255)] capitalize active:scale-95 transition-all duration-150 ease-linear`}
      >
        {value}
      </p>
    </>
  );
};

export default Button;
