import { motion } from "framer-motion";
import ItemCard from "./../components/ui/ItemCard";

const Home = ({ searchValue, value}) => {
  const {apiData, apiLoading, apiError, handleDelete,handleEdit} = value
  const heading = "read all posts".split("");

  const finaldata = apiData.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (apiError) {
    return <h1 className="text-3xl font-bold text-white">error</h1>;
  }
  if (apiLoading) {
    return <h1 className="text-3xl font-bold text-white">Loading...</h1>;
  }
  return (
    <>
      <section className="text-white  overflow-hidden">
        {/* heading-divition */}

        <h1 className="text-2xl text-center font-semibold capitalize  ">
          {heading.map((item, idx) => {
            return (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx / 20, type: "spring" }}
                key={idx}
              >
                {item}
              </motion.span>
            );
          })}
        </h1>

        {/* postItem section */}
        <div className="mt-5">
          <ul className=" gap-2 md:gap-4 lg:gap-8 px-2  grid justify-center  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {finaldata ? (
              finaldata.map((item) => (
                <ItemCard
                handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  data={item}
                  key={item.id}
                />
              ))
            ) : (
              <h1> not found any post</h1>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
