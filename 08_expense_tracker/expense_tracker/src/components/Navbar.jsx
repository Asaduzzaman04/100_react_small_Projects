import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import { animate, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const logo = "ExpensEase".split("");


  return (
    <>
      <header className=" inset-x-0 top-0 z-10 w-full bg-light">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="flex items-center  justify-around h-16 lg:h-20 gap-10">
            <div className="   text-3xl font-bold tracking-wide">
              <Link to="/" className="flex hover:scale-105 transition-all duration-200 ease-linear">
                {logo.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{
                        y: -200,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: index / 9,
                        type: "spring",
                      }}
                    >
                      {item}
                    </motion.div>
                  );
                })}
              </Link>
            </div>

          <div className="flex   justify-center items-center gap-10">
          <div onClick={() => setClick(!click)} className=" lg:flex    lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
             {
              click ?   <NavLink to="/">
              <Button value="home" /> 
            </NavLink> : <NavLink to="/dashboard">
              <Button value="dashboard" /> 
            </NavLink>
             }
            </div>

            <div className="hidden    md:inline-block">
              <Button value="Try for free" /> {/*buttonComponent*/}
            </div>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
