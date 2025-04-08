import { Vehicle, VehicleResponseInfo } from "@custom-types/vehicle";
import { serviceFetch } from "@utils/service-fetch";

export const getVehicles = async (page = 1) => {
  const response = await serviceFetch<VehicleResponseInfo>({
    method: "GET",
    endpoint: `vehicles/?page=${page}`,
  });
  return {
    ...response,
    page: page,
  };
};

export const getVehicleById = async (id: string) => {
  return await serviceFetch<Vehicle>({
    method: "GET",
    endpoint: `vehicles/${id}`,
  });
};

export const searchVehicles = async (searchTerm: string, page = 1) => {
  const response = await serviceFetch<VehicleResponseInfo>({
    method: "GET",
    endpoint: `vehicles/?search=${searchTerm}&page=${page}`,
  });
  return {
    ...response,
    page: page,
  };
};
