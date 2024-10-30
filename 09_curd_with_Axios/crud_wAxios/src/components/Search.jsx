
import Button from './Button';


const Search = ({setSearch,search}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="w-full flex justify-center items-center  py-5 ">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col md:flex-row items-center gap-7 "
        >
           <input
            className="border-none outline-none  px-3 py-2 rounded-md focus:scale-105 transition-all duration-150 ease-linear text-blue-950 font-semibold placeholder:text-blue-900 capitalize "
            type="text"
            name="search"
            placeholder="search post"
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className="border-none outline-none  px-3 py-2 rounded-md focus:scale-105 transition-all duration-150 ease-linear text-blue-950 font-semibold placeholder:text-blue-900 capitalize"
            autoComplete="off"
            type="text"
            name="search"
            placeholder="add title "
          />
          <input
            className="border-none outline-none  px-3 py-2 rounded-md focus:scale-105 transition-all duration-150 ease-linear text-blue-950 font-semibold placeholder:text-blue-900 capitalize "
            type="text"
            name="search"
            placeholder="add post"
            autoComplete="off"
          />
          {/* button-components */}
          <Button value='add' color='bg-green-700 '/>
        </form>
      </section>
    </>
  );
};

export default Search;
