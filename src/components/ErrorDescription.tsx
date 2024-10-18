interface ErrorDescriptionProps {
  error: string;
  className?: string;
}

const ErrorDescription = ({ error, className }: ErrorDescriptionProps) => {
  return <p className={`text-xs text-error ${className}`}>{error}</p>;
};

export default ErrorDescription;
