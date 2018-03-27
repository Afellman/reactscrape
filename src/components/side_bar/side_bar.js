import React, { Component } from 'react';
import API from '../../utils/scrape'
import styles from './side_bar.css'




const SideBar = props => {

  return(
    <div className="search-results">
      <ul className="list-group">
        {props.results.map(result =>
        <li key={result.name} className={result.name} onMouseEnter={props.glow}>
          <p><b>Name: </b> {result.name}</p>
          <p><b>Size: </b> Min {result.estimated_diameter.feet.estimated_diameter_min} -  <br/> Max {result.estimated_diameter.feet.estimated_diameter_max }</p>
          <p><b>Distance: </b> {result.close_approach_data[0].miss_distance.miles}</p>
          <p><b>Speed: </b> {result.close_approach_data[0].relative_velocity.miles_per_hour}</p>
          <button className="btn">Save</button>
          <hr/>
        </li>
      )}
    </ul>
  </div>
  )
  }
export default SideBar;
