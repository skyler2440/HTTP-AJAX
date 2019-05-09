import React from 'react';
import  "./App.css";
import FriendList from './components/FriendList';
import axios from 'axios' ;
import FriendForm from './components/FriendForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: []

  }
}

componentDidMount(){
  axios
      .get('http://localhost:5000/friends')
      .then(response => {
          this.setState(() =>({friends: response.data}))
          console.log(response.data)
      })
      .catch(error => {
          console.error('Server Error', error)
      })

};
postFriend = person => {
  axios
    .post("http://localhost:5000/friends", person)
    .then(res => {
      console.log(res);
      this.setState({
        items: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

  render() {
    return (
      <div>
     <FriendList {...this.props} friends={this.state.friends}/> 
     <FriendForm postFriend={this.postFriend} />
     </div>
    );
  }
}

export default App;
