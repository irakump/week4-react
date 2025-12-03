import {useState, useEffect} from 'react';
import HookDemo from '../components/HookDemo';
import {useUser} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks';

const Profile = () => {
  // user state korvattu contextissa olevalla statella
  //const [user, setUser] = useState(null); // State, joka päivittää UI:n (alkuarvona tyhjä = falsy)
  const [error, setError] = useState('');
  const {getUserByToken} = useUser();
  const {user} = useUserContext();

  // Jos käyttäjä on olemassa, näytetään tiedot (false/falsy user -> ei näytetä)
  return (
    <>
      <div className='w-full flex flex-col items-center *:w-100'>
        <h2 className="font-semibold text-2xl bg-fuchsia-200 hover:bg-fuchsia-300 md:bg-blue-200 md:hover:bg-blue-300 p-4 max-w-sm">
          Käyttäjäprofiili
        </h2>
        {user ? (
          <>
            <div className="max-w-sm shadow-md rounded bg-purple-50 *:p-5">
              <h3 className="bg-brand p-2">{user.username}</h3>
              <p className='bg-pink-50'>{user.email}</p>
              <p className="p-1 pb-5 bg-amber-50">Rekisteröitynyt: {user.created_at}</p>
            </div>
          </>
        ) : (
          <p>Tietoja ladataan</p>
        )}

        {error && (
          <>
            <p>Profiilin tietojen lataaminen epäonnistui</p>
            <p>{error}</p>
          </>
        )}
      </div>
    </>
  );
};

Profile.propTypes = {};

export default Profile;
