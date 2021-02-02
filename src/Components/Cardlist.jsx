import React from "react";
import { Card } from "react-bootstrap";

export const Cardlist = ({ name, src }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={src} variant="top" height="300rem" />
      <Card.Title>{name}</Card.Title>
    </Card>
  );
};
