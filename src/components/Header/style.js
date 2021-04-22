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

  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    border: "1px solid transparent",
    backgroundImage: `linear-gradient(to left bottom, rgba(231,71,243, 0.9), rgba(231,71,243, 0.9))`,
    webkitBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    mozBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    boxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
  },

  navItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  hideOnMobile: {
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  hideOnDesktop: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      transform: "translate(-150%, 0%)",
    },
  },

  root: {
    flexGrow: 1,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundImage: `linear-gradient(to right bottom, rgba(231,71,243, 1), rgba(9,1,65, 1))`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "0.2rem 0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "4rem",
    // display: "block",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },

  wrapper: {
    position: "fixed",
    top: "0",
    right: "0",
    width: "100%",
    height: "100%",
    overflowX: "scroll",
    transition: "all 0.5s ease",
    color: "rgb(236,70,248)",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: "1199",
  },

  navForMobile: {
    position: "fixed",
    top: "0",
    right: "0",
    width: "20rem",
    height: "100%",
    // boxShadow: "2px 2px 50px rgb(204, 204, 204)",
    overflowX: "scroll",
    transform: "translateX(100%)",
    transition: "all 0.5s ease",
    color: "rgb(236,70,248)",
    backgroundColor: "rgba(37,36,39,0.95)",

    zIndex: "1200 !important",
  },

  activeNavForMobile: {
    transform: "translateX(0%)",
    opacity: "1",
  },

  container: {
    margin: "1rem",
  },

  titleForMobile: {
    marginLeft: "1rem",
    fontSize: "18px",
    fontWeight: "300",
    color: "#FAFAFA",
  },

  searchContainerMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "35px",
    height: "35px",
    borderRadius: "100%",
    backgroundImage: `linear-gradient(to left bottom, rgba(231,71,243, 0.9), rgba(231,71,243, 0.9))`,
    webkitBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    mozBoxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
    boxShadow: "0px 0px 20px 3px rgba(231,71,243, 0.9)",
  },
}));
