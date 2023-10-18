import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero.jpg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title ='about'/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="living room" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to Cozy Furniture Store! We are your go-to destination for
            high-quality and stylish furniture that transforms your home into a
            warm and inviting space. With a passion for creating comfortable and
            functional interiors, we curate a wide range of furniture pieces
            that blend timeless design with modern trends. Our dedicated team of
            design experts is committed to helping you find the perfect
            furniture that suits your style and needs. From cozy sofas and
            elegant dining sets to luxurious bedroom furniture, we offer a
            curated collection that brings comfort, beauty, and functionality to
            every corner of your home. Discover the joy of living in a cozy and
            well-designed space with Cozy Furniture Store.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
