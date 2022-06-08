import React, { Component } from 'react'
import loading from './gif/loading3.gif'
export default class Loading extends Component {
  render() {
    return (
      <div style = {{display : 'flex', justifyContent: 'center', alignItems : 'center'}}>
        <img src={loading} alt="Loading..." />
      </div>
    )
  }
}
