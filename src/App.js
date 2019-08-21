import React, { Component } from 'react';
/* import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react' */
import { Container } from 'semantic-ui-react';
import Navbar from './components/navbar';
import Layout from './components/layout';
import DropdownExampleDropdown from './components/DropdownExampleDropdown'

import './semantic/dist/semantic.min.css';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <Container className="wrapper">
          <h1>Prepare for War</h1>
          <DropdownExampleDropdown />
          <Layout />
        </Container>

      </div>
    );
  }
}

export default App;