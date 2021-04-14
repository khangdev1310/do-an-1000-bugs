import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
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
import shout from "./../../assets/shout.svg";
import Logo1 from "./../../assets/entertainment.png";
import Logo2 from "./../../assets/cinema.png";
import schedule from "./../../assets/schedule.svg";
import multimedia from "./../../assets/multimedia.svg";
import login from "./../../assets/login.svg";
import loupe from "./../../assets/loupe.svg";
import { useStyles } from "./style";
import { Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";

// export default function PrimarySearchAppBar() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const dispatch = useDispatch();

//   const renderUserWelcome = () => {
//     if (localStorage.getItem("USER")) {
//       const localUser = JSON.parse(localStorage.getItem("USER"));
//       return <Typography>Xin chào, {localUser.hoTen}</Typography>;
//     } else {
//       return <AccountCircle />;
//     }
//   };

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const handleChangeModal = () => {
//     dispatch({
//       type: "CHANGE_MODAL_OPEN",
//     });
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: "top", horizontal: "right" }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton aria-label="show 11 new notifications" color="inherit">
//           <Badge badgeContent={11} color="secondary">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <div className={classes.grow}>
//       <AppBar
//         position="fixed"
//         style={{ top: "auto", bottom: 0, zIndex: "9000" }}
//         className={classes.bgColor}
//       >
//         <Toolbar style={{ width: "90%", margin: "0 auto" }}>
//           <Link to="/" style={{ textDecoration: "none", color: "#FAFAFA" }}>
//             <Typography className={classes.title} variant="h6" noWrap>
//               <img
//                 src={Logo2}
//                 width="115px"
//                 style={{ position: "absolute", bottom: "10%" }}
//               />
//             </Typography>
//           </Link>
//           <div className={classes.grow} />
//           <Box display="flex" className={classes.navContainer}>
//             <Box>
//               <Link
//                 to="/promotion"
//                 style={{ textDecoration: "none", color: "#FAFAFA" }}
//               >
//                 <Box display="flex" justifyContent="center">
//                   <img src={shout} width="30px" />
//                 </Box>
//                 <Typography>Khuyến mãi</Typography>
//               </Link>
//             </Box>
//             <Box>
//               <Link
//                 to="/lich-chieu"
//                 style={{ textDecoration: "none", color: "#FAFAFA" }}
//               >
//                 <Box display="flex" justifyContent="center">
//                   <img src={schedule} width="30px" style={{ color: "blue" }} />
//                 </Box>
//                 <Typography>Lịch chiếu</Typography>
//               </Link>
//             </Box>
//             <Box>
//               <Box className={classes.searchContainer}>
//                 <button
//                   onClick={handleChangeModal}
//                   style={{
//                     backgroundColor: "transparent",
//                     border: "none",
//                     color: "#FAFAFA",
//                   }}
//                 >
//                   {" "}
//                   <SearchIcon style={{ fontSize: "1.5rem" }} />
//                 </button>
//               </Box>
//             </Box>
//             <Box>
//               <Link
//                 to="/movie"
//                 style={{ textDecoration: "none", color: "#FAFAFA" }}
//               >
//                 <Box display="flex" justifyContent="center">
//                   <img src={multimedia} width="30px" />
//                 </Box>
//                 <Typography>Phim</Typography>
//               </Link>
//             </Box>
//             <Box>
//               <Link
//                 to="/signin"
//                 style={{ textDecoration: "none", color: "#FAFAFA" }}
//               >
//                 <Box display="flex" justifyContent="center">
//                   <img src={login} width="30px" />
//                 </Box>
//                 <Typography>Đăng nhập</Typography>
//               </Link>
//             </Box>
//           </Box>
//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               {/* <AccountCircle /> */}
//               {renderUserWelcome()}
//             </IconButton>
//           </div>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleChangeModal = () => {
    dispatch({
      type: "CHANGE_MODAL_OPEN",
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  const handleUserLogout = () => {
    localStorage.removeItem("USER");
  };

  const renderUserWelcome = () => {
    if (localStorage.getItem("USER")) {
      const localUser = JSON.parse(localStorage.getItem("USER"));
      return (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.hideSignMobile}
          onClick={handleClick}
        >
          <Typography
            style={{
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Xin chào, {localUser.hoTen}
          </Typography>
          <Popper id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div className={classes.paper}>
                  <Box>
                    <Typography className={classes.settingsTextPopper}>
                      Thông tin cá nhân
                    </Typography>
                  </Box>
                  <Box onClick={() => handleUserLogout()}>
                    <Typography className={classes.settingsTextPopper}>
                      Đăng xuất
                    </Typography>
                  </Box>
                </div>
              </Fade>
            )}
          </Popper>
        </Box>
      );
    } else {
      return (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.hideSignMobile}
        >
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#FAFAFA" }}
          >
            <Box display="flex" justifyContent="center">
              <img src={login} width="30px" />
            </Box>
            <Typography>Đăng nhập</Typography>
          </Link>
        </Box>
      );
    }
  };
  return (
    <nav className={`navbar navbar-expand-lg ${classes.bgColor} fixed-bottom`}>
      <div className="container">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-2">
            <a className="navbar-brand">
              <img
                src={Logo2}
                width="115px"
                style={{ position: "absolute", bottom: "0" }}
              />
            </a>
          </div>
          <div className="col-8">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mr-auto d-flex"
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <li className="nav-item active">
                  <Box style={{ margin: "0 1rem" }}>
                    <Link
                      to="/movie"
                      style={{
                        textDecoration: "none",
                        color: "#FAFAFA",
                      }}
                    >
                      <Box display="flex" justifyContent="center">
                        <img src={multimedia} width="30px" />
                      </Box>
                      <Typography>Phim</Typography>
                    </Link>
                  </Box>
                </li>
                <li className="nav-item">
                  <Box style={{ margin: "0 1rem" }}>
                    <Link
                      to="/promotion"
                      style={{ textDecoration: "none", color: "#FAFAFA" }}
                    >
                      <Box display="flex" justifyContent="center">
                        <img src={shout} width="30px" />
                      </Box>
                      <Typography>Khuyến mãi</Typography>
                    </Link>
                  </Box>
                </li>
                <li className="nav-item">
                  <Box
                    className={classes.searchContainer}
                    style={{ margin: "0 1rem" }}
                  >
                    <button
                      onClick={handleChangeModal}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FAFAFA",
                      }}
                    >
                      <SearchIcon style={{ fontSize: "1.5rem" }} />
                    </button>
                  </Box>
                </li>
                <li className="nav-item">
                  <Box>
                    <Link
                      to="/lich-chieu"
                      style={{ textDecoration: "none", color: "#FAFAFA" }}
                    >
                      <Box display="flex" justifyContent="center">
                        <img
                          src={schedule}
                          width="30px"
                          style={{ color: "blue" }}
                        />
                      </Box>
                      <Typography>Lịch chiếu</Typography>
                    </Link>
                  </Box>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderUserWelcome()}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />=
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
