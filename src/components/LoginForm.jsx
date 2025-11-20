/*import {useState} from 'react';*/
import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';

const LoginForm = () => {
  // useAuthentication palauttaa postLogin-funktion
  const {postLogin} = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    console.log(formData);
    //const doLogin = async () => {
    //console.log(inputs);
    // TODO: add login functionalities here

    //await postLogin(formData);
    const userInfo = await postLogin(formData);
    console.log(userInfo);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);

  return (
    <>
      <h1>Login</h1>
      <div id="login-div">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="loginuser">Username</label>
            <input
              name="username"
              type="text"
              id="loginuser"
              onChange={handleInputChange}
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="loginpassword">Password</label>
            <input
              name="password"
              type="password"
              id="loginpassword"
              onChange={handleInputChange}
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export {LoginForm};
