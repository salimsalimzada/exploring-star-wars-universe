import { Planet, PlanetResponseInfo } from "@custom-types/planet";
import { serviceFetch } from "@utils/serviceFetch";

export const getPlanets = async (page = 1) => {
  const response = await serviceFetch<PlanetResponseInfo>({
    method: "GET",
    endpoint: `planets/?page=${page}`,
  });
  return {
    ...response,
    page: page,
  };
};

export const getPlanetById = async (id: string) => {
  return await serviceFetch<Planet>({
    method: "GET",
    endpoint: `planets/${id}`,
  });
};

export const searchPlanets = async (searchTerm: string, page = 1) => {
  const response = await serviceFetch<PlanetResponseInfo>({
    method: "GET",
    endpoint: `planets/?search=${searchTerm}&page=${page}`,
  });
  return {
    ...response,
    page: page,
  };
};
