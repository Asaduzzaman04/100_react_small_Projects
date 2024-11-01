import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const ref = useRef();
  const logo = "nabvar".split("");

  return (
    <>
      <nav
        ref={ref}
        className="w-full text-xl font-semibold capitalize flex justify-around items-center"
      >
        <div className="text-2xl flex">
          {logo.map((item, index) => {
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -200, scale: 2 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: index / 10,
                  delay: index / 20,
                  type: "spring",
                }}
              >
                {item}
              </motion.span>
            );
          })}
        </div>
        <div>
          <ul
            className={`${
              click
                ? `flex flex-col absolute top-14 left-0 bg-[#5C56F7]  w-full h-lvh  gap-20`
                : "hidden"
            } md:relative md:top-auto md:left-auto md:flex md:flex-row md:h-auto  md:w-full justify-center items-center gap-5 md:gap-6 lg:gap-7 xl:gap-8`}
          >
            <li>home</li>
            <li>about</li>
            <li>blog</li>
            <li>service</li>
          </ul>
          <button
            onClick={() => setClick(!click)}
            className={` inline-block md:hidden text-3xl font-bold  px-1.5 py-0.5 rounded-[3px] bg-[#17305c] active:scale-95 transition-all duration-200`}
          >
            {click ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
