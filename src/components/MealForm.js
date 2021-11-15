import { useState, useEffect } from "react";

const MealForm = () => {

    const [searchMeal, setSearchMeal] = useState("")


    const handleChange = (event) => {
        setSearchMeal({[event.target.name]:event.target.value})
        console.log(event.target.value)
    }


    const submitSearch = (event) => {
        event.preventDefault()
       
    }


    return(
        <div className="formMeal">


            <form className="searchForm" onSubmit={submitSearch}>
                <input
                    value={searchMeal.name}
                    name="searchterm"
                    onChange={handleChange}
                    type="text"
                />
                <input type="submit" value="submit" />
            </form>



            {/* <section className="search_meal">
                <div className="search">
                    <input type="text"  className="search_food" placeholder="what meals are you looking for"/>
                    <button
                    name="search"
                    type="submit"
                    className="search_button"
                    />
                </div>
            </section> */}
             
        </div>
    )
}


export default MealForm;