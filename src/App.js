import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";

function App() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);
  return (
    <div className="App">
      <Switch>
        {/* Private Route */}
        <PrivateRoute path="/" exact component={Home} />
        {/* Public Routes */}
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
