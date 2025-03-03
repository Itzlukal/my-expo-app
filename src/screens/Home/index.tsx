import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { HomeForm } from '~/components';

export const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <View className="bg-background flex-1 items-center justify-center gap-10 p-4">
      <Text className="text-primary mb-8 text-2xl font-bold">Welcome Home</Text>

      <HomeForm
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        options={options}
      />

      <View className="bg-primary mt-8 rounded-lg p-4">
        <Text className="text-background">Selected: {selectedOption}</Text>
        <Text className="text-background">Checked: {isChecked ? 'Yes' : 'No'}</Text>
      </View>
    </View>
  );
};
