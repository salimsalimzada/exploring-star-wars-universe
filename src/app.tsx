import AppLayout from "@pages/layout";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

const Films = lazy(() => import("@pages/films/page"));
const People = lazy(() => import("@pages/people/page"));
const Planets = lazy(() => import("@pages/planets/page"));
const Species = lazy(() => import("@pages/species/page"));
const Starships = lazy(() => import("@pages/starships/page"));
const Vehicles = lazy(() => import("@pages/vehicles/page"));
const NotFound = lazy(() => import("@components/shared/not-found"));
const FilmDetailsCard = lazy(() => import("@pages/films/components/film-details-card"));
const PersonDetailsCard = lazy(() => import("@pages/people/components/person-details-card"));
const StarshipDetailsCard = lazy(() => import("@pages/starships/components/starship-details-card"));
const PlanetDetailsCard = lazy(() => import("@pages/planets/components/planet-details-card"));
const VehicletailsCard = lazy(() => import("@pages/vehicles/components/vehicle-details-card"));
const SpeciesDetailsCard = lazy(() => import("@pages/species/components/species-details-card"));

function App() {
  return (
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
        <Route path="people/:id" element={<PersonDetailsCard />} />
        <Route path="starships/:id" element={<StarshipDetailsCard />} />
        <Route path="planets/:id" element={<PlanetDetailsCard />} />
        <Route path="vehicles/:id" element={<VehicletailsCard />} />
        <Route path="species/:id" element={<SpeciesDetailsCard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
