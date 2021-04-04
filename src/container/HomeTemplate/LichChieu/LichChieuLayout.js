import { Box } from "@material-ui/core";
import TabParents from "./TabParents";

const LayoutLichChieu = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(255,255,255,1)",
        border: "1px solid red",
        width: "980px",
        margin: "2rem auto",
      }}
    >
      <TabParents />
    </Box>
  );
};

const LichChieu = () => {
  return <LayoutLichChieu />;
};

export default LichChieu;
