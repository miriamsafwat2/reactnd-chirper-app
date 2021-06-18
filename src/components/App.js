import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount(){
      this.props.dispatch(handleReceiveData())
  }

  render() {
    return (
      <div>
        < LoadingBar />
        < Dashboard />
      </div>
    )
  }
}

export default connect()(App)