import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { changePlantState } from './../src/plant.js'; 

$(document).ready(function () {
  let plant = { soil: 0, light: 0, water: 0 };

  let newPlant = changePlantState(plant, "soil");
});