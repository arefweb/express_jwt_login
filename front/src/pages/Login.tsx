import React, {FormEvent, useState} from 'react';
import {AuthService} from "../services";

const Login = () => {
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    AuthService.signIn({
      // @ts-ignore
      username: e.target[0].value,
      // @ts-ignore
      password: e.target[1].value,
    }).then((resp) => {
      if(resp.data.accessToken) {
        setSuccessMsg("Successfully logged in");
        localStorage.setItem('accessToken', resp.data.accessToken)
      }
    }).catch((error) => {
      setSuccessMsg(null);
      console.log(error.response);
    })
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" style={{display: "block"}}>Username:</label>
        <input type="text" id="username"/>
        <label htmlFor="password" style={{display: "block"}}>Password:</label>
        <input type="password" id="password" />
        <button>Submit</button>
      </form>
      {successMsg && <p style={{color: "#30d530"}}>{successMsg}</p>}
    </div>
  );
}


export default Login;