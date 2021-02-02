import React, { useState, useEffect } from "react";

import { Row, Col, Container, Table } from "react-bootstrap";
import { TableDisplay } from "../Components/TableDisplay";

export const EpisodeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [episodes, setepisodes] = useState([]);
  useEffect(() => {
    const fetchChar = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://www.breakingbadapi.com/api/episodes"
      );
      response.json().then(response => setepisodes(response));

      setIsLoading(false);
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
    <>
      <Container>
        {" "}
        <Table
          striped
          hover
          className="text-primary "
          variant="dark"
          width="50rem"
          responsive
        >
          <thead>
            <tr className="table-light">
              <th>Title</th>
              <th>Season</th>
              <th>Episode</th>
              <th>Air date</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {episodes.map(data => (
              <TableDisplay
                title={data.title}
                season={data.season}
                ep={data.episode}
                a_date={data.air_date}
              />
            ))}
          </tbody>
        </Table>
      </Container>
      {/* {episodes.map(data => (
        <Tablemap
          title={data.title}
          season={data.season}
          ep={data.episode}
          a_date={data.air_date}
        />
      ))} */}
    </>
  );
};
