import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

// components

// Router controllers
import AuthRouter from "./routers/AuthRouter";
import DashboardRouter from "./routers/DashboardRouter";

export default function App() {
  const tokenDate = Date.parse(Cookies.get("tokenDate"));
  if (
    Date.parse(new Date()) - tokenDate > 2 * 60 * 60 * 1000 ||
    tokenDate === undefined ||
    tokenDate === null ||
    isNaN(tokenDate)
  ) {
    Cookies.remove("token");
    Cookies.remove("tokenDate");
  }

  const token = Cookies.get("token");
  let loggedIn = false;

  if (token) {
    loggedIn = true;
  }

  // var maintenanceURL = window.location.href;
  // var maintenanceMode = true;
  // var maintenanceMode = false;

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/paypal/controller" component={PaypalController} />
        <Route path="/validating" component={DataLayerValidator} /> */}

        {loggedIn ? (
          <Route path="/" component={DashboardRouter} />
        ) : (
          <Route path="/" component={AuthRouter} />
        )}
      </Switch>
    </BrowserRouter>
  );
}
