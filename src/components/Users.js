/**
 * Created by WangMing on 15/12/14.
 */
import React, { Component } from 'react';
import User from './User'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <User></User>
      </div>
    )
  }
}