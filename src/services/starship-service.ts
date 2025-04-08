import { Starship, StarshipResponseInfo } from "@custom-types/starship";
import { serviceFetch } from "@utils/serviceFetch";

export const getStarships = async (page = 1) => {
  const response = await serviceFetch<StarshipResponseInfo>({
    method: "GET",
    endpoint: `starships/?page=${page}`,
  });
  return {
    ...response,
    page,
  };
};

export const getStarshipById = async (id: string) => {
  return await serviceFetch<Starship>({
    method: "GET",
    endpoint: `starships/${id}`,
  });
};

export const searchStarships = async (searchTerm: string, page = 1) => {
  const response = await serviceFetch<StarshipResponseInfo>({
    method: "GET",
    endpoint: `starships/?search=${searchTerm}&page=${page}`,
  });
  return {
    ...response,
    page,
  };
};
