import React from 'react';
import Home from "./pages/Page_home";
import Page_details from "./pages/Page_view_details";
import Character from "./pages/Page_character";

import "./pages/scss/reset.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/comic/details/:id" component={Page_details} />

          <Route path="/character/search/:id" component={Character} />
          <Route path="/character/details/:id" component={Page_details} />

          <Route path="/character/" component={Character} />

        </Switch>
      </Router>
    </div >
  );
}
export default App;
