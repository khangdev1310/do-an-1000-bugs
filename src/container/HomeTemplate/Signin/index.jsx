import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import * as Yup from "yup";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        AN-Learning
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: "bold",
  },
  margin: {
    margin: theme.spacing(1),
  },
  link: {
    color: "#000",
    listStyle: "none",
  },
  line: {
    width: "100%",
    backgroundColor: "#D1D7DC",
    height: "1px",
    position: "absolute",
    top: "50%",
    left: "0%",
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000",
      },
    },
  },
})(TextField);

function SignupForm() {
  const [loginFacebookInfo, setLoginFacebookInfo] = useState({
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    matKhau: "123456",
  });
  console.log(loginFacebookInfo);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string("Invalid account format").required("Required!"),
      matKhau: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const responseFacebook = (response) => {
    setLoginFacebookInfo({
      isLoggedIn: true,
      userID: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <Wave1 />
      <Wave2 /> */}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Account Name"
            name="taiKhoan"
            autoComplete="account"
            onChange={formik.handleChange}
            value={formik.values.taiKhoan}
          />
          {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
            <div>{formik.errors.taiKhoan}</div>
          ) : null}

          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="matKhau"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.matkhau}
          />
          {formik.touched.matKhau && formik.errors.matKhau ? (
            <div>{formik.errors.matKhau}</div>
          ) : null}
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
            style={{
              backgroundColor: "#000",
              padding: "0.8rem 0",
              margin: "initial",
              marginBottom: "1rem",
            }}
          >
            Sign In
          </Button>
          <Grid container spacing={0}>
            <Grid item xs={5} className={classes.containerLine}>
              <hr />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="p"
                component="p"
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <hr />
            </Grid>
          </Grid>
          <FacebookLogin
            appId="254385272976931"
            autoLoad={false}
            callback={responseFacebook}
            fields="name,email,picture"
            cssClass="my-facebook-button-class"
            scope="email, public_profile"
            render={(renderProps) => (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{
                  backgroundColor: "#1A538A",
                  padding: "0.8rem 0",
                  margin: "initial",
                  margin: "0.5rem 0",
                }}
                onClick={renderProps.onClick}
              >
                Continue with Facebook
              </Button>
            )}
          />
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                variant="body2"
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default SignupForm;
