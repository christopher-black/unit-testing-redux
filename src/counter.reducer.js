const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;

const counterReducer = (state = 0, action) => {
    if (action.type === 'ADD') {
        return state + 1;
    } else if (action.type === 'SUBTRACT') {
        return state - 1;
    }
    return state;
};

// The store only accepts one reducer
export default combineReducers({
  counterReducer,
});
