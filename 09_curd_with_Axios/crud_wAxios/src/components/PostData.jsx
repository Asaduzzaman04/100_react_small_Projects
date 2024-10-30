import Button from "./Button";
import { motion } from "framer-motion";

const PostData = ({ value, handleDelete }) => {
  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: value.id / 20 }}
        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        className="bg-[#041c22] shadow-2xl shadow-blue-500/20 border-2 border-[#57595e] px-3  py-5  rounded-md flex flex-col justify-center items-start gap-3 "
      >
        <p className="font-semibold capitalize ">post no : {value.id}</p>
        <h1 className="font-semibold capitalize"> title : {value.title}</h1>
        <p className="capitalize">{value.body}</p>
        <div className="flex  justify-center items-center gap-10">
          <Button value="edit" color="bg-green-700" />

          <button onClick={() => handleDelete(value.id)}>
            <Button value="delete" color="bg-red-700 " />
          </button>
        </div>
      </motion.li>
    </>
  );
};

export default PostData;
