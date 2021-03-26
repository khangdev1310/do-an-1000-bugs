import { makeStyles } from "@material-ui/core";
import background1 from "./../../assets/background1.jpeg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      // margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bgColor: {
    position: "relative",
    height: "100%",
    width: "100%",
    background: `linear-gradient(to right bottom,rgba(9,1,65, 0.9), rgba(231,71,243, 0.2)), url(${background1})`,
    // background: `url(${background1})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "0rem 0",
  },
  container: {
    borderRadius: "10px",
    backgroundColor: "#fff",
    padding: "1rem 1rem",
    maxWidth: "1080px",
    margin: "0 auto",
    color: "#FAFAFA",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    webkitBoxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    mozBoxShadow: "0 0 10px rgba(0,0,0,.3)",

    [theme.breakpoints.down("md")]: {
      maxWidth: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  inputField: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      // alignItems: "center",
      // justifyContent: "center",
    },
  },

  btn: {
    width: "90%",
    backgroundColor: "rgba(156,72,211,0.8)",
    transition: "all 0.2s",
    "&:hover": {
      backgroundColor: "rgba(156,72,211,1)",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
