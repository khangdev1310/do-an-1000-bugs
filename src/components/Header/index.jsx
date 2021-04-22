import React, { useState } from "react";
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
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

// export default function Navbar() {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const handleChangeModal = () => {
//     dispatch({
//       type: "CHANGE_MODAL_OPEN",
//     });
//   };

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(anchorEl ? null : event.currentTarget);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "transitions-popper" : undefined;

//   const handleUserLogout = () => {
//     localStorage.removeItem("USER");
//     window.location.reload();
//   };

//   const renderUserWelcome = () => {
//     if (localStorage.getItem("USER")) {
//       const localUser = JSON.parse(localStorage.getItem("USER"));
//       return (
//         <Box
//           display="flex"
//           justifyContent="center"
//           className={classes.hideSignMobile}
//           onClick={handleClick}
//         >
//           <Typography
//             style={{
//               color: "white",
//               cursor: "pointer",
//               fontSize: "18px",
//               fontWeight: "500",
//             }}
//           >
//             Xin chào,{" "}
//             {localUser.hoTen.length > 8
//               ? localUser.hoTen.substring(0, 6) + "..."
//               : localUser.hoTen}
//           </Typography>
//           <Popper id={id} open={open} anchorEl={anchorEl} transition>
//             {({ TransitionProps }) => (
//               <Fade {...TransitionProps} timeout={350}>
//                 <div className={classes.paper}>
//                   <Box>
//                     <Link to="/profile" style={{ textDecoration: "none" }}>
//                       <Typography className={classes.settingsTextPopper}>
//                         Thông tin cá nhân
//                       </Typography>
//                     </Link>
//                   </Box>
//                   <Box onClick={() => handleUserLogout()}>
//                     <Typography className={classes.settingsTextPopper}>
//                       Đăng xuất
//                     </Typography>
//                   </Box>
//                 </div>
//               </Fade>
//             )}
//           </Popper>
//         </Box>
//       );
//     } else {
//       return (
//         <Box
//           display="flex"
//           justifyContent="center"
//           className={classes.hideSignMobile}
//         >
//           <Link
//             to="/signin"
//             style={{ textDecoration: "none", color: "#FAFAFA" }}
//           >
//             <Box display="flex" justifyContent="center">
//               <img src={login} width="30px" />
//             </Box>
//             <Typography>Đăng nhập</Typography>
//           </Link>
//         </Box>
//       );
//     }
//   };
//   return (
//     <nav className={`navbar navbar-expand-lg ${classes.bgColor} fixed-bottom`}>
//       <div className="container">
//         <div className="row" style={{ width: "100%" }}>
//           <div className="col-2">
//             <Box>
//               <Link to="/">
//                 <img
//                   src={Logo2}
//                   width="115px"
//                   style={{ position: "absolute", bottom: "0" }}
//                 />
//               </Link>
//             </Box>
//           </div>
//           <div className={`col-8 ${classes.hideOnMobile}`}>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className={`navbar-nav mr-auto d-flex ${classes.navItems}`}>
//                 <li className="nav-item">
//                   <Box style={{ margin: "0 1rem" }}>
//                     <Link
//                       to="/promotion"
//                       style={{ textDecoration: "none", color: "#FAFAFA" }}
//                     >
//                       <Box className={classes.navMobile}>
//                         <img src={shout} width="30px" />
//                         <Typography>Khuyến mãi</Typography>
//                       </Box>
//                     </Link>
//                   </Box>
//                 </li>
//                 <li className="nav-item">
//                   <Box
//                     className={classes.searchContainer}
//                     style={{ margin: "0 1rem" }}
//                     onClick={handleChangeModal}
//                   >
//                     <button
//                       style={{
//                         backgroundColor: "transparent",
//                         border: "none",
//                         color: "#FAFAFA",
//                       }}
//                     >
//                       <SearchIcon style={{ fontSize: "1.5rem" }} />
//                     </button>
//                   </Box>
//                 </li>
//                 <li className="nav-item">
//                   <Box style={{ margin: "0 1rem" }}>
//                     <Link
//                       to="/lich-chieu"
//                       style={{ textDecoration: "none", color: "#FAFAFA" }}
//                     >
//                       <Box className={classes.navMobile}>
//                         <img
//                           src={schedule}
//                           width="30px"
//                           style={{ color: "blue" }}
//                         />
//                         <Typography>Lịch chiếu</Typography>
//                       </Box>
//                     </Link>
//                   </Box>
//                 </li>
//                 <li className="nav-item">
//                   <Box style={{ margin: "0 1rem" }}>
//                     <Link
//                       to="/admin"
//                       style={{ textDecoration: "none", color: "#FAFAFA" }}
//                     >
//                       <Box className={classes.navMobile}>
//                         <SupervisorAccountIcon />
//                         <Typography>Admin</Typography>
//                       </Box>
//                     </Link>
//                   </Box>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div
//             className="col-2"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {renderUserWelcome()}
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon" />=
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

export const Header = () => {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  const dispatch = useDispatch();
  const handleChangeModal = () => {
    dispatch({
      type: "CHANGE_MODAL_OPEN",
    });
  };

  const handleUserLogout = () => {
    localStorage.removeItem("USER");
    window.location.reload();
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const NavForMobile = () => {
    return (
      <div>
        <div
          className={`${openNav ? classes.wrapper : ""}`}
          onClick={() => setOpenNav(!openNav)}
        ></div>
        <div
          className={`${classes.navForMobile} ${
            openNav ? classes.activeNavForMobile : ""
          }`}
        >
          <Box className={classes.container}>
            {/* Nút đóng mở và hiện thị tên user */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box onClick={() => setOpenNav(!openNav)}>
                <MenuIcon style={{ fontSize: "2rem" }} />
              </Box>
              <Box>
                <Typography variant="h6">Xin chào, Gia An</Typography>
              </Box>
            </Box>
            {/* //*/}
            <hr color="#585858" />

            {/* Promotion */}
            <Box display="flex" alignItems="center">
              <Box>
                <img src={shout} width="30px" />
              </Box>
              <Box>
                <Typography className={classes.titleForMobile}>
                  Khuyến mãi
                </Typography>
              </Box>
            </Box>
            {/* //*/}
            <hr color="#585858" />

            {/* Search */}
            <Box display="flex" alignItems="center">
              <Box className={classes.searchContainerMobile}>
                <SearchIcon style={{ fontSize: "1rem", color: "#FAFAFA" }} />
              </Box>
              <Box>
                <Typography className={classes.titleForMobile}>
                  Tìm phim
                </Typography>
              </Box>
            </Box>
            {/* //*/}
            <hr color="#585858" />

            {/* Lịch chiếu */}
            <Box display="flex" alignItems="center">
              <Box>
                <img src={schedule} width="30px" style={{ color: "blue" }} />
              </Box>
              <Box>
                <Typography className={classes.titleForMobile}>
                  Lịch chiếu
                </Typography>
              </Box>
            </Box>
            {/* //*/}
            <hr color="#585858" />
          </Box>
        </div>
      </div>
    );
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
          <Box textAlign="center">
            <Typography style={{ cursor: "pointer" }}>
              Xin chào,{" "}
              <Typography
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {localUser.hoTen.length > 15
                  ? localUser.hoTen.substring(0, 15) + "..."
                  : localUser.hoTen}
              </Typography>
            </Typography>
          </Box>
          <Popper id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div className={classes.paper}>
                  <Box>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                      <Typography className={classes.settingsTextPopper}>
                        Thông tin cá nhân
                      </Typography>
                    </Link>
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
    <>
      {NavForMobile()}
      <div className={`${classes.root}`}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Box>
              <Link to="/">
                <img
                  src={Logo2}
                  width="115px"
                  style={{ position: "fixed", bottom: "0" }}
                />
              </Link>
            </Box>
            <Box variant="h6" className={classes.title}>
              <Box style={{ margin: "0 1rem" }}>
                <Link
                  to="/promotion"
                  style={{ textDecoration: "none", color: "#FAFAFA" }}
                >
                  <Box className={classes.navItems}>
                    <img src={shout} width="30px" />
                    <Typography>Khuyến mãi</Typography>
                  </Box>
                </Link>
              </Box>
              <Box style={{ margin: "0 1rem" }}>
                <Box className={classes.navItems} onClick={handleChangeModal}>
                  <button className={classes.searchContainer}>
                    <SearchIcon
                      style={{ fontSize: "1.5rem", color: "#FAFAFA" }}
                    />
                  </button>
                </Box>
              </Box>
              <Box style={{ margin: "0 1rem" }}>
                <Link
                  to="/lich-chieu"
                  style={{ textDecoration: "none", color: "#FAFAFA" }}
                >
                  <Box className={classes.navItems}>
                    <img
                      src={schedule}
                      width="30px"
                      style={{ color: "blue" }}
                    />
                    <Typography>Lịch chiếu</Typography>
                  </Box>
                </Link>
              </Box>
            </Box>

            <Box>
              <Box className={classes.hideOnMobile}>{renderUserWelcome()}</Box>
              <Box
                onClick={() => setOpenNav(!openNav)}
                className={classes.hideOnDesktop}
              >
                <MenuIcon />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
