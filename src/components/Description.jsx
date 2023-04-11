import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Description = () => {
  const [first, setfirst] = useState(1);
  return (
    <>
      <Container>
        <div className="mt-1 mt-sm-4 d-sm-flex align-items-center">
          <button
            onClick={() => setfirst(1)}
            className="border-0 my-1 my-sm-0 me-4 me-sm-0   bg-transparent fs_lg fw-normal position-relative btnLines ff_poppins"
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => setfirst(2)}
            className="border-0 my-1 my-sm-0 me-4 me-sm-0   ms-sm-5  bg-transparent fs_lg fw-normal position-relative btnLines ff_poppins"
          >
            ADDITIONAL INFORMATION
          </button>
          <button
            onClick={() => setfirst(3)}
            className="border-0 my-1 my-sm-0 me-4 me-sm-0   ms-sm-5  bg-transparent fs_lg fw-normal position-relative btnLines ff_poppins"
          >
            REVIEWS (1)
          </button>
        </div>
        <p
          className={
            first === 1
              ? "text_dark_70 fs_lg ff_poppins fw-normal mt-4"
              : "d-none"
          }
        >
          Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
          euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in
          leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis
          finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in
          ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi
          euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit.
          Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura
        </p>
        <p
          className={
            first === 2
              ? "text_dark_70 fs_lg ff_poppins fw-normal mt-4"
              : "d-none"
          }
        >
          Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
          euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in
          leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis
          finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in
          ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi
          euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit.
          Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur eum
        </p>
        <p
          className={
            first === 3
              ? "text_dark_70 fs_lg ff_poppins fw-normal mt-4"
              : "d-none"
          }
        >
          Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
          euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in
          leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis
          finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in
          ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi
          euismod, vel consequat ipsum
        </p>
      </Container>
    </>
  );
};

export default Description;
