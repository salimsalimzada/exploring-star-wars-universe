import { ReactNode } from "react";

function Card({
  title,
  children,
  footer,
  className = "",
}: {
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <article className={`max-w-2xs rounded-lg  bg-white shadow-md  ${className}`}>
      {title && (
        <header className="p-4 flex items-center justify-between border-b border-gray-300">
          {title}
        </header>
      )}
      <> {children}</>
      {footer && <footer className="py-2">{footer}</footer>}
    </article>
  );
}

export default Card;
