
import React from 'react';
import styled from 'styled-components';

const MessageDiv = styled.div`
  width: 30%;
  height: 45px;
//   border: 1px solid #6B6E70;
  background-color: #61892F;
  border-radius: 5px;
  color: red;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const DeleteMessage = props => {
  return(
<div>
    <MessageDiv>Friend Deleted</MessageDiv><br/>
    </div>
  );
};

export default DeleteMessage;