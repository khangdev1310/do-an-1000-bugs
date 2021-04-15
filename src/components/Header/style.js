import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: "rgba(37,36,39,0.95)",
    border: "2.5px solid purple",
    borderRadius: "4px",
    color: "rgba(231,71,243, 1)",
    textAlign: "center",
    zIndex: "9999",
  },
  settingsTextPopper: {
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    padding: "0.5rem 0",
    borderBottom: "1px solid purple",
    color: "rgba(231,71,243, 1)",
  },

  bgColor: {
    backgroundImage: `linear-gradient(to right bottom, rgba(231,71,243, 1), rgba(9,1,65, 1))`,
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

  hideSignMobile: {
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },

    ["@media (max-width:992px)"]: {
      display: "none",
    },
  },

  navContainer: {
    alignItems: "center",
    justifyContent: "space-between",
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
