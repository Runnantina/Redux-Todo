import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import TodoContainer from './TodoContainer'

const store = createStore(
  reducers
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div><TodoContainer/></div>
      </Provider>
    );
  }
}
