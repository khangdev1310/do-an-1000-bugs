import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const Summarize = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="row" alignItems="space-between">
      <Box className={classes.wrapperEach}>
        <Box className={classes.seat}>
          <Typography
            variant="caption"
            style={{
              lineHeight: "80%",
              color: "transparent",
              fontSize: "10px",
            }}
          >
            &nbsp;
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption">Ghế thường</Typography>
        </Box>
      </Box>

      <Box className={classes.wrapperEach}>
        <Box className={classes.seatVip}>
          <Typography
            variant="caption"
            style={{
              lineHeight: "80%",
              color: "transparent",
              fontSize: "10px",
            }}
          >
            &nbsp;
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption">Ghế VIP</Typography>
        </Box>
      </Box>

      <Box className={classes.wrapperEach}>
        <Box className={classes.bookingSeat}>
          <Typography
            variant="caption"
            style={{
              lineHeight: "80%",
              color: "transparent",
              fontSize: "10px",
            }}
          >
            &nbsp;
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption">Ghế đang chọn</Typography>
        </Box>
      </Box>

      <Box className={classes.wrapperEach}>
        <Box className={classes.bookedSeat}>
          <Typography
            variant="caption"
            style={{
              lineHeight: "80%",
              color: "transparent",
              fontSize: "10px",
            }}
          >
            &nbsp;
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption">Ghế đã có người chọn</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Summarize;
