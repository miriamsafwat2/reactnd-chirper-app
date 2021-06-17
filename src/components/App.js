import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveData } from '../actions/shared'

class App extends Component {
  componentDidMount(){
      this.props.dispatch(handleReceiveData())
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)