import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './features/Home'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
		        <Route exact path='/' component={Home} />
          </div>
	      </BrowserRouter>
      </div>
    );
  }
}

export default App;
