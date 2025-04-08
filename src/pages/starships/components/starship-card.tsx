import { InfoRow } from "@components/shared/info-row";
import { Starship } from "@custom-types/starship";
import Button from "@ui/button";
import Card from "@ui/card";
import { extractIdFromUrl } from "@utils/url";
import { NavLink } from "react-router";

type StarshipCardProps = {
  starshipData: Starship;
};
export const StarshipCard = ({ starshipData }: StarshipCardProps) => {
  const {
    url,
    name,
    model,
    manufacturer,
    passengers,
    crew,
    max_atmosphering_speed: maxAtmospheringSpeed,
  } = starshipData;

  const FILM_INFO = [
    { label: "Model", value: model },
    { label: "Manufacturer", value: manufacturer },
    { label: "Passengers", value: passengers },
    { label: "Crew", value: crew },
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
      <div className="p-4 space-y-2">
        <InfoRow data={FILM_INFO} />
      </div>
    </Card>
  );
};
