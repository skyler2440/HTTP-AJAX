import React from 'react';

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = { 
            person: {
                name:'',
                email:'',
                age:''
            }
         };
    }
    handleChange = e =>{
        e.preventDefault();
        this.setState({
            person: {
                ...this.state.person,
            [e.target.name]: e.target.value
            }
        });
    };

    postFriend = event => {
        event.preventDefault();
        this.props.postFriend(this.state.person);
        this.setState({
          person: {
            name: "",
            email: "",
            age: ""
          }
        });
      };

        
    render() {
        return (
            <form className="friend-form" onSubmit={this.postFriend}>
            <h2>Add Friend</h2>
            <input
              required
              className="form-input"
              name="name"
              placeholder="NAME"
              onChange={this.handleChange}
              value={this.state.person.name}
            />
            <input
              required
              className="form-input"
              name="email"
              placeholder="EMAIL"
              onChange={this.handleChange}
              value={this.state.person.email}
            />
            <input
              required
              className="form-input"
              name="age"
              placeholder="AGE"
              onChange={this.handleChange}
              value={this.state.person.age}
            />
            <button className="button-input">Add Friend</button>
          </form>
        );
    }
}

export default FriendForm;