import React from 'react'
import { Form, Input, TextArea, Button, Select,Message } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const RegistrationForm2 = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
  
    
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
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Confirm Password'
        placeholder='Password'
      />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Submit'
    />
  </Form>
)

export default RegistrationForm2
