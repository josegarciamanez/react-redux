import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// constantes de acciones
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Reducer
const initialState = 0;

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}

// Store
const store = createStore(
  counter,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

store.subscribe(() => {
  console.log(store.getState());
});

// Creadores de acciones
const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

// Acciones
store.dispatch(increment());

setTimeout(() => {
  store.dispatch(decrement());
}, 2000);

// store.getState()
// store.dispatch()
// store.subscribe(fun)

export default store;
