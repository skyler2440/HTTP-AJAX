import React from 'react';
// import { Browser as Router } from "react";
// import axios from 'axios';
import Friend from './Friend'

class FriendList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: []
        }
    }

    render() {
        return (
        <div>
            
        {this.state.friends.map((friend, index) => <Friend friend={friend}/>)}
            <Friend friends={this.props.friends} />
        </div>    
        );
    }
}

export default FriendList;