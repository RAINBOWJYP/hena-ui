interface LabelProps {
  children: string;
  htmlFor: string;
  className?: string;
}

const Label = ({ children, htmlFor, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`bg-primary-50 text-netural-600 px-1 text-xs ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
