import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Gio from "./Gio";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Ngay = ({ details }) => {
  const classes = useStyles();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const iterLichChieuPhim = details.lichChieuPhim.map((lichChieuPhim) => {
    return new Date(lichChieuPhim.ngayChieuGioChieu).toLocaleDateString(
      "en-GB",
      options
    );
  });
  const set = new Set();
  let iterLichChieuPhim1 = [...iterLichChieuPhim];
  iterLichChieuPhim1.map((lichChieu) => {
    set.add(lichChieu);
  });
  const listDayShow = [...set];

  const renderNgay = () => {
    return listDayShow.map((day) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{day}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Gio details={details} day={day} />
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return <div className={classes.root}>{renderNgay()}</div>;
};

export default Ngay;
