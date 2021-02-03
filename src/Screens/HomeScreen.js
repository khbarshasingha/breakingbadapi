import React from "react";

import { Carousel } from "react-bootstrap";

export const HomeScreen = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            height="600px"
            className="d-block w-100"
            src="cover.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            height="600px"
            className="d-block w-100"
            src="cover2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            height="600px"
            className="d-block w-100"
            src="cover3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
