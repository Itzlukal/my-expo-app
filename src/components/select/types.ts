export interface SelectProps {
  options: string[];
  value: string;
  title: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}
