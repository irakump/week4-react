// TODO: Add JSX for displaying a mediafile here
// - use e.g. a <dialog> element for creating a modal
// - use item prop to render the media item details
// - use img tag for displaying images
// - use video tag for displaying videos

// jos dialogissa on item, näytetään dialog

// button: tämä oikein:
//<button onClick={() => setSelectedItem}></button>
// väärin (kutsuu heti ja ikuinen loop):
// <button onClick={setSelectedItem}></button>

// tarkista tässä onko video vai kuva
const imageOrVideo = (item) => {

  if (!item) {
    return null;
  }

  if (item.media_type == 'image/jpeg') {
    return <img src={item.thumbnail} alt={item.title} />;
  } else if (item.media_type == 'video/mp4') {
    return <video src={item.filename} width={'600'}controls></video>
  } else {
    return <div>Media type not supported</div>
  }
};

const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  return (
    <>
      {item && (
        <dialog open>
          <div>{item.title}</div>
          <div>{item.description}</div>
          {imageOrVideo(item)}

          <button onClick={() => setSelectedItem('')}>Close dialog</button>
        </dialog>
      )}
    </>
  );
};

export default SingleView;
