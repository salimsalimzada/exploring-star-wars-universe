import { InfoRow } from "@components/shared/info-row";
import { Vehicle } from "@custom-types/vehicle";
import Button from "@ui/button";
import Card from "@ui/card";
import { extractIdFromUrl } from "@utils/url";
import { NavLink } from "react-router";

type VehicleCardProps = {
  vehicleData: Vehicle;
};
export const VehicleCard = ({ vehicleData }: VehicleCardProps) => {
  const {
    url,
    name,
    model,
    passengers,
    consumables,
    vehicle_class: vehicleClass,
    cost_in_credits: costInCredits,
    max_atmosphering_speed: maxAtmospheringSpeed,
  } = vehicleData;

  const FILM_INFO = [
    { label: "Model", value: model },
    { label: "Passengers", value: passengers },
    { label: "Consumables", value: consumables },
    { label: "Vehicle Class", value: vehicleClass },
    { label: "Cost In Credits", value: costInCredits },
    { label: "Max Atmosfering Speed", value: maxAtmospheringSpeed },
  ];
  return (
    <Card
      className="border-1 border-gray-500 shadow-sm"
      title={
        <div className="flex justify-between w-full flex-wrap items-baseline">
          <h5 className={`text-xl font-bold`}>{name}</h5>
        </div>
      }
      footer={
        <div className="flex justify-center">
          <NavLink to={`${extractIdFromUrl(url)}`}>
            <Button variant="outlined">View More</Button>
          </NavLink>
        </div>
      }
    >
      <div className="p-4 space-y-3">
        <InfoRow data={FILM_INFO} />
      </div>
    </Card>
  );
};
