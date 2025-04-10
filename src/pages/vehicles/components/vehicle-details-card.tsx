import { InfoRow } from "@components/shared/info-row";
import { LinkListItem } from "@components/shared/link-list-item";
import { getVehicleById } from "@services/vehicle-service";
import { useQuery } from "@tanstack/react-query";
import Button from "@ui/button";
import Card from "@ui/card";
import Skeleton from "@ui/skeleton";
import { useNavigate, useParams } from "react-router";

function VehicleDetailsCard() {
  const { id = "" } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["starship", id],
    queryFn: () => getVehicleById(id),
    enabled: !!id,
  });

  const navigate = useNavigate();

  const {
    name,
    created,
    url,
    model,
    manufacturer,
    length,
    cargo_capacity: cargoCapacity,
    max_atmosphering_speed: maxAtmospheringSpeed,
    cost_in_credits: costInCredits,
    consumables,
    films = [],
    pilots = [],
  } = data ?? {};
  const VEHICLE_DETAILS_INFO = [
    { label: "Name", value: name },
    { label: "Model", value: model },
    { label: "Manufacturer", value: manufacturer },
    { label: "Length", value: length },
    { label: "Max Atmosphering Speed", value: maxAtmospheringSpeed },
    { label: "Cost In Credits", value: costInCredits },
    { label: "Consumables", value: consumables },
    { label: "Cargo Capacity", value: cargoCapacity },
  ];
  return (
    <div className="p-4 flex justify-center items-center">
      <Skeleton loading={isPending} active className="w-full max-w-3xl" rows={18}>
        <Card
          title={
            <div className="text-lg font-roboto-mono flex justify-between items-center w-full">
              <Button variant="text" onClick={() => navigate("/vehicles")}>
                Back
              </Button>
              <p>Vehicle Details: {name}</p>
            </div>
          }
          className="font-roboto-mono text-sm max-w-4xl"
          footer={
            <div className="mt-2 pt-2 border-t border-gray-300 text-xs text-gray-700 space-y-1 text-center">
              <div>Created At: {created}</div>
              <div>API URL: {url}</div>
            </div>
          }
        >
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Basic Info</h3>
                <InfoRow data={VEHICLE_DETAILS_INFO} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-bold">Films</h3>
                  <LinkListItem data={films?.slice(0, 7)} basePath="films" label="Film" />
                </div>
                <div>
                  <h3 className="font-bold">Pilots</h3>
                  <LinkListItem data={pilots?.slice(0, 5)} basePath="people" label="Vehicle" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Skeleton>
    </div>
  );
}

export default VehicleDetailsCard;
