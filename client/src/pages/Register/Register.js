import React from 'react';
import { Form, Button, Box, Text } from 'grommet';
import { InputField } from 'components/InputField/InputField';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from 'context';
import Swal from 'sweetalert2';

const registerSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

export const Register = () => {
  const { push } = useHistory();
  const { register } = useAuthContext();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: ({ email, password }) =>
      register(email, password)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User was created successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          push('/login');
        })
        .catch(() =>
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'User cannot be created',
            showConfirmButton: false,
            timer: 1500,
          })
        ),
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
