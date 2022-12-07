import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartProvider";
function NavbarHed() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/Store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/About"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
          onClick={openCart}
        >
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center aline-item-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(45%,35%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavbarHed;
