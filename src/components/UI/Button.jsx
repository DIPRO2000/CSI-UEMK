import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledWrapper>
      <button>{props.btn}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 12px 30px;
    border-radius: 25px;
    margin-top:10px;
    margin-bottom:7px;
    border: 0;
    background-color: rgb(255, 56, 86);
    letter-spacing: 1.5px;
    font-size: 15px;
    transition: all 0.3s ease;
    box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
    color: hsl(0, 0%, 100%);
    cursor: pointer;
  }

  button:hover {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
  }

  button:active {
    background-color: rgb(255, 56, 86);
    /*50, 168, 80*/
    box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
    transform: translateY(5px);
    transition: 200ms;
  }`;

export default Button;
