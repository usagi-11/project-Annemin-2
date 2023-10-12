import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllRecipesPage() {

    const [recipes, setRecipes] = useState([])

  async function getRecipes() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes`)
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
  {recipes.map((oneRecipe)=>{
    return (
    <div className='imageSpace' key={oneRecipe.id}>
      <Link className='recipeTitle' to={`/recipe-page/${oneRecipe.id}`}>
      <h1>{oneRecipe.recipeName}</h1>
      <img className='myRecipeImg' src={oneRecipe.image} style={{height: '400px', width: '400px', borderRadius:'100px'}}/>
      </Link>
      </div>
    )
  })}
  </>
)
}







export default AllRecipesPage