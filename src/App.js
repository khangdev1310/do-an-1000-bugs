import HomeTemplate from "./container/HomeTemplate";
import { routesHome } from "./routes";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PageNotFound from "./container/PageNotFound";
import SignIn from "./container/HomeTemplate/Signin";
import SignUp from "./container/HomeTemplate/Signup";
import { Provider } from "react-redux";
import Test from "./container/Test";
import store from "./redux/reducers/configStore";
import Detail from "./container/HomeTemplate/Detail";
import Dashboard from "./container/AdminTemplate/Dashboard/Dashboard";
import SignInAdmin from "./container/AdminTemplate/Signin";

function App() {
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

  // const showLayoutAdmin = (routes) => {
  //   if (routes && routes.length > 0) {
  //     return routes.map((route, index) => {});
  //   }
  // };

  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Switch>
          {showLayoutHome(routesHome)}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/test" component={Test} />
          <Route path="/admin" component={SignInAdmin} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
