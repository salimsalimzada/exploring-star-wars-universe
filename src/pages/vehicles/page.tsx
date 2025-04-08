import NoResults from "@components/shared/no-results";
import { useInfiniteQuery } from "@tanstack/react-query";
import Input from "@ui/input";
import Skeleton from "@ui/skeleton";
import { debounce } from "@utils/common";
import { useEffect, useMemo, useState } from "react";
import { VehicleCard } from "./components/vehicle-card";
import { getVehicles, searchVehicles } from "@services/vehicle-service";
import { useInView } from "react-intersection-observer";
import { LoadingIndicator } from "@components/shared/loading-indicator";
import { Status } from "@custom-types/common";

function Vehicles() {
  const [searchTerm, setSearchTerm] = useState("");

  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  const debouncedSearchTerm = debounce(setSearchTerm, 500);

  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["vehicles", searchTerm],
    queryFn: ({ pageParam = 1 }) =>
      searchTerm ? searchVehicles(searchTerm, pageParam) : getVehicles(pageParam),
    getNextPageParam: (lastPage) => (lastPage.next ? lastPage.page + 1 : null),
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allVehicles = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) || [];
  }, [data]);

  const isPending = status === Status.Pending;
  const isError = status === Status.Error;
  return (
    <div className="space-y-6">
      <Input
        placeholder="Type a vehicles model or name"
        onChange={(e) => debouncedSearchTerm(e.target.value)}
      />
      {isError && <div className="text-red-600">Error: {error.message}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isPending &&
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton loading active rows={12} key={index} />
          ))}

        {allVehicles.map((vehicle, index) => (
          <VehicleCard key={`my-secret-unique-id-${index}`} vehicleData={vehicle} />
        ))}
        {!isPending && allVehicles.length === 0 && <NoResults />}
      </div>
      <div ref={ref} className="py-4 text-center">
        <LoadingIndicator loading={isFetchingNextPage} />
      </div>
    </div>
  );
}

export default Vehicles;
