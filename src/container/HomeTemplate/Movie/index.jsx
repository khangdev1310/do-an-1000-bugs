import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useStyle } from "./style";
import poster1 from "./../../../assets/money-heist.jpg";
import poster2 from "./../../../assets/the100.jpg";
import poster3 from "./../../../assets/tenet.jpg";
import poster4 from "./../../../assets/inception.jpg";
import Slider from "react-slick";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Movie = () => {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.root}>
      <Box className={classes.bgColor}>
        <Box className={classes.container}>
          <AppBar position="static" className={classes.bgNavTab}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              centered
            >
              <Tab label="Đang chiếu" {...a11yProps(0)} />
              <Tab label="Sắp chiếu" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Slider {...settings}>
              <Grid container>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster1}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster2}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster3}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster4}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container spacing={1} style={{ marginTop: "2rem" }}>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster4}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster3}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster2}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster1}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster1}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster2}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster3}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster4}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container spacing={1} style={{ marginTop: "2rem" }}>
                  <Grid container item xs={12} spacing={3}>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster4}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster3}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster2}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="318"
                          width="100%"
                          image={poster1}
                          title="Contemplative Reptile"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Slider>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={3} className={classes.wrapper}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="test"
                        height="100%"
                        width="100%"
                        image={poster2}
                        title="test"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                          115 phút
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Grid>
                <Grid item xs={3} className={classes.wrapper}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="test"
                        height="100%"
                        width="100%"
                        image={poster2}
                        title="test"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                          115 phút
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Grid>
                <Grid item xs={3} className={classes.wrapper}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="test"
                        height="100%"
                        width="100%"
                        image={poster2}
                        title="test"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                          115 phút
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Grid>
                <Grid item xs={3} className={classes.wrapper}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="test"
                        height="100%"
                        width="100%"
                        image={poster2}
                        title="test"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                          115 phút
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={1} style={{ marginTop: "2rem" }}>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={3} className={classes.wrapper}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="test"
                        height="100%"
                        width="100%"
                        image={poster2}
                        title="test"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                          115 phút
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Grid>
                <Grid item xs={3} className={classes.wrapper}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="test"
                        height="100%"
                        width="100%"
                        image={poster2}
                        title="test"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                          115 phút
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Grid>
                <Grid item xs={3} className={classes.wrapper}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="test"
                        height="100%"
                        width="100%"
                        image={poster2}
                        title="test"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                          115 phút
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Grid>
                <Grid item xs={3} className={classes.wrapper}>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="test"
                        height="100%"
                        width="100%"
                        image={poster2}
                        title="test"
                      />
                      <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Lizard
                        </Typography>
                        <Typography variant="body2" component="p">
                          115 phút
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </Grid>
              </Grid>
              {/* <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid> */}
            </Grid>
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
};

export default Movie;
