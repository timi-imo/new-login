import React from 'react'
import { Form, Input, Button, Select, Message } from 'semantic-ui-react'


function LoginForm() {
    return (
        <Form>
            <Form.Input label='Email' placeholder='email@domain.com' />
            <Message
                success
                header='Form Completed'
                content="You're all signed up for the newsletter"
            />
            <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Password'
                placeholder='Password'
            />

            Don't have an account? Register Here.
            {/* Add some styling to the text above- make register here blue
              Make register here a hyperlink */}
              
            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Submit'
            />
        </Form>
    )
}
export default LoginForm;


