export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  value: string;
  placeholder?: string;
  icon?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
