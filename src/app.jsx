import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 

class App extends React.Component {	
  render() {
    return (
      <div className="App">
      
       Application de gestion de stock hello
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
