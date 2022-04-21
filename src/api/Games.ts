import axios from "axios";

export const getGenerations = ({ params }: Record<string, any>) => {
  return axios.get(`https://pokeapi.co/api/v2/generation`, {
    params,
  });
};

export const getGenerationDetail = ({ id }: Record<string, any>) => {
  return axios.get(`https://pokeapi.co/api/v2/generation/${id}`);
};
