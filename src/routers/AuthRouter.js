import { Switch, Route } from "react-router-dom";

// Auth Components
import Login from "../auth/Login/Login";

export default function AuthRouter() {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  );
}
