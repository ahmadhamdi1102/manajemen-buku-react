import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Shop1 from "./other/shop1";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <h1>Tes Shopping cart</h1>
        <Shop1 />
      </Container>
    </div>
  );
}

export default App;
