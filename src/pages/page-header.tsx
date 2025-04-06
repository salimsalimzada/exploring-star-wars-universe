import { NavLink } from "react-router";

const MENU_LIST = [
  { path: "/films", text: "Films", id: 1 },
  { path: "/people", text: "People", id: 2 },
  { path: "/starships", text: "Starships", id: 3 },
  { path: "/planets", text: "Planets", id: 4 },
  { path: "/vehicles", text: "Vehicles", id: 5 },
  { path: "/species", text: "Species", id: 6 },
];

function PageHeader() {
  return (
    <header className="text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-lilita text-orange">STAR WARS</h3>

        <nav className="space-x-6">
          {MENU_LIST.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `font-roboto-mono text-black ${isActive ? "text-greeny" : "hover:text-greeny"}`
              }
            >
              {item.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default PageHeader;
