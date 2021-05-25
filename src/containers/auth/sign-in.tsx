import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface SignInForm {
  email: string;
  password: string;
}

const HandleValidate = () => {
  Yup.object().shape({
    email: Yup.string().email().required('Enter valid Email'),
    password: Yup.string().required('Enter password'),
  });
};

export default function SignIn() {
  const classes = useStyles();

  const onHandleSignIn = (data: SignInForm, resetForm) => {
    try {
      console.log(data, 'data');
      if (data) {
        resetForm();
      }
    } catch (error) {
      return error;
    }
    return 'test';
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: SignInForm, actions) => {
      onHandleSignIn(values, actions.resetForm);
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 500);
    },
    validate: HandleValidate,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            value={formik.values.email}
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : 'Enter your email'
            }
            error={formik.errors.email && formik.touched.email}
            autoFocus
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={formik.values.password}
            label="Password"
            helperText={
              formik.errors.password && formik.touched.password
                ? formik.errors.password
                : 'Enter your password'
            }
            error={formik.errors.password && formik.touched.password}
            type="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link variant="body2">Forgot password?</Link> */}
            </Grid>
            <Grid item>
              <Link href="/auth/register" variant="body2">
                <p>Don&apos;t have an account? Register</p>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
