import {useLocation, useNavigate} from "react-router";

// Tarkista onko video vai kuva
const imageOrVideo = (item) => {

  if (!item) {
    return null;
  }

  if (item.media_type == 'image/jpeg') {
    return <img src={item.thumbnail} alt={item.title} className="max-w-full rounded-md m-5 align-" />;
  } else if (item.media_type == 'video/mp4') {
    return <video src={item.filename} controls className="max-w-full rounded-md m-5" ></video>
  } else {
    return <div className="max-w-full rounded-md text-lg m-5 text-red-500" >Media type not supported</div>
  }
};

const Single = () => {
  const {state} = useLocation();
  const item = state;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
    <h2 className="font-bold text-xl">Single item</h2>
      {item && (
        <dialog open className=" items-center fixed inset-30 p-4 justify-center">
          <div className="m-5 font-bold">{item.title}</div>
          <div className="m-5">{item.description}</div>
          {imageOrVideo(item)}

          <button onClick={() => navigate(-1)} className="m-5 p-3 bg-blue-400 hover:bg-blue-500 text-lg rounded">Go back</button>
        </dialog>
      )}
    </div>
  );
};

Single.propTypes = {};

export default Single;
