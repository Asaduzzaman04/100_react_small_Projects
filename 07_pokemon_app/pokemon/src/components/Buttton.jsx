const Buttton = ({ text }) => {
  return (
    <>
      <button className="mt-5 bg-blue-400 hover:bg-indigo-200 text-black font-bold py-1 px-4 rounded-full shadow-md shadow-indigo-300  transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110   capitalize hover:text-black">
        {text}
      </button>
    </>
  );
};

export default Buttton;
