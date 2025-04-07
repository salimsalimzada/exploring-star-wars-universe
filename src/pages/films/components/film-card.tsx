import { Film } from "@custom-types/film";
import Button from "@ui/button";
import Card from "@ui/card";
import { extractIdFromUrl, getElapsedTime } from "@utils/common";
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
  return (
    <Card
      className="border-1 border-gray-500 shadow-sm"
      title={
        <div className="flex justify-between w-full flex-wrap items-baseline">
          <h5 className={`text-xl fon{t-bold ${title.length > 10 ? "truncate" : ""}`}>{title}</h5>
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
        <div className="space-y-2">
          <p>
            <span className="font-bold">Episode:</span> {episodeId}
          </p>
          <p>
            <span className="font-bold">Director:</span> {director}
          </p>
          <p>
            <span className="font-bold">Producers:</span>
            {producer}
          </p>
          <p>
            <span className="font-bold">Release Date:</span> {releaseDate}
          </p>
        </div>
      </div>
    </Card>
  );
};
