import React from 'react'
import Styles from './jumbotron.css';

const Jumbotron = (props) => (
  <div>
    <div className="jumbotron">
      <h1 className="welcome text-center">{props.banner}</h1>
    </div>
  </div>
)


export default Jumbotron;