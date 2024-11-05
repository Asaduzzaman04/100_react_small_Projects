import Button from "./Button";
import { motion } from "framer-motion";
const ItemCard = ({ data, handleDelete }) => {
  return (
    <>
      <motion.li 
      initial={{opacity: 0, y:-20,}}
      animate={{opacity: 1,}}
      whileInView={{y: 1}}
      drag="y"
      transition={{delay:data.id / 90,}}
      dragConstraints={{bottom: 20, top: -20,}}
      whileDrag={{scale: 1,cursor:"grabbing",scaleX:1.1}}
      className="hover:scale-105 hover:shadow-[0_15px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-200 ease-linear h-full px-2 py-3 md:px-3 md:py-4 rounded-md bg-sky-950">
        <div className="flex flex-col gap-5 font-semibold ">
          <p>{data.id}</p>
          <div className="flex flex-col gap-2">
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
          {/* button */}
          <div className="flex gap-5">
            <button>
              <Button value="edit" color="bg-green-400" />
            </button>
            <button onClick={() => handleDelete(data.id)}>
              <Button value="delete" color="bg-red-500" />
            </button>
          </div>
        </div>
      </motion.li>
    </>
  );
};

export default ItemCard;
