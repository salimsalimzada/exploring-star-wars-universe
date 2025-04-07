import { Primitive } from "@custom-types/common";
import { ReactNode } from "react";

type InfoRowProps = {
  label: string;
  value: Primitive | ReactNode;
};
export const InfoRow = ({ label, value }: InfoRowProps) => (
  <p>
    <span className="font-bold">{label}:</span> <span className="break-words">{value}</span>
  </p>
);
