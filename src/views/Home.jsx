import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useState} from 'react';

const mediaArray = [
  {
    media_id: 8,
    user_id: 5,
    filename: 'https://place-hold.it/1200x800.jpgtext=Pic1&fontsize=120',
    thumbnail: 'http://place-hold.it/320/240.jpgtext=Thumb2&fontsize=20',
    filesize: 170469,
    media_type: 'image/jpeg',
    title: 'Picture 1',
    description: 'This is a placeholder picture.',
    created_at: '2024-01-07T20:49:34.000Z',
  },
  {
    media_id: 9,
    user_id: 7,
    filename: 'https://place-hold.it/800x600.jpgtext=Pic2&fontsize=72',
    thumbnail: 'http://place-hold.it/320/240.jpgtext=Thumb3&fontsize=20',
    filesize: 1002912,
    media_type: 'image/jpeg',
    title: 'Pic 2',
    description: '',
    created_at: '2024-01-07T21:32:27.000Z',
  },
  {
    media_id: 17,
    user_id: 2,
    filename:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'http://place-hold.it/320/240.jpgtext=Thumb1&fontsize=20',
    filesize: 1236616,
    media_type: 'video/mp4',
    title: 'Bunny',
    description: 'Big Buck Bunny',
    created_at: '2024-01-07T20:48:13.000Z',
  },
];

// Valittu item tallennetaan selectedItem-muuttujaan

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>

       <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />

      <h2>My Home</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} setSelectedItem={setSelectedItem}/>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
