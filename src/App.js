import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import React from 'react';

function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col />
        <Col>
          <div className="">
            <h1 className="text-center">MMO Auction</h1>
          </div>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default App;
