import React, { Component } from 'react';
import API from '../utils/scrape'
import Astroids from '../components/astroids'
import SideBar from "../components/side_bar"

class Search extends Component {
  // -- Setting the state
  
  state = {
    date: "",
    results: [],
    sideBarDisplay : false
  }
  // -- Function to get image data from api
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
      this.setState({results: meteors})
    })
  }

  updateDate = (event) => {
    event.preventDefault()
    this.setState({date: event.target.value})
  }

    showBar = (event) => {
      event.preventDefault()
      if (this.state.sideBarDisplay) {
        this.setState({sideBarDisplay: false})  
      } else {
        this.setState({sideBarDisplay: true})
      }
  }
  render() {
    return (
      <div>
        <div className="search-buttons">
          <button type="submit" style={{float: "right"}} className="btn btn-primary" onClick={this.showBar}>Show Details</button>
          {this.state.sideBarDisplay ? <SideBar results={this.state.results}/> : null }
          <input id="" className="btn btn-dark" type="date" value={this.state.date} onChange={this.updateDate.bind(this)}/>
          <button type="submit" onClick={this.getImages}>Submit</button>
        </div>
        <Astroids results={this.state.results}/>
      </div>
    );
  }
}

export default Search;
