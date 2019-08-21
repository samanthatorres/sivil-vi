import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import '../semantic/dist/semantic.min.css';
import '../styles/navbar.css';



class Navbar extends Component {
   render() {
      return (
         <div>
            <Container fluid className="navbar-container">
               <Container textAlign='left'>
                  <h2>Battle Scenario Generator</h2>
               </Container>
            </Container>
         </div>
      );
   }
}

export default Navbar;