import NoResults from "@components/shared/no-results";
import { useQuery } from "@tanstack/react-query";
import Input from "@ui/input";
import Skeleton from "@ui/skeleton";
import { debounce } from "@utils/common";
import { useState } from "react";
import { PlanetCard } from "./components/planet-card";
import { getPlanets, searchPlanets } from "@services/planet-service";

function Planets() {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = debounce(setSearchTerm, 500);

  const { data, isPending } = useQuery({
    queryKey: ["planets", searchTerm],
    queryFn: () => (searchTerm ? searchPlanets(searchTerm) : getPlanets()),
  });
  return (
    <div className="space-y-6">
      <Input
        placeholder="Type a planet name"
        onChange={(e) => debouncedSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isPending &&
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton loading active rows={12} key={index} />
          ))}

        {data &&
          data.map((planet, index) => (
            <PlanetCard key={`my-secret-unique-id-${index}`} planetData={planet} />
          ))}
        {data && data.length === 0 && <NoResults />}
      </div>
    </div>
  );
}

export default Planets;
