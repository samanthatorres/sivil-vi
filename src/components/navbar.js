import React from 'react';
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

import '../semantic/dist/semantic.min.css';
import './navbar.css';



class Navbar extends React.Component {
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