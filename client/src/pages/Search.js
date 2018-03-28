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
    runAni: false
  }

  // -------------- Function to get image data from api -----------------------
  getImages = (event) => {
    event.preventDefault();
    let nasaData = [];
    let date = this.state.date;
    // ** Find todays date and pass in **
    API.getApiData(date).then(res => {
      // traversing the object.
      let meteorsObj = res.data.near_earth_objects;
      // grabbing the first element in the object
      let meteors = meteorsObj[Object.keys(meteorsObj)[0]]
      this.setState({results: meteors,buttonDisplsy: false, detailsDisplay: true, runAni: true})
    })
    // removing buttons
     
  }
// --------------------------------------------------------

  // data binding? 
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

  glow = (event) => {
    this.setState({selectedAstroid: event.target.className})
  }
// ----------------------------------------------------------

// --------------- Stuff to render ----------------------
  render() {
    return (
      <div>
        {this.state.detailsDisplay ?
          <button type="submit" id="details" className="btn btn-dark" onClick={this.showBar}>Show Details</button>
        : null }  
        <ReactCSSTransitionGroup
          transitionName="side-bar"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.sideBarDisplay ? <SideBar results={this.state.results} glow={this.glow}/>  : null }
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
