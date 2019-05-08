import React from "react";
import "./App.css";
// import FriendDisplay from './components/FriendDisplay';
import axios from "axios";
import FriendDisplay from "./components/FriendDisplay";
import { BrowserRouter as Route} from 'react';
class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
        return axios.post("tehuihetuhs", res);
      })
      .then()
      .catch(err => {
        console.log(err);
        this.setState({ error: err.response.message });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <FriendDisplay /> */}
          <Route exact path="/" component={FriendDisplay} friends={this.state.friends} />
        </header>
      </div>
    );
  }
}

export default App;
