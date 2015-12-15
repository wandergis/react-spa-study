/**
 * Created by WangMing on 15/12/14.
 */
import React, { Component } from 'react';
import  {Link , Lifecycle}  from 'react-router'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>

        {/*
         接着用 `this.props.children` 替换 `<Child>`
         router 会帮我们找到这个 children
         */}
        {this.props.children}
      </div>
    )
  }
}