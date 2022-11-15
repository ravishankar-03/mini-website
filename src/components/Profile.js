import React from 'react'
import Axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
// import {Button} from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
     navigate('/signup');
  }

  const [users, setUsers] = useState([]);

  const fetchData = () => {
     Axios
      .get("http://localhost:3001/profile")
      .then((response) => {
        setUsers(response.data)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <div className='container '>
    <button
                  type="button"
                  onClick={logout}
                  className="btn btn-warning float-end mt-1"
                >
                  Logout
                </button>
    </div>
    <>
      {!users.length  && (<div className='container
      '>
      <Card style={{ width: '' }} className='mt-5'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
      </div>) }
    </>
      
        {
          <div className='mt-5'>
            {users.map((data) => (
              <Container className=''>
                <Row>
                <Col>
                  <Card style={{ width: "40rem" }} className='mt-5'>
                    <Card.Header>Detail</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>FullName: {data.fullName}</ListGroup.Item>
                      <ListGroup.Item>UserName: {data.userName}</ListGroup.Item>
                      <ListGroup.Item>EmailId: {data.email}</ListGroup.Item>
                      <ListGroup.Item>Password: {data.password ? 'True' : 'False'}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                  </Col>
                  </Row>
                </Container>
              
            ))}
          </div>
        }
                    
      
    </>
  )
}

export default Profile