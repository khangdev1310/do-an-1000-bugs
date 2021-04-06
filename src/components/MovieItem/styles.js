import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  item: {
    transform: "scaleX(0.90)",
    cursor: "pointer",
    margin: "1rem 0 4rem 0",

    "&:hover $overlay": {
      display: "block",
    },

    "&:hover $buyTicketButton": {
      display: "block",
    },

    "&:hover $titleContainer": {
      visibility: "hidden",
    },
  },

  poster: {
    position: "relative",
    height: "315px",
  },

  overlay: {
    display: "none",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top,#000,transparent 100%)",
    borderRadius: "4px",
  },

  titleContainer: {},

  title: {
    fontWeight: "400",
    fontSize: "20px",
  },

  buyTicketButton: {
    display: "none",
    position: "absolute",
    bottom: "-15px",
    width: "100%",
    fontSize: "1.2rem",
  },
}));
