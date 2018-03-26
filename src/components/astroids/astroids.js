import React, { Component } from 'react';
import API from '../../utils/scrape'
import styles from './astroids.css'




const Astroids = props => {

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
      let x_center = (window.innerWidth / 2) - 25;
      let y_center = (window.innerHeight / 2) - 25;
      var ctx = document.getElementById('myCanvas').getContext('2d');
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear canvas
      ctx.save();
      ctx.translate(x_center, y_center);
      // Drawing earth
      ctx.shadowColor = "#d6d6d66c";
      ctx.shadowBlur = 20;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.drawImage(earth, 0, 0, 50 , 50);
      ctx.translate(25, 25);
      time = time + 0.1
      props.results.forEach(element => {
  
        ctx.save()
        let sizeFull = element.estimated_diameter.feet.estimated_diameter_max;
        let speedFull = element.close_approach_data[0].relative_velocity.miles_per_hour;
        let distanceFull = element.close_approach_data[0].miss_distance.miles;
        let size = sizeFull / 10;
        let speed = ((speedFull / 100000) * time);
        let distance = distanceFull / 20000;

        // scaling back the super far away ones
        if (distance > 1000) {
          distance = distance / 4.5
        }
        
        // rotating, setting distance from earth and drawing astroid.
        ctx.shadowColor = "#d6d6d66c";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.rotate(((2 * Math.PI) / 60) * speed);
        ctx.translate(distance, 0);
        ctx.drawImage(astroid, -12, -12, size, size);
        ctx.restore()
      });
     

      ctx.restore();
      
    

      window.requestAnimationFrame(draw);
    }

  init();
  
  }

if(props.results.length > 1) {
  startAni()
}
{console.log(props.results)}
  return(
    <div>
      <canvas id="myCanvas" width={window.innerWidth} height={window.innerHeight}></canvas>
    </div>
  )
  }
export default Astroids;
