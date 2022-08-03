import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() { 
    super();

    this.state = {
      name: {firstName: 'Renato', lastName: 'Hernandez'},
      company: 'ZTm'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey {this.state.name.firstName} and I work at {this.state.company}!!
          </p>
          <button onClick={() => { 
            // this.state.name = "Juan";
            this.setState(
              (previousState, props) => {
                return {
                  name: {firstName: 'Carlos Renato', lastName: 'Rivas'},
                }
              },
              () => {
                console.log(this.state);
              })
            
          }}>Change</button> 
        </header>
      </div>
    );
  }
}

export default App;