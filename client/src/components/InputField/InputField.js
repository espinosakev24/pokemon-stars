import React from 'react';
import { FormField, TextInput } from 'grommet';

export const InputField = ({
  id,
  placeholder,
  name,
  label,
  onChange,
  error,
  value,
  touched,
  ...props
}) => (
  <FormField label={label} error={touched && error}>
    <TextInput
      {...props}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  </FormField>
);
