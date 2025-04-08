import { useState } from "react";
import { FilmCard } from "./components/film-card";
import Input from "@ui/input";
import { getAllFilms, searchFilmsByName } from "@services/film-service";
import { useQuery } from "@tanstack/react-query";
import NoResults from "@components/shared/no-results";
import { debounce } from "@utils/debounce";
import { LoadingIndicator } from "@components/shared/loading-indicator";

function Films() {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = debounce(setSearchTerm, 500);

  const { data, isPending } = useQuery({
    queryKey: ["films", searchTerm],
    queryFn: () => (searchTerm ? searchFilmsByName(searchTerm) : getAllFilms()),
  });

  return (
    <div className="space-y-6">
      <Input placeholder="Type a film name" onChange={(e) => debouncedSearchTerm(e.target.value)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        <LoadingIndicator loading={isPending} />
        {data && data.map((film) => <FilmCard key={film.episode_id} filmData={film} />)}
        {data && data.length === 0 && <NoResults />}
      </div>
    </div>
  );
}

export default Films;
