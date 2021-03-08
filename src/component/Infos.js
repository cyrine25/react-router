import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Infos = ({ movieList, match }) => {
  return (
    <div>
      {movieList
        .filter((el) => el.title === match.params.title)
        .map((el) => (
          <div>
            <iframe
              width="727 px"
              height="409 px"
              src={el.trailer}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h1>{el.description}</h1>
            <Button variant="success"><Link to='/'>return to home</Link></Button>{' '}
          </div>
        ))}
    </div>
  );
};

export default Infos;
