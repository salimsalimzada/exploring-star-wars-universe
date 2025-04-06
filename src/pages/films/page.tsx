import { Suspense } from "react";
import { FilmCard } from "./components/film-card";
import Input from "@ui/input";

function Films() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <div className="space-y-6">
        <Input placeholder="Type a film name..." />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </div>
      </div>
    </Suspense>
  );
}

export default Films;
