import React, { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
  left: 0px;
  right: 0px;
  overflow: hidden !important;
`;

const SectionHeading = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 1.6rem);
  /* text-align: center; */
  margin-bottom: 2rem;
  margin-left: 50px;
`;
const FrameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden !important;
  /* position: absolute; */
  /* left: 0px; */
  /* right: 0px; */
`;
const Frame = styled.iframe`
  padding: 1rem 2rem;
  display: block;
  height: 100vh;
  width: 100%;
  overflow: hidden !important;
  /* align-items: center; */
  border: none;
`;

const ButtonSrc = styled.button`
  background: #000d1a;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  color: #6ce6ec;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.8;
  border-radius: 4px;
  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    color: red;
    cursor: crosshair;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 2rem;
`;

const rockwell =
  'https://www.zipmatch.com/condominium/proscenium-at-rockwell?vr';
const venice =
  'https://www.zipmatch.com/condominium/the-venice-luxury-residences?vr';
const grove = 'https://www.zipmatch.com/condominium/the-grove?vr';

const urls = { rockwell, venice, grove };

const Tour = () => {
  const [selected, setSelected] = useState(urls.rockwell);
  const [clicked, setClicked] = useState('rockwell');

  function handleClick(url, click) {
    setSelected(url);
    setClicked(click);
  }

  return (
    <SectionContainer>
      <SectionHeading>Take Our Virtual Tour </SectionHeading>
      <LinkContainer>
        <ButtonSrc
          onClick={() => handleClick(urls.venice, 'venice')}
          disabled={clicked === 'venice' ? true : false}
        >
          The Venice
        </ButtonSrc>

        <ButtonSrc
          onClick={() => handleClick(urls.rockwell, 'rockwell')}
          disabled={clicked === 'rockwell' ? true : false}
        >
          Proscenium
        </ButtonSrc>

        <ButtonSrc
          onClick={() => handleClick(urls.grove, 'grove')}
          disabled={clicked === 'grove' ? true : false}
        >
          The Grove
        </ButtonSrc>
      </LinkContainer>
      <FrameContainer>
        <Frame
          src={selected}
          target="_blank"
          scrolling="no"
          seamless="seamless"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
        ></Frame>
      </FrameContainer>
    </SectionContainer>
  );
};

export default Tour;
