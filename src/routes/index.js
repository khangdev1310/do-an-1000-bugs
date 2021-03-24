import Detail from "../container/HomeTemplate/Detail";
import Home from "../container/HomeTemplate/Home";
import Movie from "../container/HomeTemplate/Movie";
import SignIn from "../container/HomeTemplate/Signin";
import SignUp from "../container/HomeTemplate/Signup";
import Promotion from "../container/HomeTemplate/Promotion";

export const routesHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },

  {
    exact: false,
    path: "/movie",
    component: Movie,
  },
  {
    exact: false,
    path: "/promotion",
    component: Promotion,
  },
];
