import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import DynamicContext from './dynamicContext';
// import contextInNestedComponent from './contextInNestedComponent';

class LearnContext extends Component{
  constructor(props){
    super(props)

    this.state={
      list:[
        'dynamicContext'
        // 'contextInNestedComponent'
      ]
    }
  }

  render(){
    return (
      <div>
        <p>learn context</p>
        <ul>
          {
            this.state.list.map((child)=>(
              <li key={child}>
                <Link to={`${this.props.match.url}/${child}`}>{child}</Link>
              </li>
            ))
          }
        </ul>

        <Route path={`${this.props.match.url}/dynamicContext`} component={DynamicContext} />
      </div>
    )
  }
}

export default LearnContext;