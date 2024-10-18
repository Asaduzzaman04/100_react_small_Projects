import usePoke from "../hooks/usePoke";


const Pokemons = () => {
  const [pokemonData,error,loading] = usePoke()

  console.log(pokemonData);
  return (
    <>
     <div>
fadsfdsfdsfsdfad
     </div>
    </>
  );
};

export default Pokemons;