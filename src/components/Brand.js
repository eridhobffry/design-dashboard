import React from 'react'
import styled from "styled-components";

// import logo from "../assets/img/logo-min.png";
import logo from "../assets/img/example-logo.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  margin-left: -22px !important;
  height: 85%;
  margin: auto 0;
  border-radius: 50px;
`;