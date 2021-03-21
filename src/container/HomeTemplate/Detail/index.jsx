import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyle } from "./style";

const Detail = (props) => {
  const classes = useStyle();
  const [state, setState] = useState({
    id: null,
  });

  useEffect(() => {
    getParams();
  }, []);

  const getParams = () => {
    console.log(props.match.params.id);
    setState({
      id: props.match.params.id,
    });
  };
  return (
    <Box className={classes.container}>
      <Typography>{state.id}</Typography>
    </Box>
  );
};
export default Detail;
