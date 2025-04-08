import { InfoRow } from "@components/shared/info-row";
import { LinkListItem } from "@components/shared/link-list-item";
import { getPlanetById } from "@services/planet-service";
import { useQuery } from "@tanstack/react-query";
import Button from "@ui/button";
import Card from "@ui/card";
import Skeleton from "@ui/skeleton";
import { useNavigate, useParams } from "react-router";

function PlanetDetailsCard() {
  const { id = "" } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["film", id],
    queryFn: () => getPlanetById(id),
    enabled: !!id,
  });

  const navigate = useNavigate();

  const {
    created,
    url,
    name,
    climate,
    terrain,
    population,
    gravity,
    diameter,
    surface_water: surfaceWater,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    residents = [],
    films = [],
  } = data ?? {};

  const FILM_DETAILS_INFO = [
    { label: "Name", value: name },
    { label: "Climate", value: climate },
    { label: "Terrain", value: terrain },
    { label: "Population", value: population },
    { label: "Gravity", value: gravity },
    { label: "Diameter", value: diameter },
    { label: "Surface Water", value: `${surfaceWater}%` },
    {
      label: "Rotation Period",
      value: `${rotationPeriod} ${Number(rotationPeriod) > 1 ? "hours" : "hour"}`,
    },
    {
      label: "Orbital Period",
      value: `${orbitalPeriod} ${Number(orbitalPeriod) > 1 ? "hours" : "hour"}`,
    },
  ];
  return (
    <div className="p-4 flex justify-center items-center">
      <Skeleton loading={isPending} active className="w-full max-w-3xl" rows={18}>
        <Card
          title={
            <div className="text-lg font-roboto-mono flex justify-between items-center w-full">
              <Button variant="text" onClick={() => navigate("/planets")}>
                Back
              </Button>
              <p>Planet Details: {name}</p>
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
                <InfoRow data={FILM_DETAILS_INFO} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold">Known Residents</h3>
                  <LinkListItem data={residents?.slice(0, 5)} basePath="people" label="Resident" />
                </div>
                <div>
                  <h3 className="font-bold">Featured In Films</h3>
                  <LinkListItem data={films?.slice(0, 6)} basePath="films" label="Film" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Skeleton>
    </div>
  );
}

export default PlanetDetailsCard;
