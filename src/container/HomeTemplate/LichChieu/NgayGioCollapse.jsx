import { Box, Typography } from "@material-ui/core";
import React from "react";
import Gio from "./Gio";
import { makeStyles } from "@material-ui/core/styles";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const NgayGioCollapse = ({ gios }) => {
  const classes = useStyles();

  const formatGioNgayChieuPhim = (gios) => {
    return gios.map((gio) => {
      return (
        <div className={classes.root}>
          <Box style={{ minWidth: "500px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Ngày: {gio[0].ngayChieuGioChieu.substring(0, 10)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Gio gios={gio} />
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      );
    });
  };

  return <div>{formatGioNgayChieuPhim(gios)}</div>;
};

export default NgayGioCollapse;
