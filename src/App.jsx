import React from 'react';
import { GlobalProvider } from './context/GlobalContext'
import './App.css'
import MovieList from './Components/MovieList';
import AppHeader from './Components/AppHeader';
import HomePage from './Components/HomePage';


function App() {


  return (
    <>
      <GlobalProvider>
        <AppHeader />
        <MovieList />
        <HomePage />

      </GlobalProvider>
    </>
  )
}

export default App
