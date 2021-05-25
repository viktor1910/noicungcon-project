import {
  Avatar,
  Button,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface SignUpForm {
  FullName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '450px',
    display: 'block',
    margin: '0 auto',
  },
  footer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
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
  textField: {
    '& > *': {
      width: '100%',
    },
  },
  submitButton: {
    marginTop: '24px',
  },
  title: { textAlign: 'center' },
  successMessage: { color: 'green' },
  errorMessage: { color: 'red' },
}));

const handleValidate = () => {
  return Yup.object().shape({
    Email: Yup.string().email().required('Enter valid Email'),
    FullName: Yup.string().required('Please enter full name'),
    Password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
      .required(
        'Please valid Password. One uppercase, one lowercase, one special character and no spaces'
      ),
    ConfirmPassword: Yup.string()
      .required('Required')
      // eslint-disable-next-line func-names
      .test('Password-match', 'Password must match', function (value) {
        return this.parent.Password === value;
      }),
  });
};

const Register = () => {
  const classes = useStyles();

  const createNewUser = (data: SignUpForm, resetForm) => {
    try {
      // API call here
      const res = 'api create user';
      if (res) {
        resetForm({});
      }
    } catch (error) {
      return error;
    }
    return 'test';
  };

  const formik = useFormik({
    initialValues: {
      FullName: '',
      Password: '',
      ConfirmPassword: '',
      Email: '',
    },
    onSubmit: (values: SignUpForm, actions) => {
      createNewUser(values, actions.resetForm);
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 400);
    },
    validationSchema: handleValidate,
  });

  return (
    <div className={classes.root}>
      <form className={classes.paper} onSubmit={formik.handleSubmit}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Grid container justify="space-around" direction="row">
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.textField}
          >
            <TextField
              name="FullName"
              id="FullName"
              label="Full Name"
              value={formik.values.FullName}
              type="text"
              helperText={
                formik.errors.FullName && formik.touched.FullName
                  ? formik.errors.FullName
                  : 'Enter your full name.'
              }
              error={formik.errors.FullName && formik.touched.FullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.textField}
          >
            <TextField
              name="Email"
              id="Email"
              label="Email"
              value={formik.values.Email}
              type="Email"
              helperText={
                formik.errors.Email && formik.touched.Email
                  ? formik.errors.Email
                  : 'Enter Email'
              }
              error={formik.errors.Email && formik.touched.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.textField}
          >
            <TextField
              name="Password"
              id="Password"
              label="Password"
              value={formik.values.Password}
              type="Password"
              helperText={
                formik.errors.Password && formik.touched.Password
                  ? 'Please valid Password. One uppercase, one lowercase, one special character and no spaces'
                  : 'One uppercase, one lowercase, one special character and no spaces'
              }
              error={formik.errors.Password && formik.touched.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.textField}
          >
            <TextField
              name="ConfirmPassword"
              id="ConfirmPassword"
              label="Confirm Password"
              value={formik.values.ConfirmPassword}
              type="Password"
              helperText={
                formik.errors.ConfirmPassword && formik.touched.ConfirmPassword
                  ? formik.errors.ConfirmPassword
                  : 'Re-enter Password to confirm'
              }
              error={
                formik.errors.ConfirmPassword && formik.touched.ConfirmPassword
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>

          <Grid
            item
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className={classes.submitButton}
          >
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
          </Grid>
          <Grid className={classes.footer} item lg={10} md={10} sm={10} xs={10}>
            <Link href="/auth/sign-in" variant="body2">
              Back to Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Register;
