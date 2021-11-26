const SearchResults = ({searchMeal}) => {

   console.log(searchMeal)


   //iterate through array

    return (
        <div className="resultContainer">
            <ul className="resultField">
                <li className="food_card">
                    <img src={searchMeal.image} alt="food_image" />
                    <div className="content">

                    </div>
                </li>                
            </ul>
        </div>
    )

}


export default SearchResults;