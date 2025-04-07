import { InfoRow } from "@components/shared/info-row";
import { getFilmById } from "@services/film-service";
import { useQuery } from "@tanstack/react-query";
import Button from "@ui/button";
import Card from "@ui/card";
import Skeleton from "@ui/skeleton";
import { extractIdFromUrl } from "@utils/common";
import { NavLink, useNavigate, useParams } from "react-router";

function FilmDetailsCard() {
  const { id = "" } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["film", id],
    queryFn: () => getFilmById(id),
    enabled: !!id,
  });

  const navigate = useNavigate();

  const {
    title,
    director,
    producer,
    release_date: releaseDate,
    opening_crawl: openingCrawl,
    created,
    url,
    characters,
    planets,
    starships,
    episode_id: episodeId,
  } = data ?? {};

  const FILM_DETAILS_INFO = [
    { label: "Title", value: title },
    { label: "Episode", value: episodeId },
    { label: "Director", value: director },
    { label: "Producer", value: producer },
    { label: "Release Date", value: releaseDate },
  ];
  return (
    <div className="p-4 flex justify-center items-center">
      <Skeleton loading={isPending} active className="w-full max-w-3xl" rows={18}>
        <Card
          title={
            <div className="text-lg font-roboto-mono flex justify-between items-center w-full">
              <Button variant="text" onClick={() => navigate("/films")}>
                Back
              </Button>
              <p>Film Details: {title}</p>
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
                  {FILM_DETAILS_INFO.map((detail, index) => (
                    <InfoRow
                      key={`my-unique-key-${index}`}
                      label={detail.label}
                      value={detail.value}
                    />
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-bold">Characters</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {characters?.slice(0, 7)?.map((characterUrl, index) => (
                      <li className="list-none">
                        -{" "}
                        <NavLink
                          to={`/people/${extractIdFromUrl(characterUrl)}`}
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Character {index + 1}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Planets</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {planets?.slice(0, 5).map((planetUrl, index) => (
                      <li className="list-none">
                        -{" "}
                        <NavLink
                          to={`/planets/${extractIdFromUrl(planetUrl)}`}
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Planet {index + 1}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">Species</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {starships?.slice(0, 6).map((starshipUrl, index) => (
                      <li className="list-none">
                        -{" "}
                        <NavLink
                          to={`/starships/${extractIdFromUrl(starshipUrl)}`}
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Starships {index + 1}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Opening Crawl</h3>
                <p className="whitespace-pre-wrap">{openingCrawl}</p>
              </div>
            </div>
          </div>
        </Card>
      </Skeleton>
    </div>
  );
}

export default FilmDetailsCard;
