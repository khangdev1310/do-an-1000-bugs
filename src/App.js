import HomeTemplate from "./container/HomeTemplate";
import { routesHome } from "./routes";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PageNotFound from "./container/PageNotFound";

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

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {showLayoutHome(routesHome)}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
