import React from 'react';
import Home from "./pages/Page_home";
import Page_detalhes from "./pages/Page_view_detalhes";
import Personagem from "./pages/Page_Personagem";

import "./pages/scss/reset.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/quadrinho/detalhes/:id" component={Page_detalhes} />

          <Route path="/personagem/pesquisa/:id" component={Personagem} />
          <Route path="/personagem/detalhes/:id" component={Page_detalhes} />

          <Route path="/personagem/" component={Personagem} />

        </Switch>
      </Router>
    </div >
  );
}
export default App;
