import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Feed from './components/feed'
import Main from './components/main';
import Results from './components/results';

export default () =>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main}/>
      <Route exact path="/fb" component={Feed}/>
      <Route exact path="/fb/results" component={Results}/>
    </div>
  </BrowserRouter>