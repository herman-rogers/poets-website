import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import HomePage from '../home/HomePage';
import BlogPage from '../blog/BlogPage';
import Login from '../auth/Login';
import Callback from '../auth/Callback';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/callback" component={Callback} />
    </Switch>
  );
}

export default hot(module)(App);
