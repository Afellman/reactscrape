import React, { Component } from 'react';
import './cards.css';
import API from '../../utils/scrape'
class Card extends Component {
  constructor(props){
    super(props)  
  }
  
  state = {
    
  }

  deleteSaved = (event) => {
    console.log(event.target.value.name)
    API.deleteOne(event.target.value.name)
  }
  render(){
    return(
        <div className='card col-md-4'>
        <div className='card-body'>
          <h3 className="card-title">Name: {this.props.astroid.name}</h3>
          <p>Distance: {this.props.astroid.distance}</p>
          <p>Size: {this.props.astroid.size.min}</p>
          <p>Speed: {this.props.astroid.speed}</p>
          <button className="btn btn-primary" value={this.props.astroid} onClick={this.deleteSaved}>Delete</button> 
        </div>
        </div>
    ) 
  }
}
export default Card;



// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>