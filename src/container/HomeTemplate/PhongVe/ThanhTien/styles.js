import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
    height: "100%",
    position: "fixed",
  },
  contents: {
    padding: "1rem",
    overflowY: "scroll",
    height: "100%",
    paddingBottom: "150px",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  items: {
    borderBottom: "1px solid #E9E9E9",
    padding: "0.7rem 0",
  },

  itemsTextField: {
    borderBottom: "1px solid #E9E9E9",
    padding: "0.2rem 0",
  },
  total: {
    color: "#44c020",
    fontSize: "34px",
    textAlign: "center",
  },
  button: {
    position: "absolute",
    left: "0",
    bottom: 0,
    paddingTop: "15px",
    height: "60px",
    cursor: "pointer",
    fontSize: "24px",
    textAlign: "center",
    color: "#e9e9e9!important",
    width: "100%",
    backgroundImage: "linear-gradient(223deg,#b4ec51 0,#429321 100%)",
    borderRadius: "0px",
  },
  notice: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "4%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "60px",
    marginRight: "4px",
    background: "#fff",
    textAlign: "center",
    zIndex: "2",
  },

  noticeText: {
    fontSize: "14px",
  },

  movieTitle: {
    fontSize: "16px",
    fontWeight: "500",
  },
  movieText: {
    fontSize: "14px",
  },

  titleSpan: {
    fontSize: "15px",
  },

  pleased: {
    marginTop: "0.2rem",
    fontSize: "14px",
    color: "rgb(236,70,248)",
  },

  soGhe: {
    fontSize: "14px",
    color: "rgb(236,70,248)",
  },
}));
