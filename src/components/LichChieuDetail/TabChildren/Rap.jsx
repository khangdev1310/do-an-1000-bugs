import { Box, Typography } from "@material-ui/core";
import React from "react";
import Gio from "./Gio";

const Rap = ({ rapChieu, gioChieu }) => {
  console.log(rapChieu);
  console.log(gioChieu);

  const renderGio = () => {
    return rapChieu?.map((rap, indexRapChieu) => {
      return gioChieu?.map((gio, indexGioChieu) => {
        if (indexRapChieu === indexGioChieu) {
          return (
            <Box>
              <Typography>{rapChieu[indexRapChieu].tenCumRap}</Typography>
              <Gio gioChieu={gioChieu[indexRapChieu]} />
            </Box>
          );
        }
      });
    });
  };

  return <div>{renderGio()}</div>;
};

export default Rap;