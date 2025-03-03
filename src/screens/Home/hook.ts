import { useState } from 'react';

export const useHomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return {
    selectedOption,
    setSelectedOption,
    isChecked,
    setIsChecked,
    options,
  };
};
