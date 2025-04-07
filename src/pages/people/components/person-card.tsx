import { InfoRow } from "@components/shared/info-row";
import { Person } from "@custom-types/person";
import Button from "@ui/button";
import Card from "@ui/card";
import { extractIdFromUrl } from "@utils/common";
import { NavLink } from "react-router";

type PersonCardProps = {
  personData: Person;
};
export const PersonCard = ({ personData }: PersonCardProps) => {
  const { name, url, height, mass, gender, birth_year: birthYear, films } = personData ?? {};

  const PERSON_INFO = [
    { label: "Height", value: height },
    { label: "Mass", value: mass },
    { label: "Gender", value: gender },
    { label: "Birth year", value: birthYear },
    { label: "Films", value: films.length },
  ];
  return (
    <Card
      className="border-1 border-gray-500 shadow-sm"
      title={
        <div className="flex justify-between w-full flex-wrap items-baseline">
          <h5 className="text-xl font-bold">{name}</h5>
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
          {PERSON_INFO.map((person, index) => (
            <InfoRow
              key={`my-extra-unique-id-${index}`}
              label={person.label}
              value={person.value}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
