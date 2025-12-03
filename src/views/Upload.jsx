import {useFile, useMedia} from '../hooks/apiHooks.js';
import useForm from '../hooks/formHooks.js';
import {useState} from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();

  const initValues = {
    title: '',
    description: '',
  };

  const doUpload = async (inputs) => {
    console.log('doUpload:', inputs, file);
    const token = localStorage.getItem('token');

    try {
      const fileData = await postFile(file, token);
      console.log('Upload response: ', fileData);

      const mediaResponse = await postMedia(fileData.data, inputs, token);
      console.log('File data posted', mediaResponse);

      // Notify user
      alert('Successful upload');

      // Clear the form
      //resetForm();
    } catch (error) {
      console.log('Upload failed:', error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    //console.log('file state', file);
  };

  const {handleInputChange, handleSubmit, inputs, resetForm} = useForm(
    doUpload,
    initValues,
  );

  return (
    <div className="w-full flex flex-col gap-3 items-center mt-10">
      <h1 className="text-2xl font-semibold mb-2">Upload</h1>
      <form onSubmit={handleSubmit} className="flex flex-col *:p-5">
        <div className="flex flex-col">
          <label htmlFor="title" className='mb-5 font-medium'>Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
            className="border rounded p-3 bg-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className='mb-5 font-medium'>Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
            className="border rounded p-4 bg-white"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="file" className='mb-5 font-medium'>File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
            className="border rounded p-4 bg-white"
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://placehold.co/200x100?text=Choose+Image'
          }
          alt="preview"
          width="200"
          id="upload-image"
          className='m-auto w-full'
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-xl text-white text-md hover:bg-blue-600 w-50 m-auto"
          //disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
