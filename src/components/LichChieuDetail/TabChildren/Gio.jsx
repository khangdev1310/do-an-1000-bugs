import { Box, Link } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Gio = ({ gioChieu }) => {
  const history = useHistory();
  console.log(gioChieu);

  const renderGio = () => {
    if (gioChieu.length > 0) {
      return gioChieu.map((gios) => {
        return (
          <Box
            style={{
              cursor: "pointer",
              padding: "0.5rem 1rem",
              backgroundColor: "pink",
              margin: "0.5rem ",
              borderRadius: "7px",
              display: "inline-block",
            }}
            onClick={() => history.push(`/checkout/${gios.maLichChieu}`)}
          >
            {gios.ngayChieuGioChieu.slice(-8, -3)}
          </Box>
        );
      });
    }
  };
  return <>{renderGio()}</>;
};

export default Gio;
