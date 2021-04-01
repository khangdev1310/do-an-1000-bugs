import { useStyle } from "./style";
import React, { useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box, Button, Grid, Typography, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#FFF",
      },
      "& .MuiOutlinedInput-root": {
        // "& fieldset": {
        //   borderColor: "#000",
        // },
        "&.Mui-focused fieldset": {
          borderColor: "#000",
        },
      },
    },
  })(TextField);

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
                style={{ color: "violet", margin: "1rem 0" }}
                variant="h4"
              >
                Tìm ngay phim bạn thích!
              </Typography>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid container item md={12} sm={12} spacing={0}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      className={classes.inputField}
                      renderInput={(params) => (
                        <CssTextField
                          {...params}
                          label="Phim"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid container item md={12} sm={6} spacing={0}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      className={classes.inputField}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Rạp"
                          variant="outlined"
                          InputLabelProps={{
                            style: { color: "pink" },
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid container item md={12} sm={6} spacing={0}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      className={classes.inputField}
                      renderInput={(params) => (
                        <TextField {...params} label="Rạp" variant="outlined" />
                      )}
                    />
                  </Grid>
                  <Grid container item md={8} sm={6} spacing={0}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      className={classes.inputField}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Ngày xem"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid container item md={4} sm={6} spacing={0}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      className={classes.inputField}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Xuất chiếu"
                          variant="outlined"
                        />
                      )}
                    />
                  </Grid>
                  <Grid container item md={12} sm={12} spacing={0}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btn}
                    >
                      Đặt vé
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
