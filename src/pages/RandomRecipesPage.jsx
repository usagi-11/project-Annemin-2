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
                <img src={oneUser.image}/>
                <p>{oneUser.name}</p>
                {oneUser.recipesRandom.map((userRecipe)=>{
                    return (
                    <div key={userRecipe.id}>
                    <Link to={`/recipe-page/${userRecipe.id}`}>
                    <h3>{userRecipe.recipeName}</h3>
                    <img src={userRecipe.image} />
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