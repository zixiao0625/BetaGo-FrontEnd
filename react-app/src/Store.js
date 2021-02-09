import React, {createContext, useReducer} from 'react';
// Store.js create context store for global state management
// In the components that need to access global store 
// import store from Store.js
// const [state,dispatch] = useContext(store)
// the state is read only global state data
// dispatch can change the state through pre-defined action
// example : dispatch({type:"action description", data:"xxx"})


// Set up the Global state here (The state here is that need to be accessed globally)
const initialState = {};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
    // add action here to change the state
      case 'action description':
        const newState = {}// do something with state through the action
        return newState; // new state will be the new global state
      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }