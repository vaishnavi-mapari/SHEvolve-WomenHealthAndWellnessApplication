import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
// Import the local logo
import logo from "../../assets/img/SHEvolve.png"; // Adjust the path to your logo

export default function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <LogoContainer to="home" smooth={true} offset={-80}>
              <img
                src={logo} // Use the imported logo here
                width={90}
                alt="SHEvolve logo"
              />
              <LogoText className="font15 extraBold">SHEvolve</LogoText>
            </LogoContainer>
            <StyledParagraph className="whiteColor font15">
              © {getCurrentYear()} - <span className="purpleColor" style={{ cursor: "pointer" }}>SHEvolve</span> All Rights Reserved
            </StyledParagraph>
            <ScrollToTop to="home" smooth={true} offset={-80}>
              <BsFillArrowUpCircleFill size={30} color={"white"} />
            </ScrollToTop>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoText = styled.h1`
  margin-left: 15px;
  font-size: 20px;
  color: white; // Ensure this color contrasts with the background
`;

const StyledParagraph = styled.p`
  color: white;

  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;

const ScrollToTop = styled(Link)`
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8; // Adding a hover effect
  }
`;
