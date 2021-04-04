import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Grid } from "@material-ui/core";
import GioChieuPhim from "./GioChieuPhim";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    "& .MuiAccordion-root": {
      backgroundColor: "transparent",
    },
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ChildTabs({ phims }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const renderThongTinPhim = (phims) => {
    return phims.danhSachPhim.map((thongTinPhim, index) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={2}>
                  <img src={thongTinPhim.hinhAnh} width="40px" height="50px" />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{thongTinPhim.tenPhim}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <GioChieuPhim
              thongTinGioNgayChieus={thongTinPhim.lstLichChieuTheoPhim}
            />
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return (
    <div className={classes.root}>
      <Box style={{ maxWidth: "500px" }}>
        {console.log(phims)}
        {renderThongTinPhim(phims)}
      </Box>
    </div>
  );
}
