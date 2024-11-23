import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <Content>
        <Title className="extraBold font60" style={{ color: 'black' }}>
  SHEvolve, <br /> A New Era for Women
</Title>

<Description className="font13 semiBold">
  SHEvolve is dedicated to enhancing women's health through comprehensive resources on menstrual hygiene, reproductive health, and wellness. Our platform aims to provide practical solutions that empower women, foster confidence, and reduce barriers to education and health.
</Description>

          <BtnWrapper>
            <Link to="/signup">
              <FullButton title="Get Started" />
            </Link>
          </BtnWrapper>
        </Content>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src="https://user-images.githubusercontent.com/73426684/211127930-04c39bb4-df72-4b1b-aa72-358275b49f39.png"
            alt="Healthcare visual"
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <QuoteText>
              <QuoteContent className="font15 whiteColor">
                <em>Precisely what menstruation is, is not yet very well known.</em>
              </QuoteContent>
              <QuoteAuthor className="font13 orangeColor textRight">
                G. Stanley Hall
              </QuoteAuthor>
            </QuoteText>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const Content = styled.div`
  max-width: 470px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Description = styled.p`
  padding: 15px 0 50px;
  line-height: 1.5rem;
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  margin: 0 auto;
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;

const QuoteText = styled.div`
  margin-left: 40px; // To avoid overlap with quotes icon
`;

const QuoteContent = styled.p``;

const QuoteAuthor = styled.p``;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
