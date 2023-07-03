import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

const handleSubmit = (event) => {
  event.preventDefault();
  let newName = event.target[0].value;
  search(newName);
}
async function search(newName){
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      food:newName,
    }),
  };

  let response = await fetch("http://localhost:8000/test", options);
  const recipes = await response.json();
  console.log(recipes.user);
}

  return (
    <Navbar bg="body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand href="#">Delicious Eats</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} exact to="/" activeclassname="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/AddRecipe" activeclassname="active">Add Recipe</Nav.Link>
            <Nav.Link as={NavLink} to="/AboutUs" activeclassname="active">About Us</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarDropdown">
              <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Credits</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>Disabled</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input className="form-control me-2" type="text" id = "foodInput" placeholder="ex. Banana Nut Bread" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
