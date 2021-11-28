import { useState } from "react"

const SearchResults = ({searchMeal}) => {

   console.log(searchMeal)


   const [limit, setLimit] = useState(8)


   const faulty_image = "https://dummyimage.com/300x300/e3dce3/fff.jpg&text=Food+Image+Not+Available"


   //iterate through array

    return (
        <div className="resultContainer">
            <ul className="resultField">
                { searchMeal.length > 0 && searchMeal.slice(0, limit ? limit : searchMeal.length).map((result, index) => (
                    <li className="result_cards" key={index}>
                        {result.food.image ? <img src={result.food.image} alt="food_image" /> : <img src={faulty_image} alt="not_rendered" />}
                        <div className="card_content">
                            <h3>{result.food.label}</h3>
                            <ul className="nutrition_info">
                                <h3 className="calories">{result.food.nutrients.ENERC_KCAL} Cal</h3>
                                <li className="protein">
                                    <span>Protein:{result.food.nutrients.PROCNT}</span>
                                </li>
                                <li className="fat">
                                    <span>Fat:{result.food.nutrients.FAT}</span>
                                </li>
                                <li className="carbs">
                                    <span>Carbs:{result.food.nutrients.CHOCDF}</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                ))}                
            </ul>
        </div>
    )

}


export default SearchResults;