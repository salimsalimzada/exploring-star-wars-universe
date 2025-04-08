import { ReactNode } from "react";

type SkeletonProps = Partial<{
  loading: boolean;
  active: boolean;
  children: ReactNode;
  rows: number;
  className: string;
}>;

function Skeleton({
  loading = false,
  active = false,
  children,
  rows = 3,
  className,
}: SkeletonProps) {
  if (!loading) return <>{children}</>;

  return (
    <div className={`space-y-2 max-w-2xs rounded-lg bg-white ${className}`}>
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className={`h-5 bg-gray-200 rounded ${active ? "animate-pulse" : ""} ${
            index === rows - 1 ? "w-4/5" : "w-full"
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
    </div>
  );
}

export default Skeleton;
