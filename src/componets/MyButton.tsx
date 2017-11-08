import * as React from 'react';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import lightBaseTheme from '../../node_modules/material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';

class MyButton extends React.Component<MyButtonProps, MyButtonState> {
  style = {
    margin: 48,
    fontWeight: 600,
    height: 48
  };

  constructor(props: MyButtonProps) {
    super();
    this.state = {
      canClick: false,
      waitTime: props.waitTime
    };
    setTimeout(() => this.clickNow(), this.state.waitTime);
  }

  clickNow() {
    this.setState({
      canClick: true,
      startTime: new Date()
    });
  }

  stop = () => {
    let stopTime = new Date();
    this.setState({
      endTime: stopTime
    });
    let reactionTime: number = (stopTime.getTime() - this.state.startTime!.getTime());
    
    alert('Your Reaction Time is ' + reactionTime + ' ms');
    location.reload();    
  }

  failed = () => {
    alert('You Failed....');
    location.reload();
  }

  render() {
    let button = null;
    
    if (this.state.canClick) {
      button = <RaisedButton label="CLICK!" primary={true} style={this.style} onClick={this.stop} />;
    } else {
      button = <RaisedButton label="WAIT..." secondary={true} style={this.style} onClick={this.failed} />;
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        {button}
      </MuiThemeProvider>
    );
  }
}

export default MyButton;