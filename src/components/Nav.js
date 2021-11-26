
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
    <>

        <img src="https://dummyimage.com/1200x500/000/fff" className="main_image" alt="dummy_image" />
    
        <nav>
            {/* list items */}
            <ul>
                <NavLink exact to="/home">
                    Home
                </NavLink>
                <NavLink exact to="/mealpage">
                    Meal Page
                </NavLink>
                <NavLink exact to="/mealplan">
                    Meal Plan
                </NavLink>
                <NavLink exact to="/about">
                    About
                </NavLink>
                <NavLink exact to="/about">
                    Faq
                </NavLink>
            </ul>            

        </nav>
    
    </>
    )

}

export default Nav; 