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

  const {handleInputChange, handleSubmit, inputs, resetForm} = useForm(doUpload, initValues);

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
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
        />
        <button
          type="submit"
          //disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;

