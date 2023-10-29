import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
        أكاديمية نور القرءان
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">الرئيسية</Nav.Link>
            <Nav.Link href="#action2">ماذا عنا</Nav.Link>
            <NavDropdown title="الباقات" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">الباقة الاولى</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                الباقة الثانية
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                الباقة الثالثة
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            
          <Button variant="success" href="https://wa.me/01123607819">
          <i className="fab fa-whatsapp"></i> تواصل معانا
        </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;