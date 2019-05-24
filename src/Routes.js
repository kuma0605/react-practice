import React from "react";
import { Route, Switch } from "react-router-dom";
import LearnContext from './context';

export default ()=>
  <Switch>
    <Route path='/learnContext' exact component={LearnContext}></Route>
  </Switch>
