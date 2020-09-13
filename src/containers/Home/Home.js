import React from "react";
import Layout from "../../components/Layout";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            SideBar
          </Col>
          <Col md={10} style={{ marginLeft: "auto" }}>
            Container
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
