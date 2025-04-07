import { Starship, StarshipResponseInfo } from "@custom-types/starship";
import { serviceFetch } from "@utils/serviceFetch";

export const getStarships = async () => {
  const response = await serviceFetch<StarshipResponseInfo>({
    method: "GET",
    endpoint: "starships",
  });
  return response.results;
};

export const getStarshipById = async (id: string) => {
  return await serviceFetch<Starship>({
    method: "GET",
    endpoint: `starships/${id}`,
  });
};

export const searchStarships = async (searchTerm: string) => {
  const response = await serviceFetch<StarshipResponseInfo>({
    method: "GET",
    endpoint: `starships/?search=${searchTerm}`,
  });
  return response.results;
};
