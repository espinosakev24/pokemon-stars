import React from 'react';
import { Form, Button, Box, Text } from 'grommet';
import { InputField } from 'components/InputField/InputField';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAuthContext } from 'context';
import * as Yup from 'yup';
import { useState } from 'react/cjs/react.development';

const loginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

export const Login = () => {
  const [serverError, setServerError] = useState(false);
  const { login } = useAuthContext();
  const { push } = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: ({ email, password }) => {
      login(email, password)
        .then(() => push('/generations'))
        .catch((error) => {
          error.status === 401 && setServerError('Invalid credentials');
        });
    },
  });
  return (
    <Box align="center" pad="large">
      <Text size="xlarge" margin={{ bottom: 'small' }} weight="bold">
        Login
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
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <InputField
            id="Password"
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <Button label="Login" type="submit" />
          <Link to="register">
            <Text label="Interactive Element" size="small" textAlign="end">
              Create account
            </Text>
          </Link>
          {serverError && <Text color="status-critical">{serverError}</Text>}
        </Box>
      </Form>
    </Box>
  );
};
