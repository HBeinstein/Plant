class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  

    const hydrate = (plant) => { // plant is an object being passed as a parameter 
      return {
        ...plant, // making a copy/inheriting behavior from plant object to instantiate new plant
        water: (plant.water || 0) + 1 // updating the amount of water the plant receives
      }
    }
  }
}