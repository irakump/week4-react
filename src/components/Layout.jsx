// Shared layout for all views

import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';

const Layout = () => {
  const {handleAutoLogin, user} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  // <ul className='bg-amber-300'>

  return (
    <div>
      <nav className="mb-5 text-xl text-blue-600">
        <ul className="flex flex-row gap-5 *:font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>

          {user && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <Link to="/Logout">Logout</Link>
              </li>
            </>
          )}

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
