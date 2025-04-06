type ButtonVariant = "default" | "outlined";

const buttonStyles: Record<ButtonVariant, string> = {
  default: "bg-black text-white hover:bg-gray-800",
  outlined: "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white",
};

type ButtonProps = {
  onClick: () => void;
  variant?: ButtonVariant;
};

function Button({ onClick, variant = "default" }: ButtonProps) {
  return (
    <button className={`px-4 py-2 rounded-md ${buttonStyles[variant]}`} onClick={onClick}>
      Send me more
    </button>
  );
}

export default Button;
