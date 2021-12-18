import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {


    const { id } = useParams()

    const [mealInfo, setMealInfo] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const {name, image, calories, nutrition_info} = mealInfo

    useEffect(() => {
        fetch(`http://localhost:3000/meals/${id}`)
        .then(response => response.json())
        .then(mealInfo => {
            setMealInfo(mealInfo)
            setIsLoaded(true)
        })
    },[id])


    console.log(mealInfo)


    if(!isLoaded) return <h2>Loading....</h2>

    return (
        <div className="pageFormat">
            <div className="ui cards">
                <div className="card">
                    <img src={image} alt="food_content" />
                    <div className="content">
                        <div className="header"> Food: {name}</div>
                        <div className="meta"> Calories: {calories}</div>
                        <div className="description">
                            {nutrition_info}
                        </div>
                    </div>
                </div>
            </div>

        {/* <ul className="meal_list">
            <li className="meals">
                <img src={image}  alt="food_list_image"/>
                <div className="meal_content">
                    <h2>Name: {name}</h2>
                    <h3>Cal:{calories}</h3>
                </div>
            </li>
        </ul> */}
        </div>
    )

}



export default MealInfo;