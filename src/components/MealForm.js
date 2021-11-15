import { useState, useEffect } from "react";

const MealForm = () => {

    const [searchMeal, setSearchMeal] = useState('Rice')


    const handleChange = (event) => {
        setSearchMeal(event.target.value)
    }

    const resetSearch = () => {
        setSearchMeal("")
    }

    const callSearch = (event) => {
        event.preventDefault()
        setSearchMeal({...searchMeal})
        resetSearch()

    }

    const submitSearch = (event) => {
        event.preventDefault()

        fetch(`http//localhost:3000/meals/search`, {
            method: "GET", 
            headers: {
                "Content-Type": "application/json", 
                "Accepts": "application/json"
            }, 
             body: JSON.stringify({
                 query: searchMeal
             })
        })

    }



    return(
        <div className="formMeal">


            <form className="searchForm" onSubmit={submitSearch}>
                <input
                    value={searchMeal}
                    onChange={handleChange}
                    type="text"
                />
                <input onClick={callSearch} type="submit" value="SEARCH" />
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