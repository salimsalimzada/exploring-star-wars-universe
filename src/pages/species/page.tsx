import NoResults from "@components/shared/no-results";
import { useInfiniteQuery } from "@tanstack/react-query";
import Input from "@ui/input";
import { debounce } from "@utils/common";
import { useEffect, useMemo, useState } from "react";
import { SpeciesCard } from "./components/species-card";
import { getSpecies, searchSpecies } from "@services/species-service";
import { useInView } from "react-intersection-observer";
import { LoadingIndicator } from "@components/shared/loading-indicator";
import { Status } from "@custom-types/common";

function Species() {
  const [searchTerm, setSearchTerm] = useState("");

  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  const debouncedSearchTerm = debounce(setSearchTerm, 500);

  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["planets", searchTerm],
    queryFn: ({ pageParam = 1 }) =>
      searchTerm ? searchSpecies(searchTerm, pageParam) : getSpecies(pageParam),
    getNextPageParam: (lastPage) => (lastPage.next ? lastPage.page + 1 : null),
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allSpecies = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) || [];
  }, [data]);

  const isPending = status === Status.Pending;
  const isError = status === Status.Error;
  return (
    <div className="space-y-6">
      <Input
        placeholder="Type a planet name"
        onChange={(e) => debouncedSearchTerm(e.target.value)}
      />
      {isError && <div className="text-red-600">Error: {error.message}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {allSpecies.map((species, index) => (
          <SpeciesCard key={`my-secret-unique-id-${index}`} speciesData={species} />
        ))}
        {!isPending && allSpecies.length === 0 && <NoResults />}
      </div>
      <div ref={ref} className="py-4 text-center">
        <LoadingIndicator loading={isFetchingNextPage} />
      </div>
    </div>
  );
}

export default Species;
