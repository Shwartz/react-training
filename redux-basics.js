const redux = require('redux');
// This file won't have anything for React app, example for node.js
const createStore = redux.createStore;

// could be 1 or whatever but mostly it is an object since many items stored
const initialSate = {
    counter: 0
};

// REDUCER, is only one, even if we use many it will be combined to one similar how components tree is working
const rootReducer = (state = initialSate, action) => {
    return state;
};

// STORE
const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
// To run in node, $ node redux-basics.js


// DISPATCHING ACTION

// SUBSCRIPTION