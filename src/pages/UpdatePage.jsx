import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddPage from './AddPage'

function UpdatePage() {
    const { RecipeId } = useParams()
console.log(RecipeId);
    const [recipe, setRecipe] = useState()

    const fetchRecipe = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes/${RecipeId}`)
            if (response.ok) {
              const recipe = await response.json()
              setRecipe(recipe)
              console.log(recipe)
            }
        } catch(error)
        {console.log(error)}
        
      }
    
      useEffect(() => {
        fetchRecipe()
      }, [])



    return (
        <>
        <div className='updateBorder'>
       {recipe && <AddPage isUpdate recipe={recipe} />} 
       </div>
        </>
    )
    }
    
    
    
    
    
    
    
    export default UpdatePage