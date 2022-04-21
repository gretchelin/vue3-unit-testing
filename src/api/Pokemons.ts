import axios from "axios";

export const getPokemons = (params: Record<string, any>) => {
  console.log({ params });
  return axios.get(`https://pokeapi.co/api/v2/pokemon`, {
    params,
  });
};

export const getPokemonDetail = (id: string | number) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
