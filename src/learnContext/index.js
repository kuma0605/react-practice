import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import DynamicContext from './dynamicContext';
import contextInNestedComponent from './contextInNestedComponent';
import ConsumeMultiContext from './consumeMultiContext';

class LearnContext extends Component{
  constructor(props){
    super(props)
    
    this.state={
      list:[
        'dynamicContext',
        'contextInNestedComponent',
        'consumeMultiContext'
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
        <Route path={`${this.props.match.url}/contextInNestedComponent`} component={contextInNestedComponent} />
        {/* <Route path={`${this.props.match.url}/consumeMultiContext`} component={ConsumeMultiContext} /> */}
        <Route path={`${this.props.match.url}/consumeMultiContext`} render={props => <ConsumeMultiContext signedUser={{name:'kuma'}} theme={'dark'} /> } />
      </div>
    )
  }
}

export default LearnContext;