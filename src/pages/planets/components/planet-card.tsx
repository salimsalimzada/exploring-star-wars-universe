import { InfoRow } from "@components/shared/info-row";
import { Planet } from "@custom-types/planet";
import Button from "@ui/button";
import Card from "@ui/card";
import { extractIdFromUrl } from "@utils/common";
import { NavLink } from "react-router";

type PlanetCardProps = {
  planetData: Planet;
};
export const PlanetCard = ({ planetData }: PlanetCardProps) => {
  const {
    url,
    name,
    climate,
    population,
    terrain,
    gravity,
    diameter,
    surface_water: surfaceWater,
  } = planetData;

  const FILM_INFO = [
    { label: "Climate", value: climate },
    { label: "Terrain", value: terrain },
    { label: "Population", value: population },
    { label: "Gravity", value: gravity },
    { label: "Diameter", value: diameter },
    { label: "Surface Water", value: surfaceWater },
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
