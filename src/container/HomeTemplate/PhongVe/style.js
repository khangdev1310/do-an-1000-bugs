import { makeStyles } from "@material-ui/core";

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
  bgColor: {},
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
}));
