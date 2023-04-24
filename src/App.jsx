import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes';
import './App.css'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './Features/Authentication/AuthSlice';
import auth from './firebase/firebase.config';

function App() {

  const dispatch = useDispatch();

  // Setting Up User Persistency 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      }
    })
  }, [])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
