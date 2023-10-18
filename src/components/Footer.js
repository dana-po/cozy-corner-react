import React from 'react'
import styled from 'styled-components';


const Footer = () => {
  return (
    <Wrapper> 
      <h5>DP&copy; {new Date().getFullYear()}
        <span> CozyCorner &#9829;</span>
      </h5>
   
    </Wrapper>
  );
}

const Wrapper = styled.footer`
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
background-color: #ffcc70;
    text-align: center;
    span {
      color: #9A3B3B;
    }
  }
  h5 {
    color: #000;
    margin: 0.1rem;
    font-weight: 700;
    text-transform: none;
    line-height: 1.25;

    @media (min-width: 776px) {
      flex-direction: row;
    }
  }
`;

export default Footer
