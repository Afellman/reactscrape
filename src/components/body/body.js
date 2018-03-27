import React from 'react';
import './body.css'
const Body = () => (
  <div className="body">
    <p>
      Simple app made with ReactJS that gets info from nasa about all the astroids orbiting earth, 
      within a reasonable distance, on any given date. The data is then represented
      by my first attempt playing with HTML 5 Canvas. The default date is today.
    </p>
    <p>
      The speed and size of the astroids are relative to each other but not the 
      earth. Their distances are reletive to the earth (by size scale) except 
      for the furthest of them away which I had to bring closer so they fit 
      on the screen. Even so, some astroids will fly off the screen, or be gone 
      completely. This is a <a href="https://io9.gizmodo.com/heres-why-its-impossible-to-have-a-model-solar-system-t-1731616787">
      common problem </a> when dealing with things on an astronomical scale. 

    </p>
    <h4 className="text-center">Click The Astroids Tab to Begin</h4>
  </div>
)

export default Body;