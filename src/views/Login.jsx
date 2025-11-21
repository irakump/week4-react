import {useState} from 'react';
import {LoginForm} from '../components/Loginform';
import RegisterForm from './../components/RegisterForm';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Näytä joko kirjaudu tai rekisteröidy, togglaa napin tekstiä formin mukaan
  return (
    <>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? 'Rekisteröidy' : 'Kirjaudu'}
      </button>
    </>
  );
};

export default Login;
