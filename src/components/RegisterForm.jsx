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
    <div className="w-full flex flex-col gap-3 mt-10">
      <h2 className="text-xl font-semibold mb-2">Rekisteröidy</h2>
      <div id="login-div">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="registeruser" className="mt-3 p-3">Username</label>
            <input
              name="username"
              type="text"
              id="registeruser"
              onChange={handleInputChange}
              autoComplete="username"
              className="border rounded p-2 m-2 bg-white"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="mt-3 p-3 mr-1.5">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleInputChange}
              autoComplete="current-password"
              className="border rounded p-2 m-2 bg-white"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="email" className="mt-3 p-3 mr-1.5">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleInputChange}
              className="border rounded p-2 m-2 bg-white"
              />
          </div>
          <button type="submit"
          className="bg-blue-500 rounded-xl text-white text-md hover:bg-blue-600 w-50 m-5 mb-10 p-5">Rekisteröidy</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
