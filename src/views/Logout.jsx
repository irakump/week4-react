import {LogoutForm} from "../components/Logoutform";
import { useUserContext } from "../hooks/contextHooks";

const Logout = () => {

  const {handleLogout} = useUserContext();

  return (
    <>
    <h3 className="p-5 font-semibold">Kirjaudu ulos</h3>
    <button onClick={handleLogout} className="bg-blue-500 rounded-xl text-white text-md hover:bg-blue-600 mt-2 p-5">Logout</button>
      <LogoutForm/>
    </>
  );
};

export default Logout;
