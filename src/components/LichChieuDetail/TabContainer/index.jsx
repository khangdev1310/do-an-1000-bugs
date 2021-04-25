import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TabChildren from "../TabChildren";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_MA_HE_THONG,
  FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
} from "../../../container/HomeTemplate/Home/modules/redux/constants";
import { v4 as uuidv4 } from "uuid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
    color: "#000",

    "& .MuiBox-root": {
      padding: "0rem",
      // maxHeight: "500px",
      // overflow: "scroll",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function TabContainer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const heThongRaps = useSelector((state) => state.MovieReducer.theater);
  const maHeThongRap = useSelector((state) => state.MovieReducer.maHeThongRap);

  useEffect(() => {
    dispatch({
      type: FETCH_LAY_THONG_TIN_LICH_CHIEU_HE_THONG_RAP_REQUESTS_SAGA,
      payload: maHeThongRap,
    });
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderHeThongRaps = () => {
    return heThongRaps.map((heThongRap, index) => {
      return (
        <Tab
          key={uuidv4()}
          label={<img src={heThongRap.logo} width="50px" height="50px" />}
          onClick={() => {
            const maHeThongRap = heThongRap.maHeThongRap;
            dispatch({
              type: CHANGE_MA_HE_THONG,
              payload: maHeThongRap,
            });
          }}
          {...a11yProps(Number(index))}
        />
      );
    });
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {renderHeThongRaps()}
      </Tabs>
      <TabPanel value={1} index={1}>
        <TabChildren />
      </TabPanel>
    </div>
  );
}
