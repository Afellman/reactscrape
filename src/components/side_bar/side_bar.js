import React, { Component } from 'react';
import API from '../../utils/scrape'
import styles from './side_bar.css'



const SideBar = props => {
  
 
 
  return(
    <div className="search-results">
      <ul className="list-group">
        {props.results.map(result =>
        <li key={result.name}>
          <p>Name: {result.name}</p>
          <p>Size: {result.estimated_diameter.feet.estimated_diameter_min} - {result.estimated_diameter.feet.estimated_diameter_max }</p>
          <p>Distance: {result.close_approach_data[0].miss_distance.miles}</p>
          <p>Speed: {result.close_approach_data[0].relative_velocity.miles_per_hour}</p>
          <hr/>
        </li>
      )}
    </ul>
  </div>
  )
  }
export default SideBar;
