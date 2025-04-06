import { NavLink } from "react-router";

const MENU_LIST = [
  { path: "/films", text: "Films" },
  { path: "/people", text: "People" },
  { path: "/starships", text: "Starships" },
  { path: "/planets", text: "Planets" },
  { path: "/vehicles", text: "Vehicles" },
  { path: "/species", text: "Species" },
];

function PageHeader() {
  return (
    <header className="text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-lilita text-orange">STAR WARS</h3>

        <nav className="space-x-6">
          {MENU_LIST.map((item) => (
            <NavLink
              key={item.path}
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
