import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
const Blog = () => {
  return (
    <React.Fragment>
    <div className="">
      <Container className="mt-2">
        <Row md={4} className='m-auto m-lg-0'>
          <Col >
            {" "}
            <Card style={{ width: "20rem" }} className="mt-5">
              <Card.Header className="text-center">GeeksForGeeks</Card.Header>
              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat dui, lobortis quis porta nec, feugiat sit amet odio. Nunc ut tempus dolor. Curabitur mattis venenatis sollicitudin. Suspendisse consectetur nec ligula at tincidunt. Sed pellentesque dapibus justo ut tempor.</p>
              <a href="https://www.geeksforgeeks.org/reactjs-tutorials/?ref=ghm" className="btn btn-secondary m-1">
                Read More
              </a>
            </Card>
          </Col>
          <Col ><Card style={{ width: "20rem" }} className="mt-5">
              <Card.Header className="text-center">W3School</Card.Header>
              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat dui, lobortis quis porta nec, feugiat sit amet odio. Nunc ut tempus dolor. Curabitur mattis venenatis sollicitudin. Suspendisse consectetur nec ligula at tincidunt. Sed pellentesque dapibus justo ut tempor.</p>

              <a href="https://www.w3schools.com/" className="btn btn-secondary m-1">
                Read More
              </a>
            </Card></Col>
          <Col><Card style={{ width: "20rem" }} className="mt-5">
              <Card.Header className="text-center">JavaTPoint</Card.Header>
              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat dui, lobortis quis porta nec, feugiat sit amet odio. Nunc ut tempus dolor. Curabitur mattis venenatis sollicitudin. Suspendisse consectetur nec ligula at tincidunt. Sed pellentesque dapibus justo ut tempor.</p>

              <a href="https://www.javatpoint.com/java-tutorial" className="btn btn-secondary m-1">
                Read More
              </a>
            </Card></Col>
            <Col><Card style={{ width: "20rem" }} className="mt-5">
              <Card.Header className="text-center">FreeCodeCamp</Card.Header>
              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat dui, lobortis quis porta nec, feugiat sit amet odio. Nunc ut tempus dolor. Curabitur mattis venenatis sollicitudin. Suspendisse consectetur nec ligula at tincidunt. Sed pellentesque dapibus justo ut tempor.</p>

              <a href="https://www.freecodecamp.org/" className="btn btn-secondary m-1">
                Read More
              </a>
            </Card></Col>
            <Col><Card style={{ width: "20rem" }} className="mt-5">
              <Card.Header className="text-center">Coursera</Card.Header>
              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat dui, lobortis quis porta nec, feugiat sit amet odio. Nunc ut tempus dolor. Curabitur mattis venenatis sollicitudin. Suspendisse consectetur nec ligula at tincidunt. Sed pellentesque dapibus justo ut tempor.</p>

              <a href="https://www.coursera.org/" className="btn btn-secondary m-1">
                Read More
              </a>
            </Card></Col>
            <Col><Card style={{ width: "20rem" }} className="mt-5">
              <Card.Header className="text-center">Udemy</Card.Header>
              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat dui, lobortis quis porta nec, feugiat sit amet odio. Nunc ut tempus dolor. Curabitur mattis venenatis sollicitudin. Suspendisse consectetur nec ligula at tincidunt. Sed pellentesque dapibus justo ut tempor.</p>

              <a href="https://www.udemy.com/" className="btn btn-secondary m-1">
                Read More
              </a>
            </Card></Col>
            <Col><Card style={{ width: "20rem" }} className="mt-5">
              <Card.Header className="text-center">Youtube</Card.Header>
              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat dui, lobortis quis porta nec, feugiat sit amet odio. Nunc ut tempus dolor. Curabitur mattis venenatis sollicitudin. Suspendisse consectetur nec ligula at tincidunt. Sed pellentesque dapibus justo ut tempor.</p>

              <a href="https://www.youtube.com/" className="btn btn-secondary m-1">
                Read More
              </a>
            </Card></Col>
            <Col><Card style={{ width: "20rem" }} className="mt-5">
              <Card.Header className="text-center">Google</Card.Header>
              <p className="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat dui, lobortis quis porta nec, feugiat sit amet odio. Nunc ut tempus dolor. Curabitur mattis venenatis sollicitudin. Suspendisse consectetur nec ligula at tincidunt. Sed pellentesque dapibus justo ut tempor.</p>

              <a href="https://www.google.com/" className="btn btn-secondary m-1">
                Read More
              </a>
            </Card></Col>
        
        </Row>
      </Container>
      </div>
    </React.Fragment>
  );
};

export default Blog;
