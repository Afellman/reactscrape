import React, { Component } from 'react';
import API from '../../utils/scrape'
import styles from './side_bar.css'




class SideBar extends Component {
  constructor(props){
    super(props)  
  }
  
  state = {
    
  }
  saveAstroid = (astroid) => {
  
    API.save(astroid)
  }

  render() {
    return(
      <div className="search-results">
        <ul className="list-group">
          {this.props.results.map(result => {
            let object = {
              name: result.name,
              size: {
                min:result.estimated_diameter.feet.estimated_diameter_min,
                max: result.estimated_diameter.feet.estimated_diameter_max },
              distance: result.close_approach_data[0].miss_distance.miles,
              speed: result.close_approach_data[0].relative_velocity.miles_per_hour
            }
            
            return (
            <li key={result.name} className={result.name} onMouseEnter={this.props.glow}>
              <p><b>Name: </b> {result.name}</p>
              <p><b>Size: </b> Min {result.estimated_diameter.feet.estimated_diameter_min} -  <br/> Max {result.estimated_diameter.feet.estimated_diameter_max }</p>
              <p><b>Distance: </b> {result.close_approach_data[0].miss_distance.miles}</p>
              <p><b>Speed: </b> {result.close_approach_data[0].relative_velocity.miles_per_hour}</p>
              <button 
                className="btn" 
                value={object}
                onClick={()=>{this.saveAstroid(object)}}>Save</button>
              <hr/>
            </li>
          )}
        )}
      </ul>
    </div>
    )
  }
}

export default SideBar;
