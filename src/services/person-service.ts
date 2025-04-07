import { PeopleResponseInfo, Person } from "@custom-types/person";
import { serviceFetch } from "@utils/serviceFetch";

export const getPeople = async () => {
  const response = await serviceFetch<PeopleResponseInfo>({
    method: "GET",
    endpoint: "people",
  });
  return response.results;
};

export const getPersonById = async (id: string) => {
  return await serviceFetch<Person>({
    method: "GET",
    endpoint: `people/${id}`,
  });
};

export const searchPeopleByName = async (name: string) => {
  const response = await serviceFetch<PeopleResponseInfo>({
    method: "GET",
    endpoint: `people/?search=${name}`,
  });
  return response.results;
};
