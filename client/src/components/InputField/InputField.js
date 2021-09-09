import React from 'react';
import { FormField, TextInput } from 'grommet';

export const InputField = ({
  id,
  placeholder,
  name,
  label,
  onChange,
  ...props
}) => (
  <FormField htmlFor={id} name={name} label={label}>
    <TextInput {...props} />
  </FormField>
);
