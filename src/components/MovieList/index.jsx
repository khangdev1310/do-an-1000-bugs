import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./style";

const MovieList = () => {
  const classes = useStyle();
  return (
    <Box style={{ height: "100vh" }}>
      <Typography>Aloo alo</Typography>
    </Box>
  );
};

export default MovieList;
