import { Species, SpeciesResponseInfo } from "@custom-types/species";
import { serviceFetch } from "@utils/serviceFetch";

export const getSpecies = async () => {
  const response = await serviceFetch<SpeciesResponseInfo>({
    method: "GET",
    endpoint: "species",
  });
  return response.results;
};

export const getSpeciesById = async (id: string) => {
  return await serviceFetch<Species>({
    method: "GET",
    endpoint: `species/${id}`,
  });
};

export const searchSpecies = async (searchTerm: string) => {
  const response = await serviceFetch<SpeciesResponseInfo>({
    method: "GET",
    endpoint: `species/?search=${searchTerm}`,
  });
  return response.results;
};
