import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Anc } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [sidebarOpen, toggleSidebar] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg">
        <NavInner className="container flexSpaceCenter">
          <LogoLink to="/">
            <LogoIcon />
            <h1 className="font20 extraBold" style={{ marginLeft: "3px" }}>
            SHEvolve
            </h1>
          </LogoLink>
          <BurgerButton onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurgerButton>
          <NavLinks>
            <NavItem to="/" label="Home" />
            <NavItem to="/services" label="About" smooth />
            <NavItem to="/track" label="Trackers" />
            {/* <NavItem to="/blog" label="Blogs" /> */}
            {/* <ExternalNavItem href="https://donate.stripe.com/test_eVa8xv6m603J4Za148" label="Donate" /> */}
            <NavItem to="/contact" label="Contact" smooth />
          </NavLinks>
          <AuthLinks>
            <AuthItem to="/login" label="Log in" />
            <AuthItem to="/signup" label="Sign Up" />
          </AuthLinks>
        </NavInner>
      </Wrapper>
    </>
  );
}

// Styled Components
const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between; /* Space between logo and links */
  align-items: center; /* Center align items vertically */
`;

const LogoLink = styled(Anc)`
  display: flex;
  align-items: center; /* Center logo and title vertically */
`;

const BurgerButton = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none; /* Hide links on small screens */
  }
`;

const AuthLinks = styled(NavLinks)`
  justify-content: flex-end; /* Align auth links to the right */
`;

const NavItem = ({ to, label, smooth }) => (
  <li className="semiBold font15 pointer hover">
    <Link
      to={to}
      spy={true}
      smooth={smooth}
      offset={-80}
      style={{ padding: "10px 15px", color: "black" }}
    >
      {label}
    </Link>
  </li>
);

const ExternalNavItem = ({ href, label }) => (
  <li className="semiBold font15 pointer hover">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ padding: "10px 15px", color: "black" }}
    >
      {label}
    </a>
  </li>
);

const AuthItem = ({ to, label }) => (
  <li className="semiBold font15 pointer hover">
    <Anc to={to} style={{ padding: "10px 30px 10px 0", color: "black" }}>
      {label}
    </Anc>
  </li>
);
