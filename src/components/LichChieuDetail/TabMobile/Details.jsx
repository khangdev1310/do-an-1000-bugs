import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import hinhAnhRap from "./../../../assets/cns.jpeg";
import { Box, Grid } from "@material-ui/core";
import Ngay from "./Ngay";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiAccordionDetails-root": {
      padding: "1rem",
    },
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Details = ({ heThongRap, heThongRapChieu }) => {
  const classes = useStyles();

  const renderNgayChieu = () => {
    const checkmaHeThongRap = heThongRapChieu?.heThongRapChieu.filter(
      (maHeThongRap) => {
        return maHeThongRap.maHeThongRap === heThongRap.maHeThongRap;
      }
    );
    if (checkmaHeThongRap && checkmaHeThongRap.length > 0) {
      const showRapChieu = checkmaHeThongRap[0].cumRapChieu.map((rap) => {
        return rap;
      });
      return showRapChieu.map((show) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container>
                <Grid item xs={2}>
                  <img src={hinhAnhRap} width="50px" height="50px" />
                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.heading}>
                    {show.tenCumRap}
                  </Typography>
                  <Typography>Chi tiết</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Ngay details={show} />
            </AccordionDetails>
          </Accordion>
        );
      });
    } else {
      return (
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Không có lịch chiếu
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      );
    }
  };
  return (
    <div className={classes.root}>
      {renderNgayChieu()}
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
};

export default Details;
