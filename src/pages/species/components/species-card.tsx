import { InfoRow } from "@components/shared/info-row";
import { Species } from "@custom-types/species";
import Button from "@ui/button";
import Card from "@ui/card";
import { extractIdFromUrl } from "@utils/common";
import { NavLink } from "react-router";

type SpeciesCardProps = {
  speciesData: Species;
};
export const SpeciesCard = ({ speciesData }: SpeciesCardProps) => {
  const {
    url,
    name,
    classification,
    designation,
    language,
    average_lifespan: averageLifespan,
  } = speciesData ?? {};

  const SPECIES_INFO = [
    { label: "Name", value: name },
    { label: "Classification", value: classification },
    { label: "Designation", value: designation },
    { label: "Language", value: language },
    { label: "Average Life-span", value: averageLifespan },
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
        <div className="space-y-2">
          {SPECIES_INFO.map((film, index) => (
            <InfoRow key={`my-extra-unique-id-${index}`} label={film.label} value={film.value} />
          ))}
        </div>
      </div>
    </Card>
  );
};
