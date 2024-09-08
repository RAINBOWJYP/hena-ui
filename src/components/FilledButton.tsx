import { CLASS_FIX, setClassName } from "../utils/classFix";
import "./button.css";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  children: string;
  onClick?: () => void;
}

const FilledButton = ({
  variant = "primary",
  size = "medium",
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    variant: {
      primary: "bg-primary-500 text-white hover:bg-primary-700",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-700",
      tertiary: "bg-tertiary-500 text-netural-800 hover:bg-tertiary-400",
    },
    size: {
      small: "px-2 py-1 text-2xs",
      medium: "px-4 py-2",
      large: "px-6 py-3 text-lg",
    },
  };
  const className = setClassName([
    "rounded-full text-base hover:shadow-el-1",
    buttonStyles.variant[variant],
    buttonStyles.size[size],
  ]);
  return (
    <button type="button" className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
export default FilledButton;
