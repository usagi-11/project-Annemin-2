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
            <div key={oneUser.id}>
              <div className='user'>
                <img className='userImg' src={oneUser.image}/>
                <p className='userName'>{oneUser.name}</p>
              </div>
                {oneUser.recipesRandom.map((userRecipe)=>{
                    return (
                    <div key={userRecipe.id}>
                    <Link to={`/random-recipe-details-page/${userRecipe.id}`}>
                    <h3>{userRecipe.recipeName}</h3>
                    <img className='randomRecipes' src={userRecipe.image} style={{height: '500px', width: '500px', borderRadius:'100px 0 100px 0'}} />
                    </Link>
                    </div>
                    )
                })}
            </div>
        )
    })}  


  </ul>
  </>
)
}







export default RandomRecipesPage