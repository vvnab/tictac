import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Field from './Field';



class App extends Component {
  render() {
    return (
      <div className="app">
        <Field size={3}/>
      </div>
    );
  }
}

export default App;
