import React from 'react';
import styled from 'styled-components';

const Hover = (props) => {
  return (
    <StyledWrapper>
      <button className="btn">{props.text}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    font-size: 17px;
    font-weight: 700;
    background: transparent;
    border: none;
    padding: 5px 10px;
    color: #ffedd3;
    text-transform: uppercase;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
  }

  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #ffc506;
    transition: 0.5s ease;
  }

  .btn:hover {
    color: #1e1e2b;
    transition-delay: 0.5s;
  }

  .btn:hover::before {
    width: 100%;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #ffc506;
    transition: 0.4s ease;
    z-index: -1;
  }

  .btn:hover::after {
    height: 100%;
    transition-delay: 0.4s;
    color: aliceblue;
  }`;

export default Hover;
