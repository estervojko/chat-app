import React from 'react';
import { Grid, Button, Form, Image} from 'semantic-ui-react'
import './LoginForm.css'

function LoginForm(props){
  return (
    <div className="login">
      <Grid style={{ height: '100%' }} verticalAlign='middle' centered>
        <Grid.Row centered>
          <Form style={{ maxWidth: 450, minWidth: 250}} onSubmit={props.handleLogin}>
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
            <h5>Password</h5>
             <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password' onChange={props.handleChange}
                    name="password"
                    value={props.login.password}/>
            <Button color='blue' fluid size='large' type="submit">Login</Button>
          </Form>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default LoginForm;
