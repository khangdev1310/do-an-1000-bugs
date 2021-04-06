import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const { hinhAnh, biDanh, tenPhim, maPhim } = movie;
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <Box className={classes.poster}>
        <img
          src={hinhAnh}
          alt={biDanh}
          width="100%"
          height="100%"
          style={{ borderRadius: "4px" }}
        />
        <div className={classes.overlay}></div>
      </Box>
      <Box>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title}>{tenPhim}</Typography>
          {/* <Typography>100 phút</Typography> */}
        </Box>
      </Box>
      <Box className={classes.buyTicketButton}>
        <Link to={`/movie/${maPhim}`}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buyTicketButton}
          >
            CHI TIẾT
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default MovieItem;
