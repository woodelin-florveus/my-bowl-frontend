import { useState, useEffect } from "react";
import SearchResults from "./SearchResults"

const MealSearch = () => {

    const [searchMeal, setSearchMeal] = useState({
        query: ""
    })




    const handleChange = (event) => {
        setSearchMeal({[event.target.name]:event.target.value})
    }



    const submitSearch = (event) => {
        event.preventDefault()
       
        fetch("http://localhost:3000/meals/search", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({query: searchMeal.query})
        })
        .then(response => response.json())
        .then(foodData => {
            setSearchMeal(foodData.hints)
            // foodData.hints.map((result) => {
            //     setSearchMeal(result)
            // })
        })
       
    }  
    
    console.log(searchMeal)


    return(
        <div className="formMeal">

            <form className="searchForm" onSubmit={submitSearch}>
                <input
                    value={searchMeal.name}
                    name="query"
                    onChange={handleChange}
                    type="text"
                />
                <input type="submit" value="submit" />
            </form>

            <SearchResults searchMeal={searchMeal} />
            
                         
        </div>
    )
}


export default MealSearch;