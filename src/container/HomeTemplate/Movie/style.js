import { makeStyles } from "@material-ui/core";
import background1 from "./../../../assets/background1.jpeg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
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
  },

  bgNavTab: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
  },

  container: {
    maxWidth: "980px",
    paddingTop: "5rem",
    margin: "0 auto",
  },

  wrapper: {
    width: "100%",
  },

  content: {
    color: "white",
  },
}));
