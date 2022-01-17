import { Navbar, Container, Card, Button, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      const fetches = res.data.results.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );
      Promise.all(fetches).then((data) => {
        setPokemons(data);
      });
    });
  }, []);
  console.log('state after GET', pokemons)

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" >Poke App</Navbar.Brand>
      </Container>
    </Navbar>
    <Container>
      <Row
        xs={2}
        md={4}
        lg={5}
        className="justify-content-between my-5 d-flex gap-3"
      >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/vAK0PP8tsXnvs0dBIsC32j3dIF0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10849767/Where_To_Catch_Eevee_In_Pokemon_Sun_And_Moon.jpg" />
          <Card.Body>
            <Card.Title>My card</Card.Title>
            <Card.Text>
              Some new text
            </Card.Text>
            <Button variant="primary">Explore</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>


    </>
  );
}

export default App;