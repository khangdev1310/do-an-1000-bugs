import Detail from "../container/HomeTemplate/Detail";
import Home from "../container/HomeTemplate/Home";
import SignIn from "../container/HomeTemplate/Signin";
import SignUp from "../container/HomeTemplate/Signup";

export const routesHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: Detail,
  },
];
