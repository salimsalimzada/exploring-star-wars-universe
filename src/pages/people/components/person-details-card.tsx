import { InfoRow } from "@components/shared/info-row";
import { getPersonById } from "@services/person-service";
import { useQuery } from "@tanstack/react-query";
import Button from "@ui/button";
import Card from "@ui/card";
import Skeleton from "@ui/skeleton";
import { extractIdFromUrl } from "@utils/common";
import { NavLink, useNavigate, useParams } from "react-router";

function PersonDetails() {
  const { id = "" } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["film", id],
    queryFn: () => getPersonById(id),
    enabled: !!id,
  });

  const navigate = useNavigate();

  const {
    name,
    created,
    url,
    height,
    mass,
    gender,
    birth_year: birthYear,
    eye_color: eyeColor,
    skin_color: skinColor,
    hair_color: hairColor,
    films = [],
    vehicles = [],
    starships = [],
    homeworld = "",
  } = data ?? {};
  const PERSON_DETAILS_INFO = [
    { label: "Height", value: height },
    { label: "Mass", value: mass },
    { label: "Gender", value: gender },
    { label: "Birth year", value: birthYear },
    { label: "Eye color", value: eyeColor },
    { label: "Skin color", value: skinColor },
    { label: "Hair color", value: hairColor },
    {
      label: "Homeworld",
      value: (
        <NavLink to={`/films/${extractIdFromUrl(homeworld)}`} className="underline">
          Planets {extractIdFromUrl(homeworld)}
        </NavLink>
      ),
    },
  ];
  return (
    <div className="p-4 flex justify-center items-center">
      <Skeleton loading={isPending} active className="w-full max-w-3xl" rows={18}>
        <Card
          title={
            <div className="text-lg font-roboto-mono flex justify-between items-center w-full">
              <Button variant="text" onClick={() => navigate("/people")}>
                Back
              </Button>
              <p>Person Details: {name}</p>
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
                <ul className="space-y-1">
                  {PERSON_DETAILS_INFO.map((detail, index) => (
                    <InfoRow
                      key={`randomized-id-${index}`}
                      label={detail.label}
                      value={detail.value ?? ""}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {films.length > 0 && (
                  <div>
                    <h3 className="font-bold">Films</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {films?.slice(0, 7)?.map((filmUrl, index) => (
                        <li key={`randomized-id-${index}`}>
                          <NavLink to={`/films/${extractIdFromUrl(filmUrl)}`}>
                            Film {index + 1}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {vehicles.length > 0 && (
                  <div>
                    <h3 className="font-bold">Planets</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {vehicles?.slice(0, 5).map((vehicleUrl, index) => (
                        <li key={`randomized-id-${index}`}>
                          <NavLink to={`/vehicles/${extractIdFromUrl(vehicleUrl)}`}>
                            Vehicle {index + 1}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {starships.length > 0 && (
                  <div>
                    <h3 className="font-bold">Species</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {starships?.slice(0, 6).map((starshipUrl, index) => (
                        <li key={`randomized-id-${index}`}>
                          <NavLink to={`/starships/${extractIdFromUrl(starshipUrl)}`}>
                            Starships {index + 1}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </Skeleton>
    </div>
  );
}

export default PersonDetails;
