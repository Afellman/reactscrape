import React, { Component } from 'react';
import Jumbotron from '../components/jumbotron';
import API from '../utils/scrape';
import Card from '../components/cards/cards'
import './saved.css'

class Saved extends Component {
  state = {
    banner: "Saved Astroids",
    savedAstroids : []
  }

  componentDidMount(){
    API.getsaved().then((results) => {
      this.setState({savedAstroids: results.data})
    })
  }


  render() {
    console.log(this.state.savedAstroids)
    return (
      <div>
        <Jumbotron banner={this.state.banner}/>
        <div class='container'>
        <div className="row">
        {this.state.savedAstroids.map((element)=> {
          return (
            <Card astroid={element}/>
          )
        })}
        </div>
        </div>
      </div>
    );
  }
}

export default Saved;
