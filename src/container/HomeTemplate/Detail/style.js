import { makeStyles } from "@material-ui/core";
import bgImage from "./../../../assets/money-heist.jpg";

export const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& label.Mui-focused": {
      color: "transparent",
    },
    "& label": {
      color: "transparent",
    },
    "& .MuiInputLabel-outlined": {
      color: "violet",
      // color: "transparent",
    },
    "& .MuiFormControl-root": {
      backgroundColor: "#FAFAFA",
      borderRadius: "10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
      border: "transparent",
    },
  },

  inputRoot: {
    color: "#5A5A5A !important",
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "10px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
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
    paddingTop: "1rem",
    color: "#FAFAFA",
  },

  containerForComment: {
    maxWidth: "550px",
    margin: "0 auto",
    color: "#FAFAFA",
  },

  userComment: {
    backgroundColor: "rgba(36,36,36,0.7)",
    padding: "1rem 1rem",
    borderRadius: "10px",
  },

  otherUsersComment: {
    backgroundColor: "#FAFAFA",
    color: "#5A5A5A",
    padding: "1rem 1rem",
    borderRadius: "10px",
    color: "",
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

  reviewContainer: {
    backgroundColor: "rgba(256,256,256, 0.35)",
    borderRadius: "10px",
    "& *": {
      margin: "0 0.8rem",
    },
  },
  buttonBuyTicket: {
    marginTop: "1rem",
    backgroundColor: "rgba(138,52,144, 1)",
    padding: "5px 28px",
    borderRadius: "100px",
    border: "2.5px solid rgb(236,70,248)",
    "&:hover": {
      backgroundColor: "rgba(138,52,144, 0.7)",
      border: "2.5px solid rgba(236,70,248, 0.7)",
    },
  },
}));
