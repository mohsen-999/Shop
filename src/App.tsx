import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import NavbarHed from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavbarHed />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
