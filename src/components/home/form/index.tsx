import React, { FC } from 'react';
import { View } from 'react-native';
import { Select, Checkbox } from '~/components';
import { IFormProps } from './types';

export const HomeForm: FC<IFormProps> = ({
  selectedOption,
  setSelectedOption,
  isChecked,
  setIsChecked,
  options,
}) => {
  return (
    <View className="w-full  gap-5">
      <Select
        title="Choose an option"
        label="Choose an option"
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
        placeholder="Select something..."
      />

      <Checkbox
        checked={isChecked}
        onChange={setIsChecked}
        label="I agree to terms and conditions"
        description="Please agree "
      />
    </View>
  );
};
