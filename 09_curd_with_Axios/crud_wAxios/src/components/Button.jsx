

const Button = ({value,color}) => {
    return (
        <>
            <button
            type="submit"
            className={` px-5 py-1.5 rounded-md ${color} font-semibold  capitalize active:scale-95 transition-all duration-150 ease-linear`}
          >
            {value}
          </button>
        </>
    );
};

export default Button;