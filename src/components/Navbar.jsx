import { Link } from 'react-router-dom'

function Navbar() {



    return (
        <nav>
            
            <Link to={"/"} className='navLinks'>
            <h4 className='navText'>My recipes</h4>
            </Link>
            <Link to="/add-recipe" className='navLinks'>
                <h4 className='navText'>Add recipe</h4>
            </Link>
            <Link to="/explore" className='navLinks'>
                <h4 className='navText'>Explore recipes</h4>
            </Link>
            
        </nav>
    )
    }
    
    
    
    
    
    
    
    export default Navbar