import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Saved from './pages/Saved'
import Search from './pages/Search'
import Navbar from './components/nav'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/astroids" component={Search} />
      </Switch>
      <Footer />
    </div>
  </Router>
    );
  }
}

export default App;
