import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title,product}) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home /</Link>
          
          {product && <Link to='/products'>Products
          /</Link>}
          {title}
        </h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #f7f1e5;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: #ba704f;
  a {
    color: #000;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: #616779;
  }
`;

export default PageHero
