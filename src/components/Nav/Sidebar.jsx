import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Anc } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            SHEvolve
          </h1>
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <NavList className="flexNullCenter flexColumn">
        <NavItem to="/" toggleSidebar={toggleSidebar}>Home</NavItem>
        <NavItem to="services" toggleSidebar={toggleSidebar} smooth>Services</NavItem>
        <NavItem to="/track" toggleSidebar={toggleSidebar}>Trackers</NavItem>
        {/* <NavItem to="/blog" toggleSidebar={toggleSidebar}>Blog</NavItem> */}
        {/* <NavItem to="/donate" toggleSidebar={toggleSidebar}>Donate</NavItem> */}
        <NavItem to="contact" toggleSidebar={toggleSidebar} smooth>Contact Us</NavItem>
      </NavList>

      <AuthList className="flexSpaceCenter">
        <AuthItem to="/" toggleSidebar={toggleSidebar}>Log in</AuthItem>
        <AuthButton to="/appointment">Book Appointment</AuthButton>
      </AuthList>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  transition: right 0.3s ease; /* Smooth transition for sidebar opening */
  
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px 0;
`;

const CloseBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer; /* Pointer cursor for button */
`;

const NavList = styled.ul`
  padding: 40px;
  margin: 0; /* Reset margin for the list */
  li {
    margin: 20px 0;
  }
`;

const AuthList = styled(NavList)`
  display: flex;
  justify-content: space-between; /* Space between login and book appointment */
`;

const NavItem = ({ to, toggleSidebar, children, smooth }) => (
  <li className="semiBold font15 pointer">
    <Anc
      onClick={() => toggleSidebar(false)} // Close sidebar on navigation
      className="whiteColor"
      style={{ padding: "10px 15px" }}
      to={to}
      spy={true}
      smooth={smooth}
      offset={-60}
    >
      {children}
    </Anc>
  </li>
);

const AuthItem = ({ to, toggleSidebar, children }) => (
  <li className="semiBold font15 pointer">
    <Anc
      onClick={() => toggleSidebar(false)} // Close sidebar on navigation
      style={{ padding: "10px 30px 10px 0" }}
      className="whiteColor"
      to={to}
    >
      {children}
    </Anc>
  </li>
);

const AuthButton = styled(Anc)`
  padding: 10px 15px;
  background: #e52f8a; /* Background color for appointment button */
  color: white;
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor for button */
`;
