import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Page_home";
import Quadrinho from "./pages/Page_view_quarinho";
import Pesquisa from "./pages/Page_pesquisa";
import Teste from "./pages/teste";

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">
          <Header />
        </Link>
        <Switch>

          <Route exact path="/">
            <Home />
            {/* <Teste /> */}
          </Route>

          {/* <Route path="/:id_view_quadinho" component={Quadrinho} /> */}

          {/* <Route path="/:id">
            <Pesquisa />
          </Route> */}

          {/* <Route exact path="/:id" component={Pesquisa} /> */}
          {/* <Route path="/pesquisa" seach="teste" component={Pesquisa} /> */}
          <Route path="/pesquisa/:id" component={Pesquisa} />

          <Route path="/quadrinho/:id" component={Quadrinho} />


        </Switch>
      </Router>
    </div >
  );
}
export default App;
