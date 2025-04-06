import { ForwardedRef, forwardRef, ReactNode } from "react";

enum IconPosition {
  Left = "left",
  Right = "right",
}

type InputProps = {
  htmlFor?: string;
  id: string;
  name: string;
  icon?: ReactNode;
  iconPosition?: Lowercase<keyof typeof IconPosition>;
  placeholder?: string;
  label?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, id, name, icon, iconPosition = "right", placeholder = "", htmlFor = "" },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="relative">
        {label && (
          <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <div
          className={`flex items-center border-2 rounded-md ${iconPosition === IconPosition.Left ? "pl-3" : "pr-3"}`}
        >
          {iconPosition === IconPosition.Left && <div className="absolute left-2">{icon}</div>}
          <input
            ref={ref}
            type="text"
            id={id}
            name={name}
            placeholder={placeholder}
            className="w-full p-2 pl-10 pr-10 text-sm text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {iconPosition === IconPosition.Right && <div className="absolute right-2">{icon}</div>}
        </div>
      </div>
    );
  },
);

export default Input;
