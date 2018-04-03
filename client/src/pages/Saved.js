import React, { Component } from 'react';
import Jumbotron from '../components/jumbotron';
import API from '../utils/scrape';
import Card from '../components/cards/cards'
import './saved.css'
import { setInterval } from 'timers';

class Saved extends Component {

  state = {
    banner: "Saved Astroids",
    savedAstroids : [],
    fizzyDisplay: false,
    style: {
      opacity: 0
    }
  }

  componentDidMount(){
    this.getSaved()
  }

  getSaved = () => {
    API.getsaved().then((results) => {
      this.setState({savedAstroids: results.data})
    })
  }
  deleteOne = (astroid) => {
    API.deleteOne(astroid)
    this.showDeleteMessage()
    this.getSaved()
  }

  showDeleteMessage = () => {
    this.setState({fizzyDisplay: true})
    let i = 0
    let full = false;
    const myInter = setInterval(()=> {
      if(i < 1 && !full) {
        i = i+0.01
      } else {
        full = true
        i = i-0.01
      }
      if(i< 0) {
        clearInterval(myInter)
        this.setState({style : {opacity: 0}, fizzyDisplay: false })
      }
      this.setState({style: {opacity: i}})
    }, 10)
  }

  render() {
    return (
      <div>
        <Jumbotron banner={this.state.banner}/>
        <div class='container'>
          {this.state.fizzyDisplay ? 
            <div style={this.state.style} className="fizzy">
              <h4>Astroid Deleted</h4>
            </div> 
          : null}
          <div className="row">
            {this.state.savedAstroids.map((element)=> {
              return (<Card astroid={element} deleteOne={this.deleteOne} fizzy={this.state.fizzyDisplay}/>)
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
