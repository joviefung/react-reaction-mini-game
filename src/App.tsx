import * as React from 'react';
import './App.css';
import MyButton from './componets/MyButton';
import BeginButton from './componets/BeginButton';
import ReloadButton from './componets/ReloadButton';

const logo = require('./logo.svg');
const FacebookShareButtonStyle = {
  border: 'none' as 'none', 
  overflow: 'hidden' as 'hidden',
  frameborder: 0,
  allowTransparency: true,
  scrolling: 'no',
  height: 20,
  width: 58
};
const FacebookShareButton = (
  <iframe 
    src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.google.com&layout=button"
    style={FacebookShareButtonStyle} 
  />);

class App extends React.Component<{}, AppState> {
  result: string = 'Your Reaction Time is ${time} ms.';
  bestRecord: string = 'Your Best Record is ${time} ms.';

  constructor(props: {}) {
    super(props);
    const record: number = parseInt(localStorage.getItem('best-record')!, 10) ? 
                             parseInt(localStorage.getItem('best-record')!, 10) : -1;
    this.state = { 
      isStarted: false,
      showResult: false,
      waitTime: this.randomTime(),
      bestRecord: record
    };
  }

  randomTime(): number {
    return Math.round(Math.random() * 5000);
  }

  startGame = () => {
    this.setState({ isStarted: true });
  }

  showResult = (reactTime: number) => {
    this.setState({ showResult: true });
    let newRecord = this.state.bestRecord;
    if (reactTime < this.state.bestRecord || this.state.bestRecord === -1) {
      localStorage.setItem('best-record', reactTime.toString());
      this.setState({ bestRecord: reactTime });
      newRecord = reactTime;
    }
    this.result = this.result.replace('${time}', reactTime.toString());
    this.bestRecord = this.bestRecord.replace('${time}', newRecord.toString());
  }

  playAgain = () => {
    this.setState({ showResult: true });
    this.result = 'You Failed...';
    this.bestRecord = this.bestRecord.replace('${time}', this.state.bestRecord.toString());
  }

  render() {
    return (
      <div className="App">
        <meta property="og:image" content={logo} />
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
            <MyButton waitTime={this.state.waitTime} onSuccess={this.showResult} onFailure={this.playAgain}/>
          }
          { this.state.showResult &&
            <div>
              <p className="App-text">
                {this.result} 
              </p>
              <p className="App-text">
                {this.bestRecord} 
              </p>
              <ReloadButton />
              <div>
                {FacebookShareButton}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
