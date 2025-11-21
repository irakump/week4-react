import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useLocation, useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      // post login credentials to API
      const userInfo = await postLogin(credentials);
      console.log(userInfo);

      // set token to local storage
      setUser(userInfo.user);

      // set user to state
      localStorage.setItem('token', userInfo.token);

      // navigate to home
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      // remove token from local storage
      //localStorage.removeItem('');
      localStorage.clear();

      setUser(null); // set user to null

      // navigate to home
      navigate('/');
      // or to login page (if app requires login)
      //navigate('/login');
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {

    // get token from local storage
    const token = localStorage.getItem('token');

    try {

      // if token exists, get user data from API
      if (token) {
        const userResponse = await getUserByToken(token);
        setUser(userResponse.user); // set user to state
      }

      console.log('location:', location);
      navigate(location.pathname); // navigate to location page (refresh)

    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider value={{handleLogin, handleLogout, handleAutoLogin, user}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};
