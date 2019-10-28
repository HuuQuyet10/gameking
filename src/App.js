import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// navabar Left
import Cuocganday from './Components/MenuTrai/Hoatdong/Cuocganday/Cuocganday';
import './Components/MenuTrai/Hoatdong/Cuocganday/Cuocganday.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// navbar Right
import NavbarRight from './Components/MenuPhai/NavbarRight';
import './Components/MenuPhai/NavbarRight'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Row>
            <Col md={6} className="fdgfgd">
              <Cuocganday></Cuocganday>
            </Col>
            <Col md={6} className="fdhvd">
              <NavbarRight></NavbarRight>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
