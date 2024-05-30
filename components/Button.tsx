import Image from "next/image";
import React, { FC, ReactNode } from "react";

type ButtonProps = {
  type: "button" | "submit";
  icon?: string;
  title: string;
  variant: "btn_dark_green";
};

const Button: FC<ButtonProps> = ({ type, icon, title, variant }) => {
  return (
    <button
      type="button"
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
