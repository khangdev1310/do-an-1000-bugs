import { makeStyles } from "@material-ui/core";
import background1 from "./../../assets/background1.jpeg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
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
    // padding: "3rem 0",
    padding: "0.3rem 1rem",
    borderRadius: "10px",
    // backgroundColor: `rgba(157,72,212, 0.5)`,
    backgroundColor: "#fff",

    // backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    maxWidth: "1080px",
    margin: "0 auto",
    color: "#FAFAFA",
    boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    webkitBoxShadow: "0 0 10px rgb(0 0 0 / 30%)",
    mozBoxShadow: "0 0 10px rgba(0,0,0,.3)",
  },
  btn: {
    width: "90%",
    backgroundColor: "rgba(156,72,211,0.8)",
    transition: "all 0.2s",
    "&:hover": {
      backgroundColor: "rgba(156,72,211,1)",
    },
  },
}));
