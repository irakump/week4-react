import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useState} from 'react';
import EditDialog from './EditDialog';

//const MediaRow = ({item}) => {
const MediaRow = (props) => {
  const {item, deleteMedia, modifyMedia} = props;

  // Haetaan user contextista
  const {user} = useUserContext();

  const token = localStorage.getItem('token');

  // Tarvitaan dialogin näyttämiseen (default value = false)
  const [showEdit, setShowEdit] = useState(false);

  const isLoggedIn = !!user;
  const isOwner = isLoggedIn && user.user_id === item.user_id;
  const isAdmin = isLoggedIn && user.level_name == 'Admin';
  const canEdit = isOwner || isAdmin;

  const handleModify = () => {
    console.log('HandleModify function, avataan dialogi');
    setShowEdit(true);
  };

  const handleDelete = () => {
    console.log('Poistetaan elementti');

    // Varmistetaan, haluaako poistaa (ok => poisto)
    if (confirm('Haluatko varmasti poistaa kuvan?')) {
      deleteMedia(item.media_id, token);
    }

  };

  return (
    <>
      <tr>
        <td>
          <img src={item.thumbnail} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>
        <td>{item.username}</td>
        <td>
          <Link to="/single" state={item} className='bg-blue-500 p-2 rounded-md text-white'>
            View
          </Link>

          {canEdit && (
            <>
              <div
                className="bg-blue-600 cursor-pointer mx-auto rounded-2xl text-center m-2 hover:bg-blue-400 text-blue-50 p-1.5"
                onClick={handleModify}
              >
                Modify
              </div>
              <div
                className="bg-red-600 cursor-pointer mx-auto rounded-2xl text-center m-2 hover:bg-red-400 text-blue-50 p-1.5"
                onClick={handleDelete}
              >
                Delete
              </div>
              {showEdit && (
                <EditDialog item={item}
                modifyMedia={modifyMedia}
                onClose={() => setShowEdit(false)}
                />
              )}
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default MediaRow;
