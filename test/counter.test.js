import { expect } from 'chai';
import { createStore } from 'redux';
import counterReducer from '../src/counter.reducer.js';

let store;

describe('counter reducer', function() {
  // runs before all tests in this block
  beforeEach(function() {
    // this resets the store between each test
    store = createStore(counterReducer);
  });

  it('should initally be 0', function(){
      expect(store.getState().counterReducer).to.equal(0);
  });

  it('should be able to ADD', function(){
    store.dispatch({type: 'ADD'});
    expect(store.getState().counterReducer).to.equal(1);
    store.dispatch({type: 'ADD'});
    expect(store.getState().counterReducer).to.equal(2);
  });

  it('should be able to SUBTRACT', function(){
    store.dispatch({type: 'SUBTRACT'});
    expect(store.getState().counterReducer).to.equal(-1);
    store.dispatch({type: 'SUBTRACT'});
    expect(store.getState().counterReducer).to.equal(-2);
  });

  it('should be able to ADD & SUBTRACT', function(){
    store.dispatch({type: 'ADD'});
    expect(store.getState().counterReducer).to.equal(1);
    store.dispatch({type: 'SUBTRACT'});
    expect(store.getState().counterReducer).to.equal(0);
  });
});
