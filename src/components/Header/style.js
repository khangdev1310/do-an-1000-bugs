import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bgColor: {
    backgroundImage: `linear-gradient(to right bottom, rgba(231,71,243, 0.7), rgba(9,1,65, 0.3))`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "0.2rem 0",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  navContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    minWidth: "500px",
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
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    backgroundImage: `linear-gradient(to left bottom, rgba(231,71,243, 0.9), rgba(231,71,243, 0.9))`,
    webkitBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    mozBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    boxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
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
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
