import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <h3>{oneRandomRecipe.recipeName}</h3>
    <img src={oneRandomRecipe.image} style={{height: '500px', width: '500px', borderRadius:'100px'}}/>
    <h3>Ingredients:</h3>
    <p>{oneRandomRecipe.ingredients} <br /></p>
    <br />
    <h3>Directions:</h3>
    <p>{oneRandomRecipe.directions}</p>
      </div>
    </>
  ) : (
      <h1>Loading...</h1>
  )
    }
    
    
    
    
    
    
    
    export default RandomRecipeDetailsPage