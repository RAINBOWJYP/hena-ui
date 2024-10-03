import { CheckboxProps } from "@lib/type";

const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <div className="flex items-center p-1">
      <div className="flex items-center justify-center h-10 w-10 hover:bg-primary-50 hover:rounded-full active:bg-primary-100 active:rounded-full">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-primary-600 accent-primary-600 p-1 border-primary-600"
          id={children}
          {...props}
        />
      </div>
      <label className="ml-2 text-gray-700" htmlFor={children}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
