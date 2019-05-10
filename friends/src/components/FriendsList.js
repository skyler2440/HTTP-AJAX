import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FriendListContainer = styled.div`
  max-width: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const FriendsList = props => {
  return (
    <FriendListContainer>
      {props.friends.map(friend => <Friend friend={friend} deleteFromServer={props.deleteFromServer} removeDeleteMessage={props.removeDeleteMessage}/>)}
    </FriendListContainer>
  );
};

export default FriendsList;