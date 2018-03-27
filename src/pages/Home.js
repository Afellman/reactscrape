import React, { Component } from 'react';
import API from '../utils/scrape'
import Astroids from '../components/astroids'
import Jumbotron from '../components/jumbotron'
import Body from "../components/body";


class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron/>
        <Body/>
      </div>
    );
  }
}

export default Home;
