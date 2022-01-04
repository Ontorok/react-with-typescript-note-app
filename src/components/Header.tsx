import React from "react";
import { Container, Navbar } from "react-bootstrap";

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Schedule Map</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
