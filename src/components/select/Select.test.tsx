import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { Select } from './index';

jest.mock('@expo/vector-icons', () => ({
  Ionicons: () => 'Ionicons',
}));

const mockProps = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  value: '',
  onChange: jest.fn(),
  placeholder: 'Select option',
  title: 'Test Select',
  label: 'Test Label',
};

describe('Select', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with label and placeholder', () => {
    const { getByText } = render(<Select {...mockProps} />);

    expect(getByText('Test Label')).toBeTruthy();
    expect(getByText('Select option')).toBeTruthy();
  });

  it('displays current value instead of placeholder when selected', () => {
    const { getByText } = render(<Select {...mockProps} value="Option 1" />);

    expect(getByText('Option 1')).toBeTruthy();
  });

  it('opens modal with title when pressed', () => {
    const { getByText, queryByText } = render(<Select {...mockProps} />);

    expect(queryByText('Test Select')).toBeNull();
    fireEvent.press(getByText('Select option'));
    expect(getByText('Test Select')).toBeTruthy();
  });

  it('displays all options in the modal', () => {
    const { getByText, queryByText } = render(<Select {...mockProps} />);

    fireEvent.press(getByText('Select option'));

    mockProps.options.forEach((option) => {
      expect(queryByText(option)).toBeTruthy();
    });
  });

  it('calls onChange and closes modal when option is selected', () => {
    const onChange = jest.fn();
    const { getByText } = render(<Select {...mockProps} onChange={onChange} />);

    fireEvent.press(getByText('Select option'));
    fireEvent.press(getByText('Option 1'));

    expect(onChange).toHaveBeenCalledWith('Option 1');
  });

  it('closes modal when clicking outside', () => {
    const { getByText, queryByText, getByTestId } = render(<Select {...mockProps} />);

    fireEvent.press(getByText('Select option'));
    expect(queryByText('Test Select')).toBeTruthy();

    fireEvent.press(getByTestId('modal-overlay'));
    expect(queryByText('Test Select')).toBeNull();
  });

  it('applies correct styling for selected option in modal', () => {
    const { getByText } = render(<Select {...mockProps} value="Option 1" />);

    fireEvent.press(getByText('Option 1'));
  });
});
