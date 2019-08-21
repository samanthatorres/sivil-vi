import React, { Component } from 'react'
import { Form, Dropdown } from 'semantic-ui-react'

import '../semantic/dist/semantic.min.css';

const planetOptions = [
    {
        key: 'Centrik',
        text: 'Centrik',
        value: 'Centrik'
    },
    {
        key: 'Lavara',
        text: 'Lavara',
        value: 'Lavara'
    }
]

class InputForm extends Component {
    render() {
        return (

            <Form>
                <Form.Field>
                    <Dropdown
                        placeholder='Select Planet'
                        fluid
                        search
                        selection
                        options={planetOptions}
                    />
                </Form.Field>
            </Form>
        )
    };
}

export default InputForm 