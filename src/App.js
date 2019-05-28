import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, withRouter } from 'react-router-dom';
import Routes from "./Routes";

function App({match}) {
  
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to='/learnContext'>learn context</Link>
          </li>
          <li>
            <Link to='/learnRefs'>learn refs</Link>
          </li>
        </ul>
      </header>
      <Routes></Routes>
    </div>
  );
}

export default withRouter(App);
