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
    maxWidth: "1280px",
    paddingTop: "2rem",
    margin: "0 auto",
    color: "white",
  },

  prevArrow: {
    fontSize: 0,
    lineHeight: 0,
    position: "absolute",
    top: "46%",
    display: "block",
    width: "20px",
    height: "20px",
    padding: "0",
    transform: "translate(100%, -50%)",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "transparent",
    zIndex: "2",

    "&:before": {
      fontFamily: "slick",
      fontSize: "20px",
      lineHeight: "1",
      opacity: "0.75",
    },
  },

  nextArrow: {
    fontSize: 0,
    lineHeight: 0,
    position: "absolute",
    top: "46%",
    right: "0",
    display: "block",
    width: "20px",
    height: "20px",
    padding: "0",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    border: "none",
    outline: "none",
    background: "transparent",
    "&:before": {
      fontFamily: "slick",
      fontSize: "20px",
      lineHeight: "1",
      opacity: "0.75",
    },
  },

  hoverSVG: {
    "&:hover": {
      color: "#CCB3DB !important",
    },
  },

  titleContainer: {
    marginLeft: "0rem",
  },

  titleColor: {
    width: "0.2rem",
    height: "2rem",
    backgroundColor: "plum",
    marginRight: "0.5rem",
  },
}));
