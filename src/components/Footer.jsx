import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoImage from "../assets/img/svg/footerlogo.svg";
import fb from "../assets/img/svg/fb.svg";
import twitt from "../assets/img/svg/twitt.svg";
import googleImage from "../assets/img/svg/goog.svg";
const Footer = () => {
  return (
    <div className="bg_black mt-5 mt-lg-4">
      <Container>
        <a href="#">
          <img
            className="pt-4   w_sm_60"
            width={90}
            src={logoImage}
            alt="logoImage"
          />
        </a>
        <Row className=" pb-4 pt-1 justify-content-between">
          <Col className="my-2 my-xl-0" xl={3}>
            <p className="mb-0 ff_poppins fw-normal fs_sm text_white_60">
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta.
            </p>
            <div className="d-flex align-items-center gap-3 mt-4">
              <img
                className="curser animationMove "
                width={28}
                src={fb}
                alt="fb"
              />
              <img
                className="curser animationMove "
                width={30}
                src={twitt}
                alt="twitt"
              />
              <img
                className="curser animationMove "
                width={30}
                src={googleImage}
                alt="googleImage"
              />
            </div>
          </Col>
          <Col className="my-2 my-xl-0" xl={8}>
            <Row className="justify-content-center">
              <Col className="my-2 my-xl-0" xs={6} sm={4} md={3}>
                <ul className="mb-0 ps-0 ">
                  <li className="ff_poppins fw-semibold fs_md text-white">
                    CUSTOM LINKS
                  </li>
                  <li className="mt-3">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className="my-2 my-xl-0" xs={6} sm={4} md={3}>
                <ul className="mb-0 ps-0 ">
                  <li className="ff_poppins fw-semibold fs_md text-white">
                    PRODUCTS
                  </li>
                  <li className="mt-3">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className="my-2 my-xl-0" xs={6} sm={4} md={3}>
                <ul className="mb-0 ps-0 ">
                  <li className="ff_poppins fw-semibold fs_md text-white">
                    OUR COMPANY
                  </li>
                  <li className="mt-3">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className="my-2 my-xl-0" xs={6} sm={4} md={3}>
                <ul className="mb-0 ps-0 ">
                  <li className="ff_poppins fw-semibold fs_md text-white">
                    YOUR ACCOUNT
                  </li>
                  <li className="mt-3">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="text_white_70 footerLinks fs_md fw-normal ff_poppins"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="bg_dark mt-2 mt-lg-4">
<p className="mb-0 text-center py-3 text_white_80 fs_md fw-normal ff_poppins">© Copyright SNKRPLTS 2021. </p>
      </div>
    </div>
  );
};

export default Footer;
