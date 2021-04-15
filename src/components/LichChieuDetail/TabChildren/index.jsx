import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_REQUESTS_SAGA } from "../../../container/HomeTemplate/Home/modules/redux/constants";
import NgayGioChieu from "./NgayGioChieu";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "670px",
  },
}));

export default function TabChildren() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const cumRaps = useSelector((state) => state.MovieReducer.cumRap);
  const maHeThongRap = useSelector((state) => state.MovieReducer.maHeThongRap);
  const movieTitle = useSelector(
    (state) => state.MovieDetailReducer.movieDetail
  );
  const movieDetailLichChieu = useSelector(
    (state) => state.MovieReducer.movieDetailLichChieu
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (movieTitle) {
      dispatch({
        type: FETCH_THONG_TIN_LICH_CHIEU_PHIM_TABS_REQUESTS_SAGA,
        payload: movieTitle.maPhim,
      });
    }
  }, [movieTitle]);

  const renderNgay = () => {
    if (movieDetailLichChieu) {
      let arr = movieDetailLichChieu.heThongRapChieu.filter((cumRap) => {
        return cumRap.maHeThongRap === maHeThongRap;
      });
      let rapChieu = arr[0]?.cumRapChieu.map((cumRap) => {
        return cumRap;
      });
      const listDay = rapChieu?.map((lichChieus) => {
        return lichChieus.lichChieuPhim.map((lichChieu) => {
          return new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString();
        });
      });

      const arrDay = listDay === undefined ? ["none"] : [...listDay];
      const arr1d = [].concat(...arrDay);

      const listDayShow = new Set(
        arr1d.map((day) => {
          return new Date(day).toLocaleDateString();
        })
      );
      const listDayShowTabs = [...listDayShow];

      return listDayShowTabs.map((day, index) => {
        return <Tab label={day} {...a11yProps(index)} />;
      });
    }
  };

  const renderNoiDung = () => {
    if (movieDetailLichChieu) {
      console.log(movieDetailLichChieu);
      let arr = movieDetailLichChieu.heThongRapChieu.filter((cumRap) => {
        return cumRap.maHeThongRap === maHeThongRap;
      });
      let rapChieu = arr[0]?.cumRapChieu.map((cumRap) => {
        return cumRap;
      });
      console.log(rapChieu);
      const listDay = rapChieu?.map((lichChieus) => {
        return lichChieus.lichChieuPhim.map((lichChieu) => {
          return new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString();
        });
      });

      const arrDay = listDay === undefined ? ["none"] : [...listDay];
      const arr1d = [].concat(...arrDay);
      const listDayShow = new Set(
        arr1d.map((day) => {
          return new Date(day).toLocaleDateString();
        })
      );
      const listDayShowTabs = [...listDayShow];

      return listDayShowTabs.map((day, index) => {
        return (
          <TabPanel value={value} index={index}>
            <NgayGioChieu day={day} rapChieu={rapChieu} />
          </TabPanel>
        );
      });
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {renderNgay()}
        </Tabs>
      </AppBar>
      {renderNoiDung()}
    </div>
  );
}