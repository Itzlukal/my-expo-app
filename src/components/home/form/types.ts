export interface IFormProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
  options: string[];
}
