import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { mydata } from "./js";
import Slider from "react-slick";
const ReleatedProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 700,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 700,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 700,
        },
      },
    ],
  };
  return (
    <Container>
      <h3 className="mt-5 pt-lg-4 fs_3xl fw-semibold  ff_poppins">
        RELATED PRODUCT
      </h3>
      <Slider {...settings} className="py-lg-3 justify-content-center">
        {mydata
          .map((fun) => {
            return (
              <Col className="my-3 px-2" sm={6} lg={4} xl={3}>
                <div className="cardLinks curser">
                  <div className="position-relative">
                    <img className="w-100" src={fun.img} alt="redShoes" />
                    <img
                      className="position-absolute positionSet "
                      src={fun.img1}
                      width={117}
                      alt="positionImage"
                    />
                    <img
                      className="position-absolute top-0 end-0 "
                      src={fun.img2}
                      width={68}
                      alt="positionImage1"
                    />
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="align-items-center">
                        <p className="text_dark_50 mb-0  fs_md fw-medium ff_poppins">
                          {fun.para}
                        </p>
                        <p className="fs_md ff_poppins mb-0 mt-1 fw-medium text_dark">
                          {fun.para1}{" "}
                          <span className="text_red"> {fun.span}</span>
                        </p>
                      </div>
                      <img
                        className="curser animationMove"
                        src={fun.img3}
                        width={48}
                        alt="shopping"
                      />
                    </div>
                    <img
                      width={100}
                      className="mt-3 "
                      src={fun.img4}
                      alt="blackStar"
                    />
                  </div>
                </div>
              </Col>
            );
          })
          .slice(0, 4)}
      </Slider>
      <Slider {...settings} className=" justify-content-center">
        {mydata
          .map((fun) => {
            return (
              <Col className="my-3 px-2" sm={6} lg={4} xl={3}>
                <div className="cardLinks curser">
                  <div className="position-relative">
                    <img className="w-100" src={fun.img} alt="redShoes" />
                    <img
                      className="position-absolute positionSet "
                      src={fun.img1}
                      width={117}
                      alt="positionImage"
                    />
                    <img
                      className="position-absolute top-0 end-0 "
                      src={fun.img2}
                      width={68}
                      alt="positionImage1"
                    />
                  </div>
                  <div className="p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="align-items-center">
                        <p className="text_dark_50 mb-0  fs_md fw-medium ff_poppins">
                          {fun.para}
                        </p>
                        <p className="fs_md ff_poppins mb-0 mt-1 fw-medium text_dark">
                          {fun.para1}{" "}
                          <span className="text_red"> {fun.span}</span>
                        </p>
                      </div>
                      <img
                        className="curser animationMove"
                        src={fun.img3}
                        width={48}
                        alt="shopping"
                      />
                    </div>
                    <img
                      width={100}
                      className="mt-3 "
                      src={fun.img4}
                      alt="blackStar"
                    />
                  </div>
                </div>
              </Col>
            );
          })
          .slice(0, 4)}
      </Slider>
      <div className="d-flex align-items-center justify-content-center justify-content-lg-end my-lg-5  gap-2 my-2">
        <button className="cardsbtn text_dark_70 ff_poppins fw-semibold fs_xl border-0  ">
          1
        </button>
        <button className="cardsbtn text_dark_70 ff_poppins fw-semibold fs_xl border-0  ">
          2
        </button>
        <button className="cardsbtn text_dark_70 ff_poppins fw-semibold fs_xl border-0  ">
          3
        </button>
        <button className=" btnNext text_dark_50 fs_sm fw-normal ff_poppins ">
          Next &gt;&gt;
        </button>
      </div>
    </Container>
  );
};

export default ReleatedProduct;
