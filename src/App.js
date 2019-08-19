import React, { Component } from 'react';
/* import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react' */
import Navbar from './components/navbar'

import './semantic/dist/semantic.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>

        <Navbar />

      </div>
    );
  }
}

export default App;