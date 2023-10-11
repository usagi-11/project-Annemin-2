import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddPage from './pages/AddPage'
import AllRecipesPage from './pages/AllRecipesPage'
/* import ProfilePage from './pages/ProfilePage' */
import RecipePage from './pages/RecipePage'
import UpdatePage from './pages/UpdatePage'
import Navbar from './components/Navbar'
import RandomRecipesPage from './pages/RandomRecipesPage'


function App() {

  return (
    <>
    <div>
    <Navbar/>
    <div className='navBarSpace'></div>
    </div>
      <div>
        <Routes>
        <Route path="/" element={<AllRecipesPage/>} />
        <Route path="/recipe-page/:RecipeId" element={<RecipePage/>} />
        <Route path="/add-recipe" element={<AddPage/>} />
        <Route path="/edit-recipe/:RecipeId" element={<UpdatePage/>} />
        <Route path="/explore" element={<RandomRecipesPage/>} /> 
        </Routes>

      </div>
    </>
  )
}

export default App
