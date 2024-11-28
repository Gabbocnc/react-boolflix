import React from 'react';
import { GlobalProvider } from './context/GlobalContext'
import './App.css'
import MovieList from './Components/MovieList';
import SearchText from './Components/SearchText';


function App() {


  return (
    <>
      <GlobalProvider>
        <SearchText />
        <MovieList />
      </GlobalProvider>
    </>
  )
}

export default App
