import { expect } from 'chai';
import { createStore } from 'redux';
import counterReducer from '../src/counter.reducer.js';

let store;

describe('counter reducer', function() {

  beforeEach(function() {
    // runs before all tests in this block
    store = createStore(counterReducer);
  });

  it('should initally be 0', function(){
      expect(store.getState().counterReducer).to.equal(0);
  });

  it('should equal one after dispatching ADD', function(){
      store.dispatch({type: 'ADD'});
      expect(store.getState().counterReducer).to.equal(1);
  });

  it('should equal negative after dispatching SUBTRACT', function(){
      store.dispatch({type: 'SUBTRACT'});
      expect(store.getState().counterReducer).to.equal(-1);
  });
});
