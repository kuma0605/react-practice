import React from "react";
import { Route, Switch } from "react-router-dom";
import LearnContext from './learnContext';

// 如果下列路由有子路由，父路由中不能添加exact, 若添加，子路由不能渲染出来
// 为什么会这样呢？

export default ()=>
  <Switch>
    <Route path='/learnContext' component={LearnContext}></Route>
  </Switch>
