import { Avatar, Button, Grid, Link, makeStyles, TextField, Theme, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import * as Yup from 'yup'

interface signUpForm {
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '450px',
        display: 'block',
        margin: '0 auto',
    },
    footer: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end'
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
}))




const Register = () => {
    const classes = useStyles()
    const handleValidate = () => {
        return Yup.object().shape({
            email: Yup.string().email().required('Enter valid email'),
            fullName: Yup.string().required('Please enter full name'),
            password: Yup.string().matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
            ).required('Please valid password. One uppercase, one lowercase, one special character and no spaces')
            ,
            confirmPassword: Yup.string().required('Required').test('password-match', 'password must match', function (value) {
                return this.parent.password === value
            })

        })
    }

    const createNewUser = async (data: signUpForm, resetForm: Function) => {
        try {
            // API call here
            const res = 'api create user'
            if (res) {
                resetForm({})
            }
        } catch (error) {

        }
    }

    return (
        <div className={classes.root}>
            <Formik
                initialValues={{
                    fullName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                }}
                onSubmit={(values: signUpForm, actions) => {
                    createNewUser(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 400)
                }}
                validationSchema={handleValidate}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {

                    return (
                        <Form className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOpenIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Register
                            </Typography>
                            <Grid
                                container
                                justify="space-around"
                                direction="row"
                            >
                                <Grid
                                    item
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <TextField
                                        name="fullName"
                                        id="fullName"
                                        label="Full Name"
                                        value={values.fullName}
                                        type="text"
                                        helperText={
                                            errors.fullName && touched.fullName
                                                ? errors.fullName
                                                : 'Enter your full name.'
                                        }
                                        error={
                                            errors.fullName && touched.fullName
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                                        name="email"
                                        id="email"
                                        label="Email"
                                        value={values.email}
                                        type="email"
                                        helperText={
                                            errors.email && touched.email
                                                ? errors.email
                                                : 'Enter email'
                                        }
                                        error={
                                            errors.email && touched.email
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                                        name="password"
                                        id="password"
                                        label="Password"
                                        value={values.password}
                                        type="password"
                                        helperText={
                                            errors.password && touched.password
                                                ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                                                : 'One uppercase, one lowercase, one special character and no spaces'
                                        }
                                        error={
                                            errors.password && touched.password
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        label="Confirm password"
                                        value={values.confirmPassword}
                                        type="password"
                                        helperText={
                                            errors.confirmPassword &&
                                                touched.confirmPassword
                                                ? errors.confirmPassword
                                                : 'Re-enter password to confirm'
                                        }
                                        error={
                                            errors.confirmPassword &&
                                                touched.confirmPassword
                                                ? true
                                                : false
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                                <Grid
                                    className={classes.footer}
                                    lg={10}
                                    md={10}
                                    sm={10}
                                    xs={10}
                                >
                                    <Link  href="/auth/sign-in" variant="body2">
                                        Back to Sign In
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>

                    )
                }}

            </Formik>
        </div>
    )
}

export default Register