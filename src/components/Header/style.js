import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import header from "../../assets/header.jpeg";

export const useStyles = makeStyles((theme) => ({
  bgColor: {
    backgroundImage: `linear-gradient(to left bottom, rgba(231,71,243, 0.6), rgba(9,1,65, 0.9))`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },

  colorText: {
    color: "#F692FE",
    letterSpacing: "1px",
    fontWeight: "400",
    fontFamily: "Montserrat, sans-serif",
  },

  marginTextNavbar: {
    margin: "0 2rem",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontWeight: "bold",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  btn: {
    textDecoration: "none",
    padding: "10px 15px",
    color: "#FAFAFA",
    margin: "0 0.2rem",
    borderRadius: "10px",
    fontFamily: "Montserrat, sans-serif",

    "& icon": {
      marginRight: "0.5rem",
    },
  },
}));
