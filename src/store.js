function createStore(reducer){
  let state;
  let listeners = [];
  const subscribe = (listener) => {
    listeners.push(listener);
  };
  const getState = () => {
    return state;
  };
  const dispatch = (action) => {
   state = reducer(state, action) //using a reducer like this makes the constructor reusable across implementations
   listeners.forEach( listener => listener() )
  }

  dispatch({}) //sets the starting state to the default value in the reducer
  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}

export default createStore;
