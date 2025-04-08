import { ReactNode } from "react";

type ButtonVariant = "default" | "outlined" | "text";

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  default: "bg-black text-white cursor-pointer",
  text: "bg-transparent text-black  hover:cursor-pointer",
  outlined:
    "border border-black rounded bg-transparent hover:bg-gray-50 hover:cursor-pointer hover:scale-105 text-black transition-all duration-300",
};

type ButtonProps = Partial<{
  onClick: () => void;
  variant: ButtonVariant;
  className: string;
  children: ReactNode;
}>;

function Button({ onClick, className, children, variant = "default" }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md  ${BUTTON_STYLES[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
