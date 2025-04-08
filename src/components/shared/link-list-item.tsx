import { extractIdFromUrl } from "@utils/url";
import { NavLink } from "react-router";

type LinkListItemProps = {
  data?: string[];
  basePath: string;
  label: string;
};

export const LinkListItem = ({ basePath, label, data }: LinkListItemProps) => {
  if (!data || data.length === 0) {
    return <h3 className="text-gray-500 mt-2.5">No {label.toLowerCase()} found</h3>;
  }

  return (
    <ul className="list-none space-y-1">
      {data.map((url, index) => (
        <li key={`my-secret-unique-id-${index}`}>
          -{" "}
          <NavLink
            to={`/${basePath}/${extractIdFromUrl(url)}`}
            className="text-blue-600 underline hover:text-blue-800"
          >
            {label} {index + 1}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
