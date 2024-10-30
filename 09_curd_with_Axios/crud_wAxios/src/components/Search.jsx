import Button from "./Button";

const Search = ({ setSearch, search, userposts }) => {
  const {
    title,
    post,
    setTitle,
    setPost,
    handleUserData,
    toggle
  } = userposts;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    handleUserData();
    if (title === "" || post === "") return; //prevent empty input
  };
  return (
    <>
      <section className="w-full flex justify-center items-center  py-5 ">
        <form
          onSubmit={handleSubmit}
          className="shadow-4xl shadow-blue-700/20 flex justify-center flex-col md:flex-row items-center gap-7  px-8 py-4 rounded-lg bg-[#15213d]"
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
            name="title"
            placeholder="add title "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border-none outline-none  px-3 py-2 rounded-md focus:scale-105 transition-all duration-150 ease-linear text-blue-950 font-semibold placeholder:text-blue-900 capitalize "
            type="text"
            name="post"
            placeholder="add post"
            autoComplete="off"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          {/* button-components */}
          <button onClick={handleClick} type="submit">
              <Button value={` ${toggle ? "add" : "edit"} `} color="bg-green-700 " />
          </button>
        </form>
      </section>
    </>
  );
};

export default Search;
