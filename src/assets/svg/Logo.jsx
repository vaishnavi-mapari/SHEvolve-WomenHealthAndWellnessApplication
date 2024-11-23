import React from "react";
import logo from "../../assets/img/SHEvolve.png"; // Adjust the path as necessary

function SvgComponent(props) {
  return (
    <img src={logo} alt="logo" width={70} height={70} {...props} />
  );
}

export default SvgComponent;
