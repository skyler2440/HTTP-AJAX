import React from 'react';
import styled from 'styled-components';

const FriendCard = styled.div`
  background-color: #8ca336;
  border: 5px dotted #405100;
  border-radius: 5px;
  width: 80%;
  height: 200px;
  margin-bottom: 20px;
`;

const Name = styled.div`
  background-color: #b6cb66;
  color: #FFF;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: #E3F4A3;
  color: black;
  border: none;
  border-radius: 5px;
  margin: .2rem.2rem;
`;

const Friend = props => {

  const handleClick = e => {
    props.deleteFromServer(props.friend.id);
    setTimeout(props.removeDeleteMessage, 2000);
  };
  return (
    <FriendCard>
      <Name>
        {props.friend.name}
        <CloseButton onClick={handleClick}>X</CloseButton>
      </Name>
      <div>
        Age: <br/> {props.friend.age}
      </div><br></br>
      <div>
        Email:<br/> {props.friend.email}
      </div>
    </FriendCard>
  );
};

export default Friend;