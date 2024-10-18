import { useState } from "react";
import Loading from "./Loading";
import Buttton from "./Buttton";

const PokemonItems = ({ data, loader, error }) => {
  const [hoverImage, setHoverImg] = useState(false);
  
  if (loader) {
    return <Loading />;
  }
  if (error) {
    return <p>error....</p>;
  }

  const handleMouseEnter = () => {
    setHoverImg(!hoverImage);
  };


  return (
    <div className=" flex flex-col text-center w-fit  justify-center items-center hover:scale-105 transition-all duration-300 ease-linear ">
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div
          onMouseEnter={handleMouseEnter}
          className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600  hover:scale-105 transition-all duration-200 ease-linear group  py-2"
        >
          <div className="absolute top-0 -left-20 w-[15%] h-full transition-all duration-300 ease-linear bg-slate-200  rounded-md group-hover:left-[110%] blur-lg -z-20 "></div>
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
            className="w-full h-full z-40"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 capitalize font-bold block font-sans text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
            {data.name}
          </h5>
          <div>
            <Buttton text={data.types[0].type.name} />
          </div>
          <div className="flex flex-col gap-4 font-semibold mt-5 capitalize justify-center items-center w-full text-center">
            <div
              id="details_one"
              className=" w-full flex justify-around  items-center"
            >
              <p>height : {data.height}</p>
              <p>weight : {data.weight}</p>
            </div>
            <div className="details_two w-full flex justify-around  items-center">
              <p>experience : {data.base_experience}</p>
              <p>base stats : {data.stats[0].base_stat}</p>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0"></div>
      </div>
    </div>
  );
};

export default PokemonItems;
