import Button from "./../ui/Button";

const Form = ({ value }) => {
  const { search, setSearch } = value;

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full  px-5 py-3 rounded-lg bg-blue-900 "
      >
        <div className="flex  flex-col md:flex-row gap-5 md:gap-10 justify-center items-center">
          {/* search input */}
          <div>
            <input
              type="text"
              placeholder="search content"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-class"
            />
          </div>
          {/* curd operation */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-10   justify-center items-center ">
            <input
              type="text"
              placeholder="add title"
              className="input-class"
            />
            <input type="text" placeholder="add post" className="input-class" />
          </div>
          {/* button section */}
          <button type="submit">
            <Button value="add" color="bg-green-400" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
