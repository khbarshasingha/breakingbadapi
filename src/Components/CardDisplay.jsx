import React, { useState } from "react";
import { Card, ListGroup, Modal, Button } from "react-bootstrap";

export const CardDisplay = ({ name, src, bday, occ, status, nname, app }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="my-3 p-3 rounded " height="300rem">
      <Card.Img src={src} variant="top" height="300rem" />
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <Button variant="primary" onClick={handleShow}>
          More!
        </Button>

        <Modal
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose}
        >
          <Modal.Header closeButton />
          <Modal.Body class="text-warning" style={{ textAlign: "center" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Name: {name}</ListGroup.Item>
              <ListGroup.Item>Birthday: {bday} </ListGroup.Item>
              <ListGroup.Item>Occupation: {occ}</ListGroup.Item>
              <ListGroup.Item>Status: {status}</ListGroup.Item>
              <ListGroup.Item>Nickname: {nname}</ListGroup.Item>
              <ListGroup.Item>Appearance: {app}</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};
