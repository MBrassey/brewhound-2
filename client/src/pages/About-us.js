import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const AboutUs = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <Container className="bg-white">
        <Row className=" justify-content-md-center ">
          <Col xs={12} md={8} className="bg-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              laoreet suspendisse interdum consectetur libero id faucibus nisl
              tincidunt. Amet massa vitae tortor condimentum. Blandit libero
              volutpat sed cras ornare arcu. Mus mauris vitae ultricies leo.
              Egestas fringilla phasellus faucibus scelerisque eleifend.
              Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
              semper eget. Sed blandit libero volutpat sed cras ornare arcu dui
              vivamus. Vestibulum lectus mauris ultrices eros in cursus turpis.
              Est ultricies integer quis auctor elit sed vulputate. Accumsan
              lacus vel facilisis volutpat. Tellus id interdum velit laoreet id.
              Nisi porta lorem mollis aliquam ut porttitor leo. Phasellus
              faucibus scelerisque eleifend donec pretium vulputate sapien.
              Porttitor lacus luctus accumsan tortor posuere. Facilisis mauris
              sit amet massa vitae tortor. Nunc eget lorem dolor sed viverra.
              Tincidunt dui ut ornare lectus sit amet est placerat in. Urna
              molestie at elementum eu facilisis sed odio.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
