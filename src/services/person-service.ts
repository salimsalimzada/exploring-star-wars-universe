import { PeopleResponseInfo, Person } from "@custom-types/person";
import { serviceFetch } from "@utils/service-fetch";

export const getPeople = async (page = 1) => {
  const response = await serviceFetch<PeopleResponseInfo>({
    method: "GET",
    endpoint: `people/?page=${page}`,
  });
  return {
    ...response,
    page: page,
  };
};

export const getPersonById = async (id: string) => {
  return await serviceFetch<Person>({
    method: "GET",
    endpoint: `people/${id}`,
  });
};

export const searchPeopleByName = async (name: string, page = 1) => {
  const response = await serviceFetch<PeopleResponseInfo>({
    method: "GET",
    endpoint: `people/?search=${name}&page=${page}`,
  });
  return {
    ...response,
    page: page,
  };
};
