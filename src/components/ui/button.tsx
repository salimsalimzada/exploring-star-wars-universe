type ButtonVariant = "default" | "outlined" | "text";

const buttonStyles: Record<ButtonVariant, string> = {
  default: "bg-black text-white hover:bg-gray-800",
  text: "bg-transparent text-black  hover:cursor-pointer transition-all duration-300",
  outlined:
    "border border-black rounded bg-transparent hover:bg-gray-50 hover:cursor-pointer hover:scale-105 text-black transition-all duration-300",
};

type ButtonProps = {
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
};

function Button({ onClick, variant = "default", children }: ButtonProps) {
  return (
    <button className={`px-4 py-2 rounded-md ${buttonStyles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
