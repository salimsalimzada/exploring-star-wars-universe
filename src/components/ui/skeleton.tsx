import { ReactNode } from "react";

type SkeletonProps = {
  loading: boolean;
  active?: boolean;
  children?: ReactNode;
};

function Skeleton({ loading, active = false, children }: SkeletonProps) {
  if (loading) {
    return (
      <div
        className={`bg-gray-300 rounded-md ${active ? "animate-pulse" : ""} ${
          !active ? "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" : ""
        }`}
        style={{ height: "20px", width: "100%" }}
      ></div>
    );
  }

  return <>{children}</>;
}

export default Skeleton;
