import React, { Component } from 'react'
import Container from './src/container'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
