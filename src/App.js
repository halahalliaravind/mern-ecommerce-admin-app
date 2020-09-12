import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Private Route */}
          <PrivateRoute path="/" exact component={Home} />
          {/* Public Routes */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
