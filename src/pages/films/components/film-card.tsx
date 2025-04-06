import Button from "@ui/button";
import Card from "@ui/card";
import Skeleton from "@ui/skeleton";
import { NavLink } from "react-router";

export const FilmCard = () => {
  return (
    <Skeleton>
      <Card
        className="border-1 border-gray-500 shadow-sm"
        title={
          <div className="flex justify-between w-full flex-wrap items-center">
            <h5 className={`text-xl font-bold ${"A New Hope".length > 10 ? "truncate" : ""}`}>
              A New Hope
            </h5>
            <p className="text-sm">47 years ago</p>
          </div>
        }
        footer={
          <div className="flex justify-center">
            <NavLink to="1">
              <Button variant="outlined">View More</Button>
            </NavLink>
          </div>
        }
      >
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <p>
              <span className="font-bold">Episode:</span> 4
            </p>
            <p>
              <span className="font-bold">Director:</span> George Lucas
            </p>
            <p>
              <span className="font-bold">Producers:</span> Gary Kurtz, Rick McCallum
            </p>
            <p>
              <span className="font-bold">Release Date:</span> May 25, 1977
            </p>
          </div>
        </div>
      </Card>
    </Skeleton>
  );
};
