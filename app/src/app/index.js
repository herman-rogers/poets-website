import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import HomePage from '../home/HomePage';
import BlogPage from '../blog/BlogPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog" component={BlogPage} />
    </Switch>
  );
}

export default hot(module)(App);
