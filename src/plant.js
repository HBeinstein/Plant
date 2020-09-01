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

    // const changeState = (state, prop, value) => ({ // this function replaces both the above functions
    //   ...state,
    //   [prop] : (state[prop] || 0) + value
    // })

    const changeState = (prop) => { // this function replaces the above function to make it more flexible when using other objects... in this case state = object 
      return (value) => { // this fat arrow
        return (state) => ({ // and this fat arrow are anonymous functions that are receiving value and then state as parameters
          ...state, // state is the object that we are calling on and prop is the property we are altering
        [prop]: (state.prop || 0) + value
        })
      }
    };

    


