import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { changeState } from './../src/item.js'; 
import { stateControl } from './../src/item.js'; 
import { feed } from './../src/item.js';
import { blueFood } from './../src/item.js';
import { hydrate } from './../src/item.js';
import { superWater } from './../src/item.js';


$(document).ready(function() {
  // const stateControl = storeState();

  // const feed = changeState("soil")(1);
  // const blueFood = changeState("soil")(5);

  // const hydrate = changeState("water")(1);
  // const superWater = changeState("water")(5);


  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  
    $('#feed').click(function() {
      const newState = stateControl(blueFood);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    });

    $('#hydrate').click(function() {
      const newState = stateControl(superWater);
      $('#hydrate-value').text(`Water: ${newState.water}`);
    });
  
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
    $('#show-state').click(function() {
      // We just need to call stateControl() without arguments to see our current state.
      const currentState = stateControl();
      $('#soil-value').text(`Soil: ${currentState.soil}`);
      $('#hydrate-value').text(`Water: ${currentState.water}`);
    });
  });