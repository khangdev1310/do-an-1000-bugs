import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent !important",
    display: "flex",
    height: "100%",

    "& .MuiTabs-indicator": {
      backgroundColor: "transparent !important",
    },

    "& .MuiBox-root": {
      padding: "0rem",
      maxHeight: "500px",
      overflow: "scroll",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
