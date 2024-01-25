import React from 'react'
import { useState } from "react";
import {
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  Segment,
  Modal,
  Popup,
  Icon, 
  Menu,
} from 'semantic-ui-react'

const Login = () =>{
    const [open, setOpen] = useState(false);
    return(
  <Segment inverted>
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Menu.Item><Icon name='user'/>Sign Up/ Log In</Menu.Item>}
    >
      <Modal.Header>Sign Up/ Log In</Modal.Header>
      {/* {console.log('FORM DATA: ',formData)} */}
      <Form className="add-note-form">
        <Form.Field>
          <label>What is your name?</label>
          <input placeholder="Enter Name"/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="your email here"/>
        </Form.Field>
        <Form.Field>
          <label>Set your password</label>
          <input placeholder="set your password"/>
        </Form.Field>
      <FormCheckbox label='I agree to the Terms and Conditions' />
      </Form>

      <Modal.Actions>
        
      <Popup content='Submit' trigger={<Button
        onClick={() => setOpen(false)}
          content="Sign Up"
          labelPosition="right"
          icon="check right"
          positive
          type="submit"
        />} />
        
      </Modal.Actions>
    </Modal>
    
  </Segment>
)
      };
export default Login