import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../assets/img/png/heroImage.png";
import image1 from "../assets/img/png/image1.png";
import image2 from "../assets/img/png/image2.png";
import image3 from "../assets/img/png/image3.png";
import image4 from "../assets/img/png/image4.png";
import starImage from "../assets/img/svg/starImage.svg";
import compareImage from "../assets/img/svg/compare.svg";
import heart from "../assets/img/svg/heart.svg";
import shareImage from "../assets/img/svg/share.svg";
import facebook from "../assets/img/svg/facebook.svg";
import twitter from "../assets/img/svg/twitter.svg";
import pintrest from "../assets/img/svg/pintrest.svg";
import google from "../assets/img/svg/google.svg";

const HeroSection = () => {
  const [first, setfirst] = useState(1);
  return (
    <Container>
      <Row className="py-3 py-lg-5 align-items-center ">
        <Col className="my-3 my-lg-0" md={10} lg={6}>
          <div className={first === 1 ? "d-flex" : "d-none"}>
            <img className="w-100" src={heroImage} alt="heroImage" />
          </div>
          <div className={first === 2 ? "d-flex" : "d-none"}>
            <img className="w-100" src={image1} alt="heroImage" />
          </div>
          <div className={first === 3 ? "d-flex" : "d-none"}>
            <img className="w-100" src={image3} alt="heroImage" />
          </div>
          <div className={first === 4 ? "d-flex" : "d-none"}>
            <img className="w-100" src={image4} alt="heroImage" />
          </div>
          <div className="d-flex align-items-center gap-2 justify-content-between  mt-4">
            <div className="curser" onClick={() => setfirst(2)}>
              <img className="w-100" src={image1} alt="image1" />
            </div>
            <div className="curser" onClick={() => setfirst(1)}>
              <img className="w-100" src={image2} alt="image1" />
            </div>
            <div className="curser" onClick={() => setfirst(3)}>
              <img className="w-100" src={image3} alt="image1" />
            </div>
            <div className="curser" onClick={() => setfirst(4)}>
              <img className="w-100" src={image4} alt="image1" />
            </div>
          </div>
        </Col>
        <Col className="my-3 my-lg-0" lg={6}>
          <h1 className="ff_poppins fw-semibold fs_3xl">
            PREMIUM MENS SPORTS LATHER KEDS
          </h1>
          {/* start-images */}
          <div className="d-flex align-items-center mt-3">
            <img src={starImage} alt="starImage" />
            <p className="text_dark_70 mb-0 fw-normal ff_poppins fs_lg ms-2">
              ( 5 Customer Review )
            </p>
          </div>
          <p className="mt-3  text_dark_60 mb-0 fw-normal ff_poppins fs_lg">
            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
            in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
            mattis finibus neque. In vel dolor ac augue pretium
          </p>
          {/* qty */}
          <div className="mt-5 d-flex align-items-center">
            <p className="mb-0 fs_md fw-medium ff_poppins">Qty: </p>
            <div className="ms-3 d-flex py-1 qty_border">
              <button className="border-0 ms-2 outline_none ms-3 bg-transparent">
                -
              </button>
              <p className="mb-0 mx-3 fs_lg fw-normal ff_josefin">1</p>
              <button className="border-0 outline_none me-3 bg-transparent">
                +
              </button>
            </div>
            <div className="ms-3">
              <a
                className="heroBtn text-white ff_poppins fw-medium fs_lg"
                href="#"
              >
                Add to Cart
              </a>
            </div>
          </div>
          {/* size */}
          <div className="mt-4 d-flex align-items-center">
            <form>
              <label
                for="cars"
                className="mb-0 fs_md fw-medium ff_poppins pe-3"
              >
                Size:
              </label>

              <select
                id="cars"
                name="cars"
                className="qty_border py-2 ps-3 pe-4 ff_josefin fw-normal  outlone_none fs_lg"
              >
                <option value="volvo">S</option>
                <option value="saab">M</option>
                <option value="fiat">L</option>
                <option value="audi">XL</option>
              </select>
            </form>
          </div>
          {/* color */}
          <div className="mt-4 d-flex align-items-center">
            <p className="mb-0 fs_md fw-medium ff_poppins pe-3">Color: </p>
            <div className="background_border curser mx-2 mx-md-1">
              <div className="redbox"></div>
            </div>
            <div className="background_border curser mx-2 mx-md-1">
              <div className="khakhibox"></div>
            </div>
            <div className="background_border curser mx-2 mx-md-1">
              <div className="blackbox"></div>
            </div>
            <div className="background_border curser mx-2 mx-md-1">
              <div className="darkbox"></div>
            </div>
          </div>
          {/* compare */}
          <div className="d-flex align-items-center mt-4">
            <a
              className="text_black fw-light anker_hover fs_sm ff_poppins "
              href="#"
            >
              <img src={compareImage} alt="compareImage" /> Compare
            </a>
            <a
              className="text_black ms-5 fw-light anker_hover fs_sm  ff_poppins "
              href="#"
            >
              <img src={heart} alt="heart" /> Wishlist
            </a>
          </div>
          {/* line */}
          <div className="line_border mt-4"></div>
          {/* images */}
          <div className="mt-4 d-flex align-items-center">
            <a className="animationMove me-3" href="#">
              <img src={shareImage} alt="shareimage" />
            </a>
            <a className="animationMove mx-3" href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a className="animationMove mx-3" href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a className="animationMove mx-3" href="#">
              <img src={pintrest} alt="pintrest" />
            </a>
            <a className="animationMove mx-3" href="#">
              <img src={google} alt="google" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
