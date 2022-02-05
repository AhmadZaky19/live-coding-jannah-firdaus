import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getDataUser } from "../stores/actions/user";

const User = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await dispatch(getDataUser());
      setUser(response.value.data.results[0]);
    } catch (error) {
      Error(error.response);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Card className="card__user">
            <Card.Img variant="top" className="card__user--img" src={user.picture.large} />
            <Card.Body className="card__user--desc">
              <Card.Title className="card__user--title">
                {user.name.title} {user.name.first} {user.name.last}
              </Card.Title>
              <Card.Text className="card__user--stock">{user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default User;
