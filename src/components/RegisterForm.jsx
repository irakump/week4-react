import useForm from '../hooks/formHooks';
import {useUser} from '../hooks/apiHooks';

const RegisterForm = () => {
  // useAuthentication palauttaa postLogin-funktion
  const {postUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegistration = async (formData) => {
    //console.log(formData); // Älä koskaan loggaa tuotannossa login-tietoja
    try {
      const userInfo = await postUser(formData);
      //localStorage.setItem('token', userInfo.token);
      console.log(userInfo);
      alert('Successful registration');
    } catch (error) {
      console.log('Registration error: ', error);
      alert(`Registration failed: ${error.message}`); // Kerro käyttäjälle, miksi kirjautuminen epäonnistui
    }
  };

  const {handleInputChange, handleSubmit} = useForm(doRegistration, initValues);


  return (
    <>
      <h2>Rekisteröidy</h2>
      <div id="login-div">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="registeruser">Username</label>
            <input
              name="username"
              type="text"
              id="registeruser"
              onChange={handleInputChange}
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleInputChange}
              autoComplete="current-password"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleInputChange}
              />
          </div>
          <button type="submit">Rekisteröidy</button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
