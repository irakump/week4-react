/*import {useState} from 'react';*/
import useForm from '../hooks/formHooks';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  const {handleLogin} = useUserContext();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async (formData) => {
    //console.log(formData); // Älä koskaan loggaa tuotannossa login-tietoja
    try {
      // Responsea ei tarvitse tässä tallentaa (tehdään contextissa?)
      await handleLogin(formData);

    } catch (error) {
      console.log('Login error: ', error);
      alert(`Login failed: ${error.message}`);   // Kerro käyttäjälle, miksi kirjautuminen epäonnistui
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
