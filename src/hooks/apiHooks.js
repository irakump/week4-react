import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';
const AUTH_API = import.meta.env.VITE_AUTH_API + '/users/';

const useMedia = () => {
  // mediaArray state here
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    try {
      // Hae mediadata
      const getMedia = async () => {
        const mediaData = await fetchData(MEDIA_API);
        //console.log(mediaData);

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

const useAuthentication = () => {

  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      fetchOptions,
    );
    return loginResult;
  };

  // useAuthenticationin return
  return {postLogin};
};

// Use user hook
const useUser = () => {

  const getUserByToken = async (token) => {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    };

    const tokenResult = fetchData(`${AUTH_API}/token`, options);
    return tokenResult;
  };

  const postUser = async (user) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }

    const registrationResult = await fetchData(AUTH_API, options);

    //console.log('reg.result:', registrationResult);

    return registrationResult;

  };

  // Palauta funktiot js-objektina (getUserBytoken nimellä getUserBytoken)
  return {getUserByToken, postUser};
};

export {useMedia, useAuthentication, useUser};
