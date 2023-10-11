import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllRecipesPage() {

    const [recipes, setRecipes] = useState([])

  async function getRecipes() {
    try {
      const response = await fetch('http://localhost:5000/recipes')
      if (response.ok) {
        const allRecipes = await response.json()
        setRecipes(allRecipes)
      }
    } catch (error) {
      console.log(error)
    }
}
useEffect(() => {
  getRecipes()
}, [])


return (
  <>
  <ul>
  {recipes.map((oneRecipe)=>{
    return (
    <li key={oneRecipe.id}>
      <Link to={`/recipe-page/${oneRecipe.id}`}>
      <h3>{oneRecipe.recipeName}</h3>
      <img className='myRecipeImg' src={oneRecipe.image} style={{height: '400px', width: '400px'}}/>
      </Link>
      </li>
    )
  })}
  </ul>
  </>
)
}







export default AllRecipesPage