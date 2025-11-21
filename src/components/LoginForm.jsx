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
    //console.log(formData); // Älä koskaan loggaa tuotannossa login-tietoja
    try {
      const userInfo = await postLogin(formData);
      localStorage.setItem('token', userInfo.token);
      console.log(userInfo);

    } catch (error) {
      console.log('Login error: ', error);
      // TODO: kerro käyttäjälle, miksi kirjautuminen epäonnistui
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doLogin, initValues);

  //console.log(inputs);

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
