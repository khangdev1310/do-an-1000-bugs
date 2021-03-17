import { makeStyles } from "@material-ui/core";
import lineTitle from "./../../assets/bgH3Line.jpeg";

export const useStyle = makeStyles((theme) => ({
  container: {
    maxWidth: "980px",
    height: "100vh",
    margin: "2rem auto",
  },
  homeTitle: {
    background: `url(${lineTitle}) repeat-x scroll left center rgba(0, 0, 0, 0)`,
    height: "60px",
    textAlign: "center",
    width: "100%",
  },
}));
