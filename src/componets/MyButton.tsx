import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class MyButton extends React.Component<MyButtonProps, MyButtonState> {
  style = {
    margin: 48,
    fontWeight: 600,
    height: 48
  };
  timeout: any;

  constructor(props: MyButtonProps) {
    super();
    this.state = {
      canClick: false,
      clicked: false,
      waitTime: props.waitTime
    };
    this.timeout = setTimeout(() => this.clickNow(), this.state.waitTime);
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
      clicked: true,
      endTime: stopTime
    });
    let reactionTime: number = (stopTime.getTime() - this.state.startTime!.getTime());
    
    this.props.onSuccess(reactionTime);
  }

  failed = () => {
    this.setState({
      clicked: true
    });
    clearTimeout(this.timeout);

    this.props.onFailure();
  }

  render() {
    let button = <div />;
    
    if (this.state.canClick) {
      button = (
        <RaisedButton 
          label="CLICK!" 
          primary={true} 
          style={this.style} 
          onClick={this.stop} 
          disabled={this.state.clicked} 
        />
      );
    } else {
      button = (
        <RaisedButton 
          label="WAIT..." 
          secondary={true} 
          style={this.style} 
          onClick={this.failed}
          disabled={this.state.clicked} 
        />
      );
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        {button}
      </MuiThemeProvider>
    );
  }
}

export default MyButton;