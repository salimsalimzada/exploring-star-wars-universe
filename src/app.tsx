import AppLayout from "@pages/layout";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";

const Films = lazy(() => import("@pages/films/page"));
const People = lazy(() => import("@pages/people/page"));
const Planets = lazy(() => import("@pages/planets/page"));
const Species = lazy(() => import("@pages/species/page"));
const Starships = lazy(() => import("@pages/starships/page"));
const Vehicles = lazy(() => import("@pages/vehicles/page"));
const NotFound = lazy(() => import("@components/shared/not-found"));
const FilmDetailsCard = lazy(() => import("@pages/films/components/film-details-card"));

function App() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/films" replace />} />
          <Route path="films" element={<Films />} />
          <Route path="people" element={<People />} />
          <Route path="planets" element={<Planets />} />
          <Route path="species" element={<Species />} />
          <Route path="starships" element={<Starships />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="films/:id" element={<FilmDetailsCard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
