import * as React from 'react';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import lightBaseTheme from '../../node_modules/material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';

class BeginButton extends React.Component<BeginButtonProps, {}> {
  style = {
    margin: 48,
    fontWeight: 600,
    height: 48
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <RaisedButton label="START!" primary={true} style={this.style} onClick={this.props.onClick}/>
      </MuiThemeProvider>
    );
  }
}

export default BeginButton;