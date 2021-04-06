import HomeTemplate from "./container/HomeTemplate";
import { routesHome } from "./routes";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PageNotFound from "./container/PageNotFound";
import SignIn from "./container/HomeTemplate/Signin";
import SignUp from "./container/HomeTemplate/Signup";
import { Provider } from "react-redux";
import store from "./redux/reducers/configStore";
import Detail from "./container/HomeTemplate/Detail";
import Dashboard from "./container/AdminTemplate/Dashboard/Dashboard";
import SignInAdmin from "./container/AdminTemplate/Signin";
import PhongVe from "./container/HomeTemplate/PhongVe";
import {
  FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
  FETCH_MOVIES_REQUESTS_SAGA,
} from "./container/HomeTemplate/Home/modules/redux/constants";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_MOVIES_REQUESTS_SAGA,
    });
    dispatch({
      type: FETCH_LAY_THONG_TIN_HE_THONG_RAP_REQUESTS_SAGA,
    });
  }, []);

  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <HomeTemplate
            exact
            path={route.path}
            component={route.component}
            key={index}
          />
        );
      });
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {showLayoutHome(routesHome)}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/movie/:id" component={Detail} />
          <Route exact path="/checkout" component={PhongVe} />
          <Route exact path="/admin" component={SignInAdmin} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
