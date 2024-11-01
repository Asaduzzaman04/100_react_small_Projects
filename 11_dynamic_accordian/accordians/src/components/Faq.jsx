import Button from "./Button";
import { motion } from 'framer-motion';

const Faq = ({ value, click, handleVisible }) => {
  console.log(value);
  return (
    <>
      <li className="bg-cyan-700 px-3 py-4 rounded-md font-semibold text-xl w-full flex flex-col gap-2 ">
        <div
          onClick={() => handleVisible(value.id)}
          className="flex  w-full gap-10 justify-between items-center"
        >
          <h1>{value.question}</h1>
          <button className="active:scale-95 transition-all duration-200 ease-linear">
            <Button text={`${click === value.id ? "less" : "show"}`} />
          </button>
        </div>

        <motion.p
         initial={false}
          animate={`${click === value.id ? { opacity: 1, x : 0 } : null } `}
        >{click === value.id ? value.answer : null}</motion.p>
      </li>
    </>
  );
};

export default Faq;
