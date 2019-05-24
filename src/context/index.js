import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LearnContext extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        learn context<br/>
        <a target='new' href='https://zh-hans.reactjs.org/docs/context.html'>react context</a>
      </div>
    )
  }
}

export default LearnContext;