import { Vehicle, VehicleResponseInfo } from "@custom-types/vehicle";
import { serviceFetch } from "@utils/serviceFetch";

export const getVehicles = async () => {
  const response = await serviceFetch<VehicleResponseInfo>({
    method: "GET",
    endpoint: "vehicles",
  });
  return response.results;
};

export const getVehicleById = async (id: string) => {
  return await serviceFetch<Vehicle>({
    method: "GET",
    endpoint: `vehicles/${id}`,
  });
};

export const searchVehicles = async (searchTerm: string) => {
  const response = await serviceFetch<VehicleResponseInfo>({
    method: "GET",
    endpoint: `vehicles/?search=${searchTerm}`,
  });
  return response.results;
};
