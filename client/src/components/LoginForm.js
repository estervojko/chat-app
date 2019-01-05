import React from 'react';
import { Button, Form, Image} from 'semantic-ui-react'

function LoginForm(props){
  return (
    <Form  style={{ maxWidth: 450 }} onSubmit={props.handleLogin}>
      <h2>Login</h2>
      <h5>Email</h5>
      <Form.Input
             fluid
             icon='user'
             iconPosition='left'
             placeholder='E-mail address'
             onChange={props.handleChange}
             name="email"
             value={props.login.email}/>
      <br></br>
      <h5>Password</h5>
       <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password' onChange={props.handleChange}
              name="password"
              value={props.login.password}/>
      <br></br>
      <Button color='teal' fluid size='large' type="submit">Login</Button>
    </Form>
  )
}

export default LoginForm;
