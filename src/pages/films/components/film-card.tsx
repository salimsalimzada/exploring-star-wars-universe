import { InfoRow } from "@components/shared/info-row";
import { Film } from "@custom-types/film";
import Button from "@ui/button";
import Card from "@ui/card";
import { getElapsedTime } from "@utils/date";
import { extractIdFromUrl } from "@utils/url";
import { NavLink } from "react-router";

type FilmCardProps = {
  filmData: Film;
};
export const FilmCard = ({ filmData }: FilmCardProps) => {
  const {
    title,
    release_date: releaseDate,
    episode_id: episodeId,
    director,
    producer,
    url,
  } = filmData;

  const FILM_INFO = [
    { label: "Episode", value: episodeId },
    { label: "Director", value: director },
    { label: "Producers", value: producer },
    { label: "Release Date", value: releaseDate },
  ];
  return (
    <Card
      className="border-1 border-gray-500 shadow-sm"
      title={
        <div className="flex justify-between w-full flex-wrap items-baseline">
          <h5 className={`text-xl font-bold { ${title.length > 10 ? "truncate" : ""}`}>{title}</h5>
          <p className="text-md">{getElapsedTime(releaseDate)}</p>
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
