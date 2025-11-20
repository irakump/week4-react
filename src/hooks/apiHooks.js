import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';
const AUTH_API = import.meta.env.VITE_AUTH_API + '/users/';

const useMedia = () => {
  // mediaArray state
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    try {
      // Hae mediadata
      const getMedia = async () => {
        const mediaData = await fetchData(MEDIA_API);
        console.log(mediaData);

        // Hae jokaiselle media-itemille käyttäjä
        const newArray = await Promise.all(
          mediaData.map(async (item) => {
            const user = await fetchData(AUTH_API + item.user_id);
            //console.log(user);
            return {...item, username: user.username};
          }),
        );

        console.log(newArray);
        setMediaArray(newArray);
      };

      getMedia();
    } catch (e) {
      console.log('Error;', e);
    }
  }, []);

  // Komponentille palautetaan mediaArray
  return {mediaArray};
};

export {useMedia};
