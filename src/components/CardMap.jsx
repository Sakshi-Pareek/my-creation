import React, { useState } from "react";
import { Container } from "react-bootstrap";

const CardMap = () => {
  const [data, setData] = useState([
    {
      name: "sakshi",
      age: 21,
      city: "meerut",
    },
    {
      name: "sapna",
      age: 25,
      city: "rajasthan",
    },
    {
      name: "rachna",
      age: 24,
      city: "haryana",
    },
  ]);
  return (
    <div>
      <Container className="">
        <h1>List of Users</h1>
        <ul className="d-flex list-unstyled justify-content-between">
          {data.map((a) => (
            <li key={a.name}>
              <p>{a.name}</p>
              <p>{a.age}</p>
              <p>{a.city}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default CardMap;
