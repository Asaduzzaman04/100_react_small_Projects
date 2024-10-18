import { useState } from "react";
import usePoke from "../hooks/usePoke";
import PokemonItems from "./../components/PokemonItems";

const Pokemons = () => {
  const [pokemonData, error, loading] = usePoke();
  const [searchPoke, setSearchPoke] = useState("");

  // const searchPokemonItems = pokemonData.filter((elements) =>
  //   elements.name.toLowerCase().includes(searchPoke.toLowerCase())
  // );
  // console.log(searchPokemonItems);

  const searchPokemon = pokemonData.filter((elements) =>
    elements.name.toLowerCase().includes(searchPoke.toLowerCase())
  );

  return (
    <>
      <div className="w-full flex gap-5 flex-col justify-center items-center bg-indigo-950 text-black px-10 pt-10  ">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
          choose your favourite pokemon
        </h2>

        <div className="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[270px] bg-[#334f9c] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
          <div className="flex items-center justify-center fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width="22"
              height="22"
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
            </svg>
          </div>
          <input
            type="text"
            className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
            value={searchPoke}
            onChange={(e) => setSearchPoke(e.target.value)}
          />
        </div>

        <div className=" grid justify-center items-center gap-16 mt-10    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full">
          {pokemonData && pokemonData.length > 0
            ? searchPokemon.map((items, idx) => (
                <PokemonItems
                  key={idx}
                  data={items}
                  lodaer={loading}
                  error={error}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Pokemons;
