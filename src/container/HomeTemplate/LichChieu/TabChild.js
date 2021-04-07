import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import ChildTabs from "./Children";

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
    backgroundColor: "transparent !important",
    display: "flex",
    height: "500px",
    overflow: "scroll",

    "& .MuiTabs-indicator": {
      backgroundColor: "#f50057 !important",
    },
    "& .MuiTabScrollButton-vertical": {
      display: "none",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function TabChild() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const cumRaps = useSelector((state) => state.MovieReducer.cumRap);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderCumRaps = () => {
    return cumRaps[0]?.lstCumRap.map((cumRap, index) => {
      return (
        <Tab
          label={
            <>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={2}>
                    <img src={cumRaps[0].logo} width="40px" height="40px" />
                  </Grid>
                  <Grid item xs={10}>
                    <Box style={{ textAlign: "left", marginLeft: "0.5rem" }}>
                      <Typography style={{ fontSize: "14px" }}>
                        {cumRap.tenCumRap}
                      </Typography>

                      <Typography style={{ fontSize: "10px" }}>
                        {cumRap.diaChi.length > 30
                          ? cumRap.diaChi.slice(0, 30) + "..."
                          : cumRap.diaChi}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </>
          }
          key={index}
          {...a11yProps(Number(index))}
        />
      );
    });
  };

  const renderDanhSachPhim = () => {
    return cumRaps[0]?.lstCumRap.map((phims, index) => {
      return (
        <TabPanel value={value} index={index} key={index}>
          <ChildTabs phims={phims} />
        </TabPanel>
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
        {renderCumRaps()}
      </Tabs>
      {renderDanhSachPhim()}
    </div>
  );
}