import React, { Component } from 'react';
import './App.css';
import {Link } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';

// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// var divStyle = {
//   background: "#673AB7",
//   padding: "20px",
//   margin: "20px"
// };


class App extends Component {
  
  render() {
    return (
      
          <div>
             <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Toolbar >
                  <ToolbarGroup firstChild={true}>
                      <MenuItem value={1}><Link to="/" className="link-c">Home</Link></MenuItem>
                      <MenuItem value={2}><Link to="/About" className="link-c">About</Link></MenuItem>
                      <MenuItem value={3}><Link to="/Contact" className="link-c">Contact</Link></MenuItem>
                  </ToolbarGroup>
                </Toolbar>
              </MuiThemeProvider>

          
          {/* display output of page content*/}
          <div className="o-p">
            {this.props.children}
          </div>
            
            
          
        </div>
     
    );
  }
}

export default App;
