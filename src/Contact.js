import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#F44336',
    borderColor: '#F44336',
  },
  appBar: {
    height: 50,
  },
});

class Contact extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name:'',
            email:'',
            message:''
        };

    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log('Submitted!!!', this.state.name + " - " + this.state.email + " - " + this.state.message);
        
        
    }
  render() {
    return (
      <div className="bg-wrap">
        <div className="container">
          <div className="content">
            <h2>Contact</h2>
            <div className="m-c row">
               <div className="col-xs-6">
                   <MuiThemeProvider muiTheme={muiTheme}>
                   <form onSubmit={this.handleSubmit}> 
                        <TextField 
                        hintText="Enter Name..."
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        /><br/>

                        <TextField 
                        hintText="Enter Email..."
                        value={this.state.email}
                        type="email"
                        onChange={e => this.setState({ email: e.target.value })}
                        /><br/>

                        <TextField 
                        hintText="Enter Message..."
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}
                        multiLine={true}
                        /><br/>
                        
                        <FlatButton
                        backgroundColor="#F44336"
                        hoverColor="#F44336"
                        className="dark-btn-text"
                        type="submit"
                        label="Submit!!"
                        />

                        
                    </form>
                    </MuiThemeProvider>
                </div>
               <div className="col-xs-6">
                   <h4>Output</h4>
                   <p>Name: {this.state.name} </p>
                   <p>Email: {this.state.email} </p>
                   <p>Message: {this.state.message} </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
