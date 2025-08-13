import { NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './NavWebsite.css'
import spotify_white_logo from '../Images/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png'



function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navigation-tab-website">
      <Container fluid>
        <Navbar.Brand id="RouterNavLink" href="/personal_website">
          Divyansh Sharma 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            variant="dark"
            bg="light"
          >
            <Nav.Link href="/personal_website/professional">
            <Link to="/professional">
                Resume
            </Link>

            </Nav.Link>
            <Nav.Link href="/personal_website/modelling_portfolio">
            <Link to="/modelling_portfolio">
                Photoshoot
            </Link>            </Nav.Link>

            <Nav.Link href="/personal_website/blog">
            <Link to="/blog">
                Blog
            </Link>            </Nav.Link>


            <Nav.Link href="/personal_website/mix_and_ride">
              Mix&Ride
              <sup>
                <Image width={36} src={spotify_white_logo}></Image>
              </sup>
            </Nav.Link>
            {/* <Nav.Link href="/personal_website/bijleee" disabled>
              Resume Section ||
            </Nav.Link>
 */}
          </Nav>
          <Form className="d-flex">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;