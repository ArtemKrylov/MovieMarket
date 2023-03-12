import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'utils/firebaseConfig';
import { toast } from 'react-hot-toast';

//creating context UserContext for auth
export const UserContext = createContext();

//custom hook to use UserContext
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('User');
  const [userEmail, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const docRef = [db, 'users', userId];

  //when auth modal is opened - add body class body--opened-modal, when closed - remove (to settle body height to 100vh and overflow: hidden)
  useEffect(() => {
    document.querySelector('body').classList.toggle('body--opened-modal');
  }, [isAuthModalOpened]);

  function closeAuthModal() {
    setIsAuthModalOpened(false);
  }

  function logIn(name, email) {
    setIsLoggedIn(true);
    setUserName(name ?? 'User');
    setUserEmail(email);
  }

  async function logOut() {
    setIsLoggedIn(false);
    setUserName(null);
    setUserEmail(null);
    setUserId(null);
    try {
      await signOut(auth);
      toast.success('Signed out!');
    } catch (error) {
      console.error(error);
    }
  }

  async function addImgToFirestore(imgUrl) {
    const userData = await getDoc(doc(db, 'users', userId));
    console.log('userData', userData.data());
    const userImgArr = userData.data().savedImg ?? [];
    console.log('userImgArr', userImgArr);

    if (userImgArr.includes(imgUrl)) {
      toast.warning('This image is already in your favourites!');
      return;
    }
    console.log('updating firestore');
    await updateDoc(doc(db, 'users', userId), {
      savedImg: [...userImgArr, imgUrl],
    });
    toast.success('Successfully added to your favourites!');
  }

  async function addMovieToFavourites(movie) {
    console.log('movie: ', movie);
    try {
      const userData = await getDoc(doc(db, 'users', userId));
      const userMovies = userData.data()?.savedMovies ?? [];

      if (
        userMovies.length > 0 &&
        userMovies.find(userMovie => userMovie.id === movie.id)
      ) {
        toast.error('This movie is already in your favourites!');
        return;
      }

      await updateDoc(doc(db, 'users', userId), {
        savedMovies: [movie, ...userMovies],
      });

      toast.success('Saved successfully!');
    } catch (error) {
      console.error(error);
    }
  }

  async function getFavouriteMovies() {
    if (!isLoggedIn) return;
    try {
      const userData = await getDoc(doc(db, `users`, userId));
      const userMovies = userData.data()?.savedMovies ?? [];
      return userMovies;
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMovieFromFavourites(id) {
    try {
      const userData = await getDoc(doc(db, 'users', userId));
      const userMovies = userData.data()?.savedMovies ?? [];
      const filteredMovies = userMovies.filter(movie => {
        return movie.id !== Number.parseInt(id);
      });

      await updateDoc(doc(db, 'users', userId), {
        savedMovies: filteredMovies,
      });
      toast.success('Deleted from favourites successfully');
    } catch (error) {
      console.log(error);
    }
  }

  async function getSavedImgFromFirestore() {
    return (await getDoc(doc(...docRef))).data().savedImg ?? [];
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userName,
        userEmail,
        setUserName,
        logIn,
        logOut,
        userId,
        setUserId,
        addImgToFirestore,
        getSavedImgFromFirestore,
        isAuthModalOpened,
        setIsAuthModalOpened,
        closeAuthModal,
        addMovieToFavourites,
        getFavouriteMovies,
        deleteMovieFromFavourites,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};
