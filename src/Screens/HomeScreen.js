import React, { useState, useEffect } from "react";

import { Container, Carousel, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const HomeScreen = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="cover.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="cover2.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="cover3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
