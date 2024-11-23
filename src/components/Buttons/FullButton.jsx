import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border, disabled }) {
  return (
    <Wrapper
      className={`animate pointer radius8 ${disabled ? 'disabled' : ''}`}
      onClick={!disabled && action ? () => action() : null} // Disable action if button is disabled
      border={border}
      disabled={disabled}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#E52F8A" : "#E52F8A")};
  background-color: ${(props) => (props.border ? "transparent" : "#E52F8A")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")}; // Change cursor on disabled state
  transition: background-color 0.3s ease, color 0.3s ease; // Smooth transition

  &:hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }

  &.disabled {
    background-color: #f0f0f0; // Light gray background for disabled state
    color: #b0b0b0; // Gray text for disabled state
    border: 1px solid #d0d0d0; // Light gray border for disabled state
    pointer-events: none; // Prevents pointer events when disabled
  }
`;
