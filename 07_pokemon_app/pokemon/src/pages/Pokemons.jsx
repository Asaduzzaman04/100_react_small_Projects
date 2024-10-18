import usePoke from "../hooks/usePoke";
import PokemonItems from "./../components/PokemonItems";

const Pokemons = () => {
  const [pokemonData, error, loading] = usePoke();

  return (
    <>
      <div className="w-full flex gap-5 flex-col justify-center items-center bg-indigo-950 text-black px-10 pt-10  ">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
          choose your favourite pokemon
        </h2>
        <div className=" grid justify-center items-center gap-16 mt-10    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full">
          {pokemonData && pokemonData.length > 0
            ? pokemonData.map((items, idx) => (
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
