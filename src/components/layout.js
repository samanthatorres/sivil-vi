import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import InputForm from './input'


class Layout extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <InputForm />
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <p>Testing the column 2 - Results will go here.</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Layout