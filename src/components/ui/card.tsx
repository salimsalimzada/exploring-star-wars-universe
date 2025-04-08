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
    <article
      className={`w-full max-w-2xs rounded-lg bg-white shadow-md flex flex-col ${className}`}
    >
      {title && (
        <header className="p-4 flex items-center justify-between border-b border-gray-300">
          {title}
        </header>
      )}
      <div className="flex-grow">{children}</div>
      {footer && <footer className="py-2">{footer}</footer>}
    </article>
  );
}

export default Card;
