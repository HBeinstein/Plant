const hydrate = (plant) => {
  return {
    ...plant, // making a copy/inheriting behavior from plant object to instantiate new plant
    water: (plant.water || 0) + 1
  }
};