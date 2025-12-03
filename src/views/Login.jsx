import {useState} from 'react';
import {LoginForm} from '../components/Loginform';
import RegisterForm from './../components/RegisterForm';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Näytä joko kirjaudu tai rekisteröidy, togglaa napin tekstiä formin mukaan
  return (
    <>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <br />
      <button
        className="bg-indigo-500 rounded-xl text-white text-md hover:bg-indigo-600 p-5"
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin
          ? 'Uusi käyttäjä? Rekisteröidy tästä'
          : 'Onko sinulla tunnukset? Kirjaudu tästä'}
      </button>
    </>
  );
};

export default Login;
