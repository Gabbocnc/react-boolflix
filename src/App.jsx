import React from 'react';
import { GlobalProvider } from './context/GlobalContext'
import './App.css'
import MovieList from './Components/MovieList';
import AppHeader from './Components/AppHeader';


function App() {


  return (
    <>
      <GlobalProvider>
        <AppHeader />
        <MovieList />
      </GlobalProvider>
    </>
  )
}

export default App
