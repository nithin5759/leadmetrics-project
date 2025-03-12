import React from "react";

interface InputFieldProps {
  value: string | number;
  type?: string;
  className?: string;
  placeholder: string;
  isError?: boolean | string;
  touched?: boolean;
  name: string;
  helperText?: string | boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  variant?: "input" | "textarea";
  isBottomForm?: boolean;
}

const InputField: React.FC<InputFieldProps> = React.memo(
  ({
    value,
    type = "text",
    placeholder,
    isError,
    touched,
    name,
    helperText,
    onChange,
    variant,
    isBottomForm,
  }) => {
    const commonProps = {
      name,
      placeholder,
      value,
      onChange,
      className:
        "w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded focus:ring-0 focus:outline-none",
    };

    return (
      <div className="w-full">
        {variant === "textarea" ? (
          <textarea
            {...commonProps}
            rows={4}
            className={`${commonProps.className} resize-none`}
          />
        ) : (
          <input {...commonProps} type={type} autoComplete="new-password" className={`${commonProps.className} h-12`}/>
        )}

        {isError && touched ? (
          <p
            className={`${
              isBottomForm ? "text-white" : "text-red-700"
            } text-xs mt-1 pl-1`}
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;
