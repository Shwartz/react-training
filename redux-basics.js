const redux = require('redux');
// !!! This file won't have anything for React app, example for node.js
// It shows all main building blocks only
const createStore = redux.createStore;

// could be 1 or whatever but mostly it is an object since many items stored
const initialSate = {
    counter: 0
};

// REDUCER, is only one, even if we use many it will be combined to one similar how components tree is working
const rootReducer = (state = initialSate, action) => {
    if (action.type === 'INC_COUNTER') {
        //NEVER mutate date, copy trough spread op object and overwrite new objects params
        // if that inside obj has obj create another spread
        // spread is not working for node 6: https://stackoverflow.com/questions/40066731/node-v6-failing-on-object-spread
        return {
          ...state,
            counter: state.counter + 1
        };
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// STORE
const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
// To run in node, $ node redux-basics.js


// SUBSCRIPTION
// subscription is getting triggered whenever dispatch is happening
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});


// DISPATCHING ACTION
// type - required property, convention to use uppercase for values
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log('store.getState()', store.getState());