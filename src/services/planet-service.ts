import { Planet, PlanetResponseInfo } from "@custom-types/planet";
import { serviceFetch } from "@utils/serviceFetch";

export const getPlanets = async () => {
  const response = await serviceFetch<PlanetResponseInfo>({
    method: "GET",
    endpoint: "planets",
  });
  return response.results;
};

export const getPlanetById = async (id: string) => {
  return await serviceFetch<Planet>({
    method: "GET",
    endpoint: `planets/${id}`,
  });
};

export const searchPlanets = async (searchTerm: string) => {
  const response = await serviceFetch<PlanetResponseInfo>({
    method: "GET",
    endpoint: `planets/?search=${searchTerm}`,
  });
  return response.results;
};
