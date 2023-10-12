import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function RecipePage() {
    const {RecipeId} = useParams()
    const [oneRecipe, setOneRecipe] = useState()
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
        <div className='navBarSpace'>
        <div className='centerAll'>
      <h1>{oneRecipe.recipeName}</h1>
      <img src={oneRecipe.image} style={{height: '500px', width: '500px', borderRadius:'100px'}}/>
      <h3>Ingredients:</h3>
      <ul>
        {oneRecipe.ingredients.map((ingredient)=>{
          return (
            <li>{ingredient}</li>
          )
        })}
      </ul>
      <h3>Directions:</h3>
      <ol className='directions'>
        {oneRecipe.directions.map((direction)=>{
          return (
            <li>{direction}</li>
          )
        })}
      </ol>
      <div>
      <Link to={`/edit-recipe/${oneRecipe.id}`}>
      <button className='formButton2' type='button'>Edit</button>
      </Link>
      <Link>
      <button className='formButton2' type='button' onClick={handleDelete}>Delete</button>
      </Link>
      </div>
        </div>
        </div>
      </>
    ) : (
        <h1>Loading...</h1>
    )
    }
    
    export default RecipePage