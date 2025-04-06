import { ChangeEvent, ForwardedRef, forwardRef } from "react";

type InputProps = {
  htmlFor?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, id, name, placeholder, htmlFor, className = "", value, onChange },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="max-w-md mx-auto">
        {label && (
          <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type="text"
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full h-12 py-2 px-6 text-base text-gray-900 bg-gray-50 border-1 border-gray-600 rounded-full focus:outline-none ${className}`}
        />
      </div>
    );
  },
);

export default Input;
