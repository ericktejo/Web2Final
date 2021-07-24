import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Teste from './Componentes/teste';
import React from 'react';


function App() {
  return (
  
     <React.Fragment>
    <Container className="App">
      <header className="App-header">
      <Teste></Teste>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo!
          Deu trampo em...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </Container>
    </React.Fragment>
   
  );
}

export default App;
