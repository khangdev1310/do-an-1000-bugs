import { makeStyles } from "@material-ui/core";
import bgImage from "./../../../assets/money-heist.jpg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    zIndex: "1",
  },
  container: {
    maxWidth: "870px",
    margin: "0 auto",
    paddingTop: "8rem",
    color: "#FAFAFA",
  },

  backIcon: {
    position: "absolute",
    top: "30px",
    left: "50px",
    color: "rgba(236,70,248,1)",
    fontSize: "2.5rem",
    transition: "all 0.2s",
    "&:hover": {
      color: "rgba(165, 47, 173)",
      transform: "scale(0.9)",
    },
  },

  describeTitle: {
    flexDirection: "column",
    // justifyContent: "center",
    height: "100%",
  },

  bgNavTab: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
  },

  tabs: {
    maxWidth: "870px",
    margin: "0 auto",
    marginTop: "5rem",
    color: "#FAFAFA",
  },

  mainTitle: {
    fontSize: "24px",
  },

  // orderTicketBtn: {
  //   backgroundColor: "rgba(236,70,248,0.8)",
  //   marginTop: "2rem",
  //   color: "#FAFAFA",
  //   padding: "7px 25px",
  //   borderRadius: "4px",
  //   transition: "all 0.2s",
  //   "&:hover": {
  //     backgroundColor: "rgba(165, 47, 173)",
  //     transform: "scale(0.97)",
  //   },
  // },
  reviewContainer: {
    backgroundColor: "rgba(256,256,256, 0.35)",
    borderRadius: "10px",
    "& *": {
      margin: "0 0.8rem",
    },
  },
}));
