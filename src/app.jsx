import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 

class App extends React.Component {	
  render() {
    return (
      <div className="App">
      <header className="App-header">
        Test
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
