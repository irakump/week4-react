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
      alert(`Login failed: ${error.message}`); // Kerro käyttäjälle, miksi kirjautuminen epäonnistui
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doLogin, initValues);

  //console.log(inputs);

  return (
    <div className="w-full flex flex-col gap-3 mt-10">
      <h1 className="text-2xl font-semibold mb-2">Login</h1>
      <div id="login-div">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="loginuser" className="mt-3 p-3">
              Username
            </label>
            <input
              name="username"
              type="text"
              id="loginuser"
              onChange={handleInputChange}
              autoComplete="username"
              className="border rounded p-2 m-2 bg-white"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="loginpassword" className="mt-3 p-3 mr-1.5">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="loginpassword"
              onChange={handleInputChange}
              autoComplete="current-password"
              className="border rounded p-2 m-2 bg-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 rounded-xl text-white text-md hover:bg-blue-600 w-50 m-5 mb-10 p-5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export {LoginForm};
