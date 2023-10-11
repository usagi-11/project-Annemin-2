import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddPage = ({ isUpdate, recipe }) => {
    const navigate = useNavigate()
    console.log(recipe);

    const [recipeName, setRecipeName] = useState(isUpdate ? "recipeName" : "")
    const [image, setImage] = useState(isUpdate ? "image" : "")
    const [ingredients, setIngredients] = useState(isUpdate ? "ingredients" : "")
    const [directions, setDirections] = useState(isUpdate ? "directions" : "")
    const [slug, setSlug] = useState(isUpdate ? "slug" : "")
    const [id, setId] = useState("")

    const onSubmit = async event => {
        event.preventDefault()
        const payload = {recipeName,image,ingredients,directions, slug, id}

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes${isUpdate ? `/${recipe.id}` : ''}`, {
                method: isUpdate ? 'PUT' :  'POST',
                body: JSON.stringify(payload),
              headers: {
                'Content-type': 'application/json',
            },
            }
            )
            console.log(response)
            if (response.ok) {
              const updatedRecipe = await response.json()
              console.log(updatedRecipe)
              navigate(`/recipe-page/${updatedRecipe.id}`)
            }
            } catch (error) {
              console.log(error)
            }
        }

        useEffect(() => {
            if (isUpdate && recipe) {
              setRecipeName(recipe.recipeName)
              setImage(recipe.image)
              setIngredients(recipe.ingredients)
              setDirections(recipe.directions)
            }
          }, [recipe]);



    return (
        <>
        <form onSubmit={onSubmit}>
        <label >
            Recipe Name
        <input type="text" name="recipeName" value={recipeName} onChange={event => setRecipeName(event.target.value)} required/>
        </label>

        <label>
            Image URL
        <input type="text" name="image" value={image} onChange={event => setImage(event.target.value)} required/>
        </label>

        <label>
            Ingredients
        <input type="text" name="ingredients" value={ingredients} onChange={event => setIngredients(event.target.value)} required/>
        </label>

        <label >
            Directions
        <input type="text" name="directions" value={directions} onChange={event => setDirections(event.target.value)} required/>
        </label>


    <button type="submit">{isUpdate ? 'Update' : 'Add'}</button>
        </form>
        </>
    )
    }

    
    
    
    
    
    
    
    export default AddPage