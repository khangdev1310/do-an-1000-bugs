import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./style";

const MovieSection = () => {
  const classes = useStyle();
  return (
    <Box className={classes.section}>
      <Box className={classes.container}>
        <Box className={classes.homeTitle}>
          <Typography
            variant="h3"
            component="h3"
            style={{
              display: "inline-block",
              backgroundColor: "#FAFAFA",
              padding: "0 0.5rem",
            }}
          >
            MOVIE SECTION
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieSection;
