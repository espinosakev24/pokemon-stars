import React from 'react';
import { Form, Button, Box, Text } from 'grommet';
import { InputField } from 'components/InputField/InputField';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

export const Register = () => {
  const { push } = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => push('/login'),
  });
  return (
    <Box align="center" pad="large">
      <Text size="xlarge" margin={{ bottom: 'small' }} weight="bold">
        Create an account
      </Text>
      <Form onSubmit={formik.handleSubmit}>
        <Box
          border
          gap="medium"
          pad="large"
          width={{ small: 'small', medium: 'medium' }}
        >
          <InputField
            id="Email"
            label="Email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <InputField
            id="Password"
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button label="Register" type="submit" />
          <Link to="login">
            <Text label="Interactive Element" size="small" textAlign="end">
              Login into your account
            </Text>
          </Link>
        </Box>
      </Form>
    </Box>
  );
};
