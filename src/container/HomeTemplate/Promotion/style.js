import { makeStyles } from "@material-ui/core";
import background1 from "./../../../assets/background1.jpeg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    width: "600px",
    height: "350px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bgColor: {
    maxWidth: "1280px",
    margin: "0 auto",
    top: "0%",
    width: "100%",
    background: `linear-gradient(to right bottom,rgba(9,1,65, 0.9), rgba(231,71,243, 0.2)), url(${background1})`,
    backgroundPosition: "50% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  container: {
    margin: "0 auto",
    padding: "7rem 0",
    maxWidth: "1280px",
    minHeight: "574px",
  },
  containerNews: {
    margin: "0 auto",
    // padding: "7rem 0",
    maxWidth: "980px",
    color: "white",
    paddingBottom: "1rem",
    color: "rgb(223,66,238)",
  },

  titleNews: {
    display: "inline-block",
    backgroundColor: "#FFF",
    padding: "11px 25px",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
}));
