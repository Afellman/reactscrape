import React, { Component } from 'react';
import './cards.css';
import API from '../../utils/scrape';

const Card = (props) => {

  // calling the function in the parent element to delete an astroid.
  function deleteSaved(astroid) {
    props.deleteOne(astroid.name)
  }
    return(
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h3 className='card-title'>Name: {props.astroid.name}</h3>
            <p>Distance: {props.astroid.distance}</p>
            <p>Size: {props.astroid.size.min}</p>
            <p>Speed: {props.astroid.speed}</p>
            <button 
              className='btn btn-primary' 
              value={props.astroid} 
              onClick={()=> {
              deleteSaved(props.astroid)}}>Delete</button> 
          </div>
        </div>
      </div>
    ) 
  }
export default Card;