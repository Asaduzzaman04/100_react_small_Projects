import usePost from "./../hooks/usePost";
import { motion } from "framer-motion";
import PostData from "./../components/PostData";
import { useEffect, useState } from "react";

const Post = ({ search }) => {
  const [postItem, loading, error] = usePost();
  const [data, setData] = useState([]); //data store all post
  const allPostText = "all posts".split("");
  useEffect(() => {
    setData(postItem);
  }, [postItem]);

  const searchValue = data.filter((item) => 
    item.title.toLowerCase().includes(search.toLowerCase()) // search for post target with search value to title
  );
  const handleDelete = (event) => {
    const deleteData = data.filter((items) => items.id !== event); // filter data for delete
    setData(deleteData);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <>
      <section className="w-full  flex flex-col justify-center items-center">
        <div>
          <h2 className="capitalize text-2xl font-semibold mt-5">
            {allPostText.length &&
              allPostText.map((item, idx) => {
                return (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: idx / 20 }}
                    key={idx}
                  >
                    {item}
                  </motion.span>
                );
              })}
          </h2>
        </div>
        {/* Postitem-SEction */}

        <ul className="w-full  grid gap-5  px-5   py-5 md:py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {searchValue.map((items, idx) => (
            <PostData handleDelete={handleDelete} key={idx} value={items} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Post;
