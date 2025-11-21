import {LogoutForm} from "../components/Logoutform";
import { useUserContext } from "../hooks/contextHooks";

const Logout = () => {

  const {handleLogout} = useUserContext();

  return (
    <>
    <h3>Kirjaudu ulos</h3>
    <button onClick={handleLogout}>Logout</button>
      <LogoutForm/>
    </>
  );
};

export default Logout;
