import React from "react";
import { useStyle } from "./style";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Box, Button, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const BookingTicketBar = () => {
  const classes = useStyle();

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
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
  ];
  return (
    <div className={classes.bgColor}>
      <Box className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={2} spacing={0}>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <CssTextField {...params} label="Phim" variant="outlined" />
                )}
              />
            </Grid>
            <Grid container item xs={2} spacing={0}>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
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
            <Grid container item xs={2} spacing={0}>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Rạp" variant="outlined" />
                )}
              />
            </Grid>
            <Grid container item xs={2} spacing={0}>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Ngày xem" variant="outlined" />
                )}
              />
            </Grid>
            <Grid container item xs={2} spacing={0}>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Xuất chiếu"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid container item xs={2} spacing={0}>
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
  );
};

export default BookingTicketBar;
