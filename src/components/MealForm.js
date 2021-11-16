import { useState, useEffect } from "react";

const MealForm = () => {

    const [searchMeal, setSearchMeal] = useState({
        query: ""
    })

    console.log(searchMeal)


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
            console.log(foodData)
        })
       
    }


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