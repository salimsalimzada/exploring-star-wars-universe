import { Film, FilmResponseInfo } from "@custom-types/film";
import { serviceFetch } from "@utils/service-fetch";

export const getAllFilms = async () => {
  const response = await serviceFetch<FilmResponseInfo>({
    method: "GET",
    endpoint: "films",
  });
  return response.results;
};

export const getFilmById = async (id: string) => {
  return await serviceFetch<Film>({
    method: "GET",
    endpoint: `films/${id}`,
  });
};

export const searchFilmsByName = async (name: string) => {
  const response = await serviceFetch<FilmResponseInfo>({
    method: "GET",
    endpoint: `films/?search=${name}`,
  });
  return response.results;
};
