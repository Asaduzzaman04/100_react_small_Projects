import useItemsData from "../hooks/useItemsData";
import { motion } from "framer-motion";
import ItemCard from "./../components/ui/ItemCard";

const Home = ({ searchValue }) => {
  const [apiData, apiLoading, apiError, handleDelete] = useItemsData();
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
      <section className="text-white ">
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
        <div className="mt-5" >
          <ul className=" gap-2 md:gap-4 lg:gap-5 px-2  grid justify-center  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {finaldata
              ? finaldata.map((item) => <ItemCard handleDelete={handleDelete}  data={item} key={item.id} />)
              : null}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
