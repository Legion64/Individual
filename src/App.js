import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
