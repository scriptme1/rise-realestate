import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';

const SectionContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;
const SectionHeading = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 1.6rem);
  /* text-align: center; */
  margin-bottom: 5rem;
  margin-left: 50px;
`;
const HomeSectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
const HouseCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  margin-top: ${({ second }) => (second ? '-30px' : '')};
`;

const ButtonTop = styled.button`
  height: 35px;
  width: 90px;
  background: lightskyblue;
  padding-bottom: 0;
  margin-bottom: 0;
  color: #000;
  border: none;
`;
const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const Desc = styled.p`
  text-align: left;
  justify-content: center;
  font-size: 16px;
  padding-bottom: 8px;
`;
const Image = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px lightskyblue;

  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    box-shadow: none;
  }
`;

const LatestSection = ({ heading, latestdata }) => {
  return (
    <>
      <SectionContainer>
        <SectionHeading>{heading} </SectionHeading>
        <HomeSectionWrapper>
          {latestdata.map((data, index) => {
            return (
              <HouseCard key={index} second={data.second}>
                <ButtonTop>House No.{index + 1}</ButtonTop>
                <Image src={data.image} alt={data.alt} />
                <HomeInfo>
                  <h3>{data.heading}</h3>
                  <Desc>{data.paragraph}</Desc>
                  <Button to="/home" primary="true">
                    See this house
                  </Button>
                </HomeInfo>
              </HouseCard>
            );
          })}
        </HomeSectionWrapper>
      </SectionContainer>
    </>
  );
};

export default LatestSection;
