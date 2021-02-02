import React, { useState, useEffect } from "react";
import { CardDisplay } from "../Components/CardDisplay";
import { Row, Col, Container } from "react-bootstrap";

export const CharacterScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchChar = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://www.breakingbadapi.com/api/characters"
      );
      response.json().then(response => setItems(response));

      setIsLoading(false);
      console.log(items);
    };
    fetchChar();
  }, []);
  return isLoading ? (
    <Container>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-info"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </Container>
  ) : (
    <Container>
      <Row>
        {items.map(item => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {" "}
            <CardDisplay
              name={item.name}
              src={item.img}
              bday={item.birthday}
              occ={item.occupation}
              status={item.status}
              nname={item.nickname}
              app={item.appearance}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
