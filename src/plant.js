// class Plant { // we no longer need the constructor and class because we are creating it in out main.js
//   constructor() {
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
  

    // const hydrate = (plant) => { // plant is an object being passed as a parameter 
    //   return {
    //     ...plant, // making a copy/inheriting behavior from plant object to instantiate new plant
    //     water: (plant.water || 0) + 1 // updating the amount of water the plant receives
    //   }
    // };

    // const feed = (plant) => {
    //   return {
    //     ...plant, 
    //     soil: (plant.soil || 0) + 1
    //   }
    // };

    export const changePlantState = (plant, property) => { // this function replaces both the above functions 
      return {
        ...plant,
        [property]: (plant.property || 0) + 1
      }
    };



