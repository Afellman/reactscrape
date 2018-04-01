import React, { Component } from 'react';
import API from '../utils/scrape'
import Astroids from '../components/astroids'
import Jumbotron from '../components/jumbotron'
import Body from "../components/body";


class Home extends Component {
  state = {
    banner: "Floating Rocks"
  }
  render() {
    return (
      <div>
        <Jumbotron banner={this.state.banner}/>
        <Body/>
      </div>
    );
  }
}

export default Home;
