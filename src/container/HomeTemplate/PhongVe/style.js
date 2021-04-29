import { makeStyles } from "@material-ui/core";
import background1 from "./../../../assets/background1.jpeg";
import top from "./../../../assets/veXemPhim.png";
import bottom from "./../../../assets/veXemPhimBottom.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bgColor: {
    position: "relative",
    height: "100%",
    width: "100%",
    padding: "5rem 0 1rem 0",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  titleTheater: {
    color: "green",
  },

  titleTheaterSpan: {
    color: "#9B9B9B",
    fontSize: "14px",
  },

  countDown: {
    fontSize: "2rem",
    color: "rgb(236,70,248)",
    lineHeight: "95%",
  },
  formatTop: {
    width: "100%",
    background: `url(${top}) repeat-x top left transparent`,
    height: "8px",
    overflow: "hidden",
  },

  bgThanhToan: {
    backgroundColor: "#000",
    maxWidth: "760px",
    margin: "0 auto",
    color: "#FAFAFA",
    // marginTop: "30px",
  },

  containerThanhToan: {},

  formatBottom: {
    width: "100%",
    background: `url(${bottom}) repeat-x bottom left transparent`,
    height: "8px",
    overflow: "hidden",
  },

  overflow: {
    width: "760px",
    overflowY: "hidden",
    overflowX: "auto",
  },
}));
