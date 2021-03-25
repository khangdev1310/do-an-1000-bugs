import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./style";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import logoCinema from "./../../assets/logoCinema.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
// import { Button } from "bootstrap";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div
      className={classes.grow}
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: 10,
      }}
    >
      <AppBar position="fixed" className={classes.bgColor}>
        <Toolbar style={{ width: "90%", margin: "0 auto" }}>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div> */}
          <div className={`col-2`}>
            <Typography className={classes.title} variant="h5" noWrap>
              <Link to="/" style={{ textDecoration: "none" }}>
                {/* <img
                  src={logoCinema}
                  width="200px"
                  style={{ transform: "rotate(-5deg)" }}
                /> */}
                <Typography
                  variant="h4"
                  style={{
                    color: "white",
                    fontFamily: "Lobster, cursive",
                    letterSpacing: "3px",
                  }}
                >
                  Alita
                </Typography>
              </Link>
            </Typography>
          </div>
          <div className={`col-6`} style={{ display: "flex" }}>
            <Typography className={`${classes.colorText}`} variant="h6" noWrap>
              <Link to="/movie">Phim</Link>
            </Typography>
            <Typography
              className={`${classes.colorText} ${classes.marginTextNavbar}`}
              variant="h6"
              noWrap
            >
              <Link to="/promotion">Promotion</Link>
            </Typography>
            <Typography className={`${classes.colorText}`} variant="h6" noWrap>
              <Link to="/gioi-thieu">Giới thiệu</Link>
            </Typography>
            <Typography className={`${classes.colorText}`} variant="h6" noWrap>
              <Link to="/test">Test Features</Link>
            </Typography>
          </div>
          <div className={`${classes.sectionDesktop} col-4 `}>
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                className={`${classes.btn} ${classes.btnFull}`}
              >
                <PersonIcon style={{ marginRight: "0.2rem" }} />
                Đăng kí
              </Button>
            </Link>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                className={`${classes.btn} ${classes.btnGhost}`}
              >
                <ExitToAppIcon style={{ marginRight: "0.2rem" }} />
                Đăng nhập
              </Button>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
