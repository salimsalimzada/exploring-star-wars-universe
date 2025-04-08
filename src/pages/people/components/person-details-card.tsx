import { InfoRow } from "@components/shared/info-row";
import { LinkListItem } from "@components/shared/link-list-item";
import { getPersonById } from "@services/person-service";
import { useQuery } from "@tanstack/react-query";
import Button from "@ui/button";
import Card from "@ui/card";
import Skeleton from "@ui/skeleton";
import { extractIdFromUrl } from "@utils/url";
import { NavLink, useNavigate, useParams } from "react-router";

function PersonDetailsCard() {
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
      value: homeworld && (
        <NavLink
          to={`/films/${extractIdFromUrl(homeworld)}`}
          className="text-blue-600 underline hover:text-blue-800"
        >
          Planets-{extractIdFromUrl(homeworld)}
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
                <InfoRow data={PERSON_DETAILS_INFO} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-bold">Films</h3>
                  <LinkListItem data={films?.slice(0, 7)} basePath="films" label="Film" />
                </div>
                <div>
                  <h3 className="font-bold">Vehicles</h3>
                  <LinkListItem data={vehicles?.slice(0, 5)} basePath="vehicles" label="Vehicle" />
                </div>
                <div>
                  <h3 className="font-bold">Starships</h3>
                  <LinkListItem
                    data={starships?.slice(0, 6)}
                    basePath="starships"
                    label="Starships"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Skeleton>
    </div>
  );
}

export default PersonDetailsCard;
