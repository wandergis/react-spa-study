import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link , IndexRoute , Lifecycle} from 'react-router';

import App from './components/App';
import Users from './components/Users'
import About from './components/About'
import User from './components/User'
import createBrowserHistory from 'history/lib/createBrowserHistory'
require('./assets/style.css');
//$.ajax('http://www.baidu.com');
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));

//const routes = {
//  path: '/',
//  component: App,
//  childRoutes: [
//    { path: 'about', component: About },
//    { path: 'users', component: Users }
//  ]
//};

//const CourseRoute = {
//  path: 'course/:courseId',
//
//  getChildRoutes(location, callback) {
//    require.ensure([], function (require) {
//      callback(null, [
//        require('./routes/Announcements'),
//        require('./routes/Assignments'),
//        require('./routes/Grades'),
//      ])
//    })
//  },
//
//  getIndexRoute(location, callback) {
//    require.ensure([], function (require) {
//      callback(null, require('./components/Index'))
//    })
//  },
//
//  getComponents(location, callback) {
//    require.ensure([], function (require) {
//      callback(null, require('./components/Course'))
//    })
//  }
//};

//React.render(<Router history={createBrowserHistory()} routes={routes} />, document.getElementById('root'));