import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Page_home";
import Quadrinho from "./pages/Page_view_quarinho";
import Page_view_personagem_all from "./pages/Page_view_personagem_all";
import Form_pesquisa from "./services/Pesquisa";

import "./pages/scss/reset.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="home">
              <Header />
              <Form_pesquisa />
              <Home />
            </div>
          </Route>

          <Route path="/pesquisa/:id" component={Page_view_personagem_all} />

          <Route path="/quadrinho/:id" component={Quadrinho} />

        </Switch>
      </Router>
    </div >
  );
}
export default App;
