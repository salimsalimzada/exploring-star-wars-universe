import { Species, SpeciesResponseInfo } from "@custom-types/species";
import { serviceFetch } from "@utils/serviceFetch";

export const getSpecies = async (page = 1) => {
  const response = await serviceFetch<SpeciesResponseInfo>({
    method: "GET",
    endpoint: `species/?page=${page}`,
  });
  return {
    ...response,
    page,
  };
};

export const getSpeciesById = async (id: string) => {
  return await serviceFetch<Species>({
    method: "GET",
    endpoint: `species/${id}`,
  });
};

export const searchSpecies = async (searchTerm: string, page = 1) => {
  const response = await serviceFetch<SpeciesResponseInfo>({
    method: "GET",
    endpoint: `species/?search=${searchTerm}&page=${page}`,
  });
  return {
    ...response,
    page,
  };
};
