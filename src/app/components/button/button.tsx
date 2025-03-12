import React from "react";

interface ButtonProps {
  value: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = React.memo(
  ({ value, variant = "primary", onClick }) => {
    const baseStyles =
      "px-8 py-3 cursor-pointer text-white w-fit font-semibold rounded-lg focus:outline-none";

    const variantStyles =
      variant === "primary"
        ? "bg-[#6E3BFF]  hover:bg-[#542ECC] "
        : "bg-[#FAAA01] hover:bg-[#c88a08] transition-all duration-300";

    return (
      <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
        {value}
      </button>
    );
  }
);

export default Button;

Button.displayName = "Button";
