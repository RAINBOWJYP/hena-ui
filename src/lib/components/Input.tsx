import Icon from "../icons";
import ErrorDescription from "./ErrorDescription";
import Label from "./Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string;
  label: string;
}

const Input = ({ error, label, ...props }: InputProps) => {
  return (
    <div className="w-full relative">
      <Label htmlFor="input" className="absolute -top-2 left-4">
        label
      </Label>
      <div className="p-4 rounded-[4px] border border-netural-400 flex justify-between">
        <Icon.Search fill={"#605E5E"} className="mr-4" />
        <input {...props} value="value" className="w-full" />
        <Icon.Cancel />
      </div>
      <ErrorDescription error={error} className="absolute -bottom-6 left-4" />
    </div>
  );
};

export default Input;
