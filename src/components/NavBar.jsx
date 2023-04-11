import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
const NavBar = () => {
  const [nav, setNav] = useState(true);
  if (nav) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <div>
      <div className="navShadow">
        <Container>
          <nav className="d-flex align-items-center justify-content-end ">
            <div className="d-lg-none z-5" onClick={() => setNav(!nav)}>
              <Hamburger />
            </div>
            <ul
              className={
                nav
                  ? "py-3 d-flex align-items-center mb-0 ps-0 justify-content-end navclose"
                  : "navopen"
              }
            >
              <li className="mx-2 my-2 my-lg-0">
                <a
                  className="fw-normal ff_poppins navLinks fs_md text-black"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="mx-2 my-2 my-lg-0">
                <a
                  className="fw-normal ff_poppins navLinks fs_md text-black"
                  href="#"
                >
                  SNEAKERS KOPEN
                </a>
              </li>
              <li className="mx-2 my-2 my-lg-0">
                <a
                  className="fw-normal ff_poppins navLinks fs_md text-black"
                  href="#"
                >
                  INTERVIEWS
                </a>
              </li>
              <li className="mx-2 my-2 my-lg-0">
                <a
                  className="fw-normal ff_poppins navLinks fs_md text-black"
                  href="#"
                >
                  SALE
                </a>
              </li>
              <li className="mx-2 my-2 my-lg-0">
                <a
                  className="fw-normal ff_poppins navLinks fs_md text-black"
                  href="#"
                >
                  SNEAKER VAN DE DAG
                </a>
              </li>
              <li className="mx-2 my-2 my-lg-0">
                <a
                  className="fw-normal ff_poppins navLinks fs_md text-black"
                  href="#"
                >
                  SNEAKER FORUM
                </a>
              </li>
              <li className="mx-2 my-2 my-lg-0">
                <a
                  className="fw-normal ff_poppins navLinks fs_md text-black"
                  href="#"
                >
                  BLOG
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
