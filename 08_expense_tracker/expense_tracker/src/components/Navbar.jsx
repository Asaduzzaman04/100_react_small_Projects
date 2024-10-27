import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  const logo = "ExpensEase".split("");

  return (
    <>
      <header className=" inset-x-0 top-0 z-10 w-full bg-light">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="flex items-center  justify-between h-16 lg:h-20 gap-10">
            <div className="flex-shrink-0     text-3xl font-bold tracking-wide">
              <Link to="/" className="flex">
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

            <div className=" lg:flex    lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
              <NavLink to="/dashboard">
                <Button value="dashboard" /> {/*buttonComponent*/}
              </NavLink>
            </div>

            <div className="hidden    md:inline-block">
              <Button value="Try for free" /> {/*buttonComponent*/}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
