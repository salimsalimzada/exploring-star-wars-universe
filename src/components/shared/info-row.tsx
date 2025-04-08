import { ReactNode } from "react";
import { Primitive } from "@custom-types/common";

type InfoRowItem = {
  label: string;
  value: Primitive | ReactNode;
};

type InfoRowProps =
  | { data: InfoRowItem[] }
  | { label: string; value: Primitive | ReactNode; data?: never };

export const InfoRow = (props: InfoRowProps) => {
  if (props.data) {
    return (
      <ul className="space-y-2">
        {props.data.map((item, index) => (
          <li key={`my-extra-unique-id-${index}`}>
            <span className="font-bold">{item.label}:</span>{" "}
            <span className="break-words">{item.value}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p>
      <span className="font-bold">{props.label}:</span>{" "}
      <span className="break-words">{props.value}</span>
    </p>
  );
};
