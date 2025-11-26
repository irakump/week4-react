import {useState, useEffect} from 'react';
import HookDemo from '../components/HookDemo';
import {useUser} from '../hooks/apiHooks';
import { useUserContext } from '../hooks/contextHooks';

const Profile = () => {
  // user state korvattu contextissa olevalla statella
  //const [user, setUser] = useState(null); // State, joka päivittää UI:n (alkuarvona tyhjä = falsy)
  const [error, setError] = useState('');
  const {getUserByToken} = useUser();
  const {user} = useUserContext();

  /*
  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem('token');
      try {
        const userResponse = await getUserByToken(token);
        setUser(userResponse.user);
      } catch (error) {
        console.error('getUserData error: ', error);
        setError(error.message);
      }
    };

    getUserData();
  }, []);
  */

  // Jos käyttäjä on olemassa, näytetään tiedot (false/falsy user -> ei näytetä)
  return (
    <>
      <h2>Käyttäjäprofiili</h2>
      {user ? (
        <>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <p>Rekisteröitynyt: {user.created_at}</p>
        </>
      ) : (
        <p>Tietoja ladataan</p>
      )}

      {error && (
        <>
          <p>
            Profiilin tietojen lataaminen epäonnistui
          </p>
          <p>{error}</p>
        </>
      )}

    </>
  );
};

Profile.propTypes = {};

export default Profile;
