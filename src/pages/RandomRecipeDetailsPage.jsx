import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function RandomRecipeDetailsPage() {
    const {RecipeId} = useParams()
    const [oneRandomRecipe, setOneRandomRecipe] = useState()


    const getRandomRecipe = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/recipesRandom/${RecipeId}`)
        if (response.ok) {
          const parsed = await response.json()
          setOneRandomRecipe(parsed)
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getRandomRecipe()
    }, [RecipeId])

    
  return oneRandomRecipe ? (
      <>
      <div className='navBarSpace'>
      <div className='centerAll'>
    <h1>{oneRandomRecipe.recipeName}</h1>
    <img src={oneRandomRecipe.image} style={{height: '500px', width: '500px', borderRadius:'100px'}}/>
    <h3>Ingredients:</h3>
    <ul>
      {oneRandomRecipe.ingredients.map((ingredient)=>{
        return (
          <div key={oneRandomRecipe.id}>
          <li>{ingredient}</li>
          </div>
        )
      })}
    </ul>
    <h3>Directions:</h3>
    <ol className='directions'>
    {oneRandomRecipe.directions.map((direction)=>{
        return (
          <div key={oneRandomRecipe.id}>
            <li>{direction}</li>
          </div>
        )
      })}
    </ol>
      </div>
      </div>
    </>
  ) : (
      <h1>Loading...</h1>
  )
    }
    
    
    
    
    
    
    
    export default RandomRecipeDetailsPage