import React from 'react';
import { Container } from 'semantic-ui-react'

import '../semantic/dist/semantic.min.css';
import './navbar.css';



class Navbar extends React.Component {
    render() {
       return (
          <div>
              <Container fluid className="navbar-container">
                    <h2>Battle Scenario Generator</h2>
              </Container>
          </div>
       );
    }
 }

 export default Navbar;