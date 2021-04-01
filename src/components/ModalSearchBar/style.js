import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "rgba(255,255,255, 0.9)",
    color: "#FAFAFA",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  searchContainer: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    lineHeight: "50px",
    backgroundImage: `linear-gradient(to left bottom, rgba(231,71,243, 0.9), rgba(231,71,243, 0.9))`,
    webkitBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    mozBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    boxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
  },
  container: {
    borderRadius: "10px",
    padding: "1rem 1rem",
    maxWidth: "1080px",
    margin: "0 auto",
    color: "#FAFAFA",

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
    width: "100%",
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
