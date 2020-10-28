import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 

class App extends React.Component {	
  render() {
    return (
      <div className="App">
      <header className="App-header">
       Application de gestion de stock
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
