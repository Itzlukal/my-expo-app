import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SelectProps } from './types';

export const Select = ({
  options,
  value,
  title,
  onChange,
  placeholder = 'Select option',
  label,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View className="w-full">
      {label && <Text className="text-text-secondary mb-2">{label}</Text>}
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        className="bg-placeholder flex w-full flex-row items-center justify-between rounded-lg p-3">
        <Text className={value ? 'text-text-primary' : 'text-text-light'}>
          {value || placeholder}
        </Text>
        <Text>▼</Text>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent animationType="fade">
        <TouchableOpacity
          testID="modal-overlay"
          className="flex-1 bg-black/50"
          activeOpacity={1}
          onPress={() => setIsOpen(false)}>
          <View className="bg-background border-r-20 max-h-100 mt-auto h-auto w-full rounded-3xl">
            <View className="border-placeholder flex flex-row items-center justify-between border-b p-4">
              <Text className="text-2xl font-bold"> {title}</Text>

              <Pressable onPress={() => setIsOpen(false)}>
                <Ionicons name="close" size={32} color="black" />
              </Pressable>
            </View>

            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onChange(item);
                    setIsOpen(false);
                  }}
                  className="border-placeholder border-b p-4">
                  <Text
                    className={`${value === item ? 'text-primary' : 'text-text-primary'}  text-xl font-semibold`}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              contentContainerStyle={{ padding: 16 }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
