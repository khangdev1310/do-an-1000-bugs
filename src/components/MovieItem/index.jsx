import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const MovieItem = ({ movie }) => {
  const { hinhAnh, biDanh, tenPhim } = movie;
  const classes = useStyles();
  return (
    <div
      className={classes.item}
      onClick={() => {
        console.log(movie);
      }}
    >
      <Box className={classes.poster}>
        <img src={hinhAnh} alt={biDanh} width="100%" height="100%" />
        <div className={classes.overlay}></div>
      </Box>
      <Box>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>{tenPhim}</Typography>
          {/* <Typography>100 phút</Typography> */}
        </Box>
      </Box>
      <Box className={classes.buyTicketButton}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buyTicketButton}
        >
          CHI TIẾT
        </Button>
      </Box>
    </div>
  );
};

export default MovieItem;
