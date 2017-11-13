import * as React from 'react';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import lightBaseTheme from '../../node_modules/material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from '../../node_modules/material-ui/styles/getMuiTheme';

class ReloadButton extends React.Component<{}, {}> {
  style = {
    margin: 48,
    fontWeight: 600,
    height: 48
  };

  ReloadButton() {
    location.reload();
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <RaisedButton label="Play Again" primary={true} style={this.style} onClick={this.ReloadButton} />
      </MuiThemeProvider>
    );
  }
}

export default ReloadButton;