
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
    <>
    
        <nav>
            {/* list items */}
            <ul>
                <Link to="/home">
                    Home
                </Link>
                <Link to="/mealplan">
                    Meal Plan
                </Link>
                <Link to="/about">
                    About
                </Link>
            </ul>            

        </nav>
    
    </>
    )

}

export default Nav; 