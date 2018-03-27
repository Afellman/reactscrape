import React, { Component } from 'react';
import API from '../../utils/scrape'
import styles from './astroids.css'




const Astroids = props => {

  // ------------------------- Canvas Stuff -------------------------------
  function startAni() {
    var sun = new Image();
    var astroid = new Image();
    var earth = new Image();
    var background = new Image();
    var time = 0.1;
    

    function init() {
      sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
      astroid.src = 'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/asteroid-icon.png';
      earth.src = 'https://vignette.wikia.nocookie.net/barsoom/images/1/1e/Earth.png/revision/latest?cb=20110912212924';
      window.requestAnimationFrame(draw);
    }

    function draw() {
      
      // getting screen center;
      let x_center = (window.innerWidth / 2) - 50;
      let y_center = (window.innerHeight / 2) - 100;

      // checking if the canvas is on the dom, otherwise the page has been changed
      // so stop the animation.
      if (document.getElementById('myCanvas')){
        var ctx = document.getElementById('myCanvas').getContext('2d');
      } else return;

       // clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.save();
      ctx.translate(x_center, y_center);

      // Drawing earth

      ctx.drawImage(earth, 0, 0, 100 , 100);
      ctx.translate(50, 50);
      time = time + 0.1
      // getting info from api.
      props.results.forEach(element => {
        ctx.save()
        let sizeFull = element.estimated_diameter.feet.estimated_diameter_max;
        let speedFull = element.close_approach_data[0].relative_velocity.miles_per_hour;
        let distanceFull = element.close_approach_data[0].miss_distance.miles;
        let size = sizeFull / 10;
        let speed = ((speedFull / 100000) * time);
        let distance = distanceFull / 20000;
        console.log(distance)
        // scaling back the super far away ones
        if (distance > 500) {
          distance = distance / 10.5
        }
        // trying to highlight selected astroid but teh ani keeps resetting
        if (props.selectedAstroid === element.name) {
          ctx.shadowColor = "white";
          ctx.shadowBlur = 20;
          ctx.shadowOffsetX = 5;
          ctx.shadowOffsetY = 5;
        }
        
        // rotating, setting distance from earth and drawing astroid.
        ctx.rotate(((2 * Math.PI) / 60) * speed);
        ctx.translate(distance, distance);
        ctx.drawImage(astroid, -12, -12, size, size);
        ctx.restore()

      });
      ctx.restore();
      window.requestAnimationFrame(draw);
    }
    init();
  }

  // ----------------------------------------------------------------

// Starting the animation when props is populated with the api results
  if(props.results.length > 1) {
    startAni()
  }
  return(
    <div>
      <canvas id="myCanvas" width={window.innerWidth} height={window.innerHeight - 65}></canvas>
    </div>
  )
}
export default Astroids;
