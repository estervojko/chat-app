import React from 'react';

function LoginForm(props){
  return (
    <form onSubmit={props.handleLogin}>
      <h2>Login</h2>
      <h5>Email</h5>
      <input onChange={props.handleChange}
             name="email"
             value={props.login.email}/>
      <br></br>
      <h5>Password</h5>
       <input onChange={props.handleChange}
              name="password"
              value={props.login.password}/>
      <br></br>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;
