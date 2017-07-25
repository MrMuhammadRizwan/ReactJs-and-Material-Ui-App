import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// var axios = require('axios');
import TextField from 'material-ui/TextField';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#F44336',
    borderColor: '#F44336',
  },
  appBar: {
    height: 50,
  },
});


class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:'abc',
            repos: '',
            image: '',
            followers: ''
        };
    }

    cohelo = (e) => {
      e.preventDefault()
      let url = `https://api.github.com/users/${e.target.value}`
      axios.get(url)
      .then((response) => {
        // console.log(response.data);
          this.setState({
            user: response.data.login,
            repos: response.data.public_repos,
            image: response.data.avatar_url,
            followers: response.data.followers
          });
      })
      .catch(function (error) {
        console.log(error);
      });

      
      
      // this.componentDidMount(url)
    }
 
  componentDidMount() {
    var _this = this;
      axios.get(`https://api.github.com/users/${_this.state.user}`)
      .then(function (response) {
        console.log(response.data.login);
          _this.setState({
                    user: response.data.login,
                    repos: response.data.public_repos,
                    image: response.data.avatar_url,
                    followers: response.data.followers
                  });
      })
      .catch(function (error) {
        console.log(error);
      });

    
  }
  
  render() {
    let { user, repos, image, followers } = this.state
    return (
      <div className="bg-wrap">
        <div className="container">
          <div className="content">
            
            <h2>About</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            {/*<input type='text' ref='enter' onChange={this.cohelo} placeholder='Search...' />*/}
           <MuiThemeProvider muiTheme={muiTheme}>
              <TextField
              hintText="Search..."
              ref='enter' 
              onChange={this.cohelo}
            />
            </MuiThemeProvider>
            <div>
                <h4>GitHub Profile:</h4>
                <div className="author-image"><img src={image} alt="author_image" /></div>
                <div>User Name: {user} </div>
                <div>Repos: {repos} </div>
                <div>Followers: {followers}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
