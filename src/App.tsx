import * as React from 'react';
import './App.css';
import MyButton from './componets/MyButton';
import BeginButton from './componets/BeginButton';

const logo = require('./logo.svg');

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { 
      isStarted: false,
      waitTime: this.randomTime()
    };
  }

  randomTime(): number {
    return Math.round(Math.random() * 5000);
  }

  startGame = () => {
    this.setState({ isStarted: true });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Check Your Reaction Time!</h2>
        </div>
        <div className="App-content">
          <div className="App-instruction">
            <p className="App-text">
              1. Click Start button 
            </p>
            <p className="App-text">
              2. Click as soon as you can when the butten shows 'CLICK!'
            </p>
          </div>
          { !this.state.isStarted && 
            <BeginButton onClick={this.startGame}/>
          }
          { this.state.isStarted && 
            <MyButton waitTime={this.state.waitTime} />
          }
        </div>
      </div>
    );
  }
}

export default App;
