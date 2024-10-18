import { useEffect, useState } from "react";

const usePoke = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=20";

  const fetchPokeData = async (apiKey) => {
    try {
      const baseResponse = await fetch(apiKey);
      if (baseResponse.ok) {
        const baseResult = await baseResponse.json();
        const finalData = baseResult.results.map(async (pokeItems) => {
          const finalResponse = await fetch(pokeItems.url);
          if (finalResponse.ok) {
            const finalResult = await finalResponse.json();
            return finalResult;
          }
        });
        const finalPokeItem = await Promise.all(finalData);
        setPokemonData(finalPokeItem);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokeData(API);
  }, []);

  return [pokemonData, error, loading];
};

export default usePoke;
