import {useState} from 'react';
import {useNavigate} from 'react-router';
import useForm from '../hooks/formHooks';

const EditDialog = ({item, modifyMedia, onClose}) => {
  //const [title, setTitle] = useState(false);

  const navigate = useNavigate();

  const initValues = {
    title: item.title,
    description: item.description,
  };

  const doModify = async (inputs) => {
    const token = localStorage.getItem('token');

    try {
      await modifyMedia(inputs, item.media_id, token);
      onClose();
      navigate(0);
    } catch (error) {
      console.error('Error while modifying data', error);
      alert('Media is not modified!');
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doModify,
    initValues,
  );

  return (
    <div className="fixed inset-0 p-4 bg-stone-100 flex items-center justify-center m-auto">
      <dialog open className="w-full max-w-md p-6 bg-white rounded-xl m-auto">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Modify</h1>
          <form onSubmit={handleSubmit} className="flex flex-col *:p-5">
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-5 font-medium">
                Title
              </label>
              <input
                name="title"
                type="text"
                id="title"
                onChange={handleInputChange}
                className="border rounded p-3 bg-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="mb-5 font-medium">
                Description
              </label>
              <textarea
                name="description"
                rows={5}
                id="description"
                onChange={handleInputChange}
                className="border rounded p-4 bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 rounded-xl text-white text-md hover:bg-blue-600 w-50 m-auto"
              //disabled={file && inputs.title.length > 3 ? false : true}
            >
              Modify
            </button>
            <button onClick={onClose} className='hover:font-bold'>Close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EditDialog;
