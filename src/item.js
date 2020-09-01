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

    export const changeState = (prop) => { // this function replaces the above function to make it more flexible when using other objects... in this case state = object 
      return (value) => { // this fat arrow
        return (state) => ({ // and this fat arrow are anonymous functions that are receiving value and then state as parameters
          ...state, // state is the object that we are calling on and prop is the property we are altering
        [prop]: (state[prop] || 0) + value
        })
      }
    };

      // the stateChangeFunction is a placeholder for the changeState function from above. the state => state statement is saying that 
      // whatever object is passed into the storestate function, is also passed to the changeState function.
    export const storeState = () => {
      let currentState = {};
      return(stateChangeFunction = state => state) => { //  stateChangeFunction is an argument passed to anon function is a function itself as stated below
        const newState = stateChangeFunction(currentState);
        currentState = {...newState};
        return newState;
      }
    }

    export const stateControl = storeState();

    export const feed = changeState("soil")(1);
    export const blueFood = changeState("soil")(5);

    export const hydrate = changeState("water")(1);
    export const superWater = changeState("water")(5);




    
    


