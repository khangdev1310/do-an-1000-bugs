import { useStyle } from "./style";
import React, { useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box, Button, Grid, Typography, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import cinemaIcon from "./../../assets/cinema.svg";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];

const TransitionsModal = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.MovieReducer.isModal);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(isModal);
  }, [isModal]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={
          (handleClose,
          () =>
            dispatch({
              type: "CHANGE_MODAL_OPEN",
            }))
        }
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box className={classes.container}>
              <Box className={classes.searchContainer}>
                <SearchIcon style={{ fontSize: "1.5rem" }} />
              </Box>
              <Typography
                style={{
                  color: "violet",
                  margin: "1rem 0",
                  fontWeight: "bold",
                }}
                variant="h4"
              >
                Tìm ngay phim bạn thích!
              </Typography>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid item md={12} className={classes.gridItems}>
                    <Autocomplete
                      classes={classes}
                      size="small"
                      fullWidth="true"
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Phim"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item md={12} className={classes.gridItems}>
                    <Autocomplete
                      classes={classes}
                      size="small"
                      fullWidth="true"
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Cụm rạp"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item md={12} className={classes.gridItems}>
                    <Autocomplete
                      classes={classes}
                      size="small"
                      fullWidth="true"
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField {...params} label="Rạp" variant="outlined" />
                      )}
                    />
                  </Grid>
                  <Grid item md={8} className={classes.gridItems}>
                    <Autocomplete
                      classes={classes}
                      size="small"
                      fullWidth="true"
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Ngày chiếu"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item md={4} className={classes.gridItems}>
                    <Autocomplete
                      classes={classes}
                      size="small"
                      fullWidth="true"
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Suất chiếu"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Button variant="contained" className={classes.buttonBuyTicket}>
                  <img src={cinemaIcon} width="30px" />
                  <Typography
                    variant="span"
                    style={{ marginLeft: "5px", color: "#FAFAFA" }}
                  >
                    Mua vé
                  </Typography>
                </Button>
              </div>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
