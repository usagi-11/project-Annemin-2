 import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function RandomRecipesPage() {

     const [users, setUsers] = useState([])

   

 async function getUsers() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users?_embed=recipesRandom`)
      if (response.ok) {
        const allUsers = await response.json()
        console.log(allUsers);
        setUsers(allUsers)
      }
    } catch (error) {
      console.log(error)
    }
}
useEffect(() => {
    getUsers()
}, []) 


 return (
  <>
  <ul> 
      {users.map((oneUser)=>{
        return(
            <div className='userRecipesBorder' key={oneUser.id}>
              <div className='user'>
                <img className='userImg' src={oneUser.image}/>
                <p className='userName'>{oneUser.name}</p>
              </div>
              <div className='randomDivContainer'>
                {oneUser.recipesRandom.map((userRecipe)=>{
                    return (
                    <div className='randomDiv' key={userRecipe.id}>
                    <Link className='recipeTitle' to={`/random-recipe-details-page/${userRecipe.id}`}>
                    <h1 >{userRecipe.recipeName}</h1>
                    <div >
                    <img className='randomRecipes' src={userRecipe.image} style={{height: '400px', width: '400px', borderRadius:'100px 0 100px 0'}} />
                    </div>
                    </Link>
                    </div>
                    )
                })}
              </div>
            </div>
        )
    })}  


  </ul>
  </>
)
}







export default RandomRecipesPage