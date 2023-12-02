import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const HeaderSection = () => {
  return (
    <div>
      <div className="bg-warning">
        <Container>
          <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
            <h2 className="ff-poppins fw-bold">logo</h2>
            <ul className="gap-5 d-flex align-items-center m-0">
              <Link className="ff-poppins fw-normal text-black" to="/HeaderSection">
                Product
              </Link>
              <Link className="ff-poppins fw-normal text-black" to="/Form">
                Our Agent
              </Link>
              <Link className="ff-poppins fw-normal text-black" to="/About">
                About
              </Link>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeaderSection;
