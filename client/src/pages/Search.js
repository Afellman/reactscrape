import React, { Component } from 'react';
import API from '../utils/scrape'
import Astroids from '../components/astroids'
import SideBar from "../components/side_bar"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import './search.css'



class Search extends Component {
  // -- Setting the state
  
  state = {
    date: "",
    results: [],
    sideBarDisplay : false,
    buttonDisplsy: true,
    detailsDisplay: false,
    selectedAstroid: "",
    runAni: false,
    fizzyDisplay: false,
    style: {
      opacity:0
    }
  }

  // -------------- Function to get image data from api -----------------------

  getImages = (event) => {
    event.preventDefault();
    let nasaData = [];
    let date = this.state.date;
    API.getApiData(date).then(res => {
      // traversing the object.
      let meteorsObj = res.data.near_earth_objects;
      // grabbing the first element in the object
      let meteors = meteorsObj[Object.keys(meteorsObj)[0]]

      this.setState({results: meteors, buttonDisplsy: false, detailsDisplay: true, runAni: true})
    })
  }
// --------------------------------------------------------
 // updating the date in state.
  updateDate = (event) => {
    event.preventDefault()
    this.setState({date: event.target.value})
  }

  // --------------- Function to show/hide sidebar -------------------
  showBar = (event) => {
    event.preventDefault()
    if (this.state.sideBarDisplay) {
      this.setState({sideBarDisplay: false})  
    } else {
      this.setState({sideBarDisplay: true})
    }
  }

  // --------------------------------------------------------------
  saveAstroid = (astroid) => {
    this.showSavedMessage()
    API.save(astroid)
  }


  showSavedMessage = () => {
    // interval loop for displaying the 'Astroid Saved' pop up, fading the 
    // opacity in and out.
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
// ----------------------------------------------------------

// --------------- Stuff to render ----------------------
  render() {
    return (
      <div>
        {/* div for displaying saved message */}
        {this.state.fizzyDisplay ? 
          <div style={this.state.style} className="fizzy">
            <h4>Astroid Saved</h4>
          </div> 
        : null}
        {/* div for displaying the details button. Loads when date is picked */}
        {this.state.detailsDisplay ?
          <button type="submit" id="details" className="btn btn-dark" onClick={this.showBar}>Show Details</button>
        : null }  
        {/* react component for css animations */}
        <ReactCSSTransitionGroup
          transitionName="side-bar"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {/* sidebar component that displays when the details button is click */}
          {this.state.sideBarDisplay ? <SideBar saveAstroid={this.saveAstroid} results={this.state.results}/>  : null }
          {/* Library for applying css transitions in react. */}
        </ReactCSSTransitionGroup>
        {this.state.buttonDisplsy ? 
          <div className="search-buttons">
            <h3>Choose a date</h3>
            <input id="" type="date" value={this.state.date} onChange={this.updateDate.bind(this)}/>
            <button type="submit" className="btn btn-dark" onClick={this.getImages}>Submit</button>
          </div>
        : null }
        <Astroids selectedAstroid={this.state.selectedAstroid} ani={this.state.runAni} results={this.state.results}/>
      </div>
    );
  }
}

export default Search;
  