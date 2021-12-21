import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Link from 'next/link'

const Header = () => {
    
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link><Link href="/">Home</Link></Nav.Link>
                <Nav.Link><Link href="/about">About</Link></Nav.Link>                                            
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
   };
   
   export default Header;