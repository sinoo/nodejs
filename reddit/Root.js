import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

import { createStore } from 'redux';
import rootReducer from './reducers';

const stores = createStore(rootReducer);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}