import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function RecipePage() {
    const {RecipeId} = useParams()
    const [oneRecipe, setOneRecipe] = useState()
    const [oneRandomRecipe, setOneRandomRecipe] = useState()
    const navigate = useNavigate()
    

    const getRecipe = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes/${RecipeId}`)
          if (response.ok) {
            const parsed = await response.json()
            setOneRecipe(parsed)
          }
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        getRecipe()
      }, [RecipeId])

      const handleDelete = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes/${RecipeId}`, {
            method: 'DELETE',
          })
          if (response.ok) {
            const parsed = await response.json()
            console.log(parsed)
            navigate('/')
          }
        } catch (error) {
          console.log(error)
        }
      }

    return oneRecipe ? (
        <>
        <div className='navBarSpace centerAll'>
      <h3>{oneRecipe.recipeName}</h3>
      <img src={oneRecipe.image} style={{height: '500px', width: '500px', borderRadius:'100px'}}/>
      <h3>Ingredients:</h3>
      <p>{oneRecipe.ingredients} <br /></p>
      <br />
      <h3>Directions:</h3>
      <p>{oneRecipe.directions}</p>
      <Link to={`/edit-recipe/${oneRecipe.id}`}>
      <button type='button'>Edit</button>
      </Link>
      <button type='button' onClick={handleDelete}>delete</button>
        </div>
      </>
    ) : (
        <h1>Loading...</h1>
    )
    }
    
    export default RecipePage