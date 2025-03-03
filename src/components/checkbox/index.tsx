import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
}

export const Checkbox = ({ checked, onChange, label, description }: CheckboxProps) => {
  return (
    <TouchableOpacity onPress={() => onChange(!checked)} className="flex-row gap-3 space-x-2">
      <View
        className={`h-6 w-6 items-center justify-center rounded border-2 ${
          checked ? 'border-primary bg-primary' : 'border-neutral bg-background'
        }`}>
        {checked && <Text className="text-background">✓</Text>}
      </View>
      <View>
        {label && <Text className="text-text-primary font-semibold">{label}</Text>}
        {description && <Text className="text-text-secondary">{description}</Text>}
      </View>
    </TouchableOpacity>
  );
};
