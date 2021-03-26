import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import GioChieuPhim from "./GioChieuPhim";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function ChildTabs({ phims }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const renderThongTinPhim = (phims) => {
    return phims.danhSachPhim.map((thongTinPhim, index) => {
      return (
        <Accordion
          square
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Box>
              <Box display="flex">
                <img src={thongTinPhim.hinhAnh} width="40px" height="50px" />
                <Typography>{thongTinPhim.tenPhim}</Typography>
              </Box>
            </Box>
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
    <Box style={{ maxWidth: "500px" }}>
      {console.log(phims)}
      {renderThongTinPhim(phims)}
    </Box>
  );
}
