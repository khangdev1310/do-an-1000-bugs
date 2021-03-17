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
    exact: true,
    path: "/signin",
    component: SignIn,
  },
  {
    exact: true,
    path: "/signup",
    component: SignUp,
  },
];
