import React from "react";

import { Container } from "react-bootstrap";
import logoImage from "../assets/img/svg/logo.svg";
import navImage from "../assets/img/png/navImage.png";
const Banner = () => {
  return (
    <Container>
      <nav className="py-3 d-flex align-items-center justify-content-between">
        <a href="#">
          <img
            src={logoImage}
            className="w_xsm_40 w_sm_60"
            width={90}
            alt="logoImage"
          />
        </a>
        <img className="w-50" src={navImage} alt="navImage" />
      </nav>
    </Container>
  );
};

export default Banner;
