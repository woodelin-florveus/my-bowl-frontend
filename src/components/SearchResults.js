const SearchResults = ({searchMeal}) => {

   console.log(searchMeal)


   //iterate through array

    return (
        <div className="resultContainer">
            <ul className="resultField">
                { searchMeal.length > 0 && searchMeal.map((result, index) => (
                    <li className="result_cards" key={index}>
                        <img src={result.food.image} alt="food_image" />
                        <div className="card_content">
                            <h3>{result.food.label}</h3>
                            <p> Add protein and servings here</p>
                        </div>
                    </li>
                ))}                
            </ul>
        </div>
    )

}


export default SearchResults;