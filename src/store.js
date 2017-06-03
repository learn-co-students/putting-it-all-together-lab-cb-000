export const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
  }

  const dispatch = (action) => {
    state = reducer(state, action);
    //invoke each listener
    listeners.forEach(listener => listener());
  }
  //call empty dispatch to set state
  dispatch({});

  return {
    getState: getState,
    subscribe: subscribe,
    dispatch: dispatch
  }
}
