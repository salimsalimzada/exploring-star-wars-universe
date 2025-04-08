import { InfoRow } from "@components/shared/info-row";
import { LinkListItem } from "@components/shared/link-list-item";
import { getSpeciesById } from "@services/species-service";
import { useQuery } from "@tanstack/react-query";
import Button from "@ui/button";
import Card from "@ui/card";
import Skeleton from "@ui/skeleton";
import { useNavigate, useParams } from "react-router";

function SpeciesDetailsCard() {
  const { id = "" } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["film", id],
    queryFn: () => getSpeciesById(id),
    enabled: !!id,
  });

  const navigate = useNavigate();

  const {
    created,
    url,
    name,
    classification,
    designation,
    average_lifespan: averageLifespan,
    eye_colors: eyeColors,
    hair_colors: hairColors,
    language,
    people = [],
    films = [],
  } = data ?? {};

  const FILM_DETAILS_INFO = [
    { label: "Name", value: name },
    { label: "Classification", value: classification },
    { label: "Designation", value: designation },
    { label: "Average Lifespan", value: averageLifespan },
    { label: "Language", value: language },
    { label: "Eye Colors", value: eyeColors },
    { label: "Hair Colors", value: hairColors },
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
                  <LinkListItem data={people?.slice(0, 5)} basePath="people" label="Resident" />
                </div>
                <div>
                  <h3 className="font-bold">Featured In Films</h3>
                  <LinkListItem data={films?.slice(0, 6)} basePath="films" label="Starships" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Skeleton>
    </div>
  );
}

export default SpeciesDetailsCard;
