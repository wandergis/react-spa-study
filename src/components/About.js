/**
 * Created by WangMing on 15/12/14.
 */
import React, { Component } from 'react';
import  {Link , Lifecycle}  from 'react-router'
//export default class App extends Component {
//
//  // 假设 Home 是一个 route 组件，它可能会使用
//  // Lifecycle mixin 去获得一个 routerWillLeave 方法。
//  constructor(props) {
//    super(props);
//    this.mixins = [Lifecycle];
//  }
//
//  routerWillLeave(nextLocation) {
//    if (!this.state.isSaved){
//      return 'Your work is not saved! Are you sure you want to leave?'
//  }}
//  render() {
//    return (
//      <h1>这个是About页面</h1>
//    );
//  }
//}

const App = React.createClass({

  // 假设 Home 是一个 route 组件，它可能会使用
  // Lifecycle mixin 去获得一个 routerWillLeave 方法。
  mixins: [ Lifecycle ],

  routerWillLeave(nextLocation) {
    if (!this.state)
      return 'Your work is not saved! Are you sure you want to leave?'
  },
  render() {
    return (
      <h1>这个是About页面</h1>
    );
  }

});
//module.exports=App;
export default App;