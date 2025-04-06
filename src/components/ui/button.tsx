type ButtonVariant = "default" | "outlined" | "text";

const buttonStyles: Record<ButtonVariant, string> = {
  default: "bg-black text-white hover:bg-gray-800",
  text: "bg-transparent text-black  hover:cursor-pointer",
  outlined:
    "border border-black rounded bg-transparent hover:bg-gray-50 hover:cursor-pointer hover:scale-105 text-black transition-all duration-300",
};

type ButtonProps = {
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

function Button({ onClick, variant = "default", className, children }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md ${className} ${buttonStyles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
