import { useCallback, useRef } from "react";
import Button from "./../components/Button";
import { NavLink, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContextData } from "../context/MyData";

const Hero = () => {
  const text = "An easy way to keep track all expenses.".split("");
  const userName = useRef(null);

  const { setUser } = useContextData();
  const handleClick = useCallback((e) => {
    e.preventDefault();
    if (userName.current.value === "") return;
    setUser(userName.current.value);
  });


  return (
    <>
      <main className="bg-light lg:h-lvh w-full">
        <div>
          <section className="overflow-hidden ">
            <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[750px] lg:min-h-[500px]  xl:min-h-[700px]">
              <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className="h-full px-4 pt-24 pb-16 sm:px-6  2xl:pr-32 lg:pt-40 lg:pb-14">
                  <div className="flex flex-col justify-between flex-1 h-full">
                    <div>
                      <h1 className="text-4xl lg:text-3xl font-bold text-black sm:text-6xl xl:text-7xl">
                        {text.map((item, index) => {
                          return (
                            <motion.span
                              className="text-transparent bg-clip-text bg-purple-gradient"
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.25,
                                delay: index / 20,
                              }}
                            >
                              {item && item.length ? item : null}
                            </motion.span>
                          );
                        })}
                      </h1>
                      <motion.p
                        initial={{ opacity: 0, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: 0.5,
                        }}
                        className="mt-6 font-semibold text-base text-black sm:text-xl lg "
                      >
                        Our ExpensEase helps you to predict your expenses based
                        on your previous activity and shares how you should
                        manage your money.
                      </motion.p>
                      <form className="mt-6  " onSubmit={handleClick}>
                        <div className="relative w-fit  mt-6">
                          <input
                            ref={userName}
                            type="text"
                            placeholder="your name"
                            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-700 focus:border-neutral-950 focus:outline-none "
                          />
                          <button className="absolute inset-y-1 right-1 flex justify-center items-center">
                            <Button value="submit" />
                          </button>
                        </div>
                      </form>

                      <div className="mt-5 w-fit">
                        <NavLink to="/dashboard">
                          <Button value="Get started for free" />
                        </NavLink>
                      </div>
                    </div>

                    <div className="mt-8 border-t-2 border-black sm:mt-14">
                      <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                        <p className="text-lg flex hover:underline  justify-center items-center gap-1 group font-semibold text-black">
                          App available on{" "}
                          <span className="group-hover:translate-x-3 transition-all duration-150 ease-linear ">
                            {" "}
                            <FaArrowRight />{" "}
                          </span>
                        </p>
                        <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                          <Link
                            className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                            role="button"
                          >
                            <img
                              className="w-auto rounded h-14 sm:h-16"
                              src="https://www.tailwindtap.com/assets/components/hero/expense-manager/app-store-button.png"
                              alt=""
                            />
                          </Link>
                          <Link
                            className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                            role="button"
                          >
                            <img
                              className="w-auto rounded h-14 sm:h-16"
                              src="https://www.tailwindtap.com/assets/components/hero/expense-manager/play-store-button.png"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full overflow-hidden lg:w-[60%] xl:w-7/12 lg:order-1">
                <div className="lg:absolute lg:bottom-0 lg:left-0">
                  <img
                    className=" max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-2xl xl:max-w-[900px] drop-shadow-lg"
                    src="https://www.tailwindtap.com/assets/components/hero/expense-manager/mobileback.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Hero;
