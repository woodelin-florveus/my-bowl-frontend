import { useHistory } from "react-router-dom";

import { useState, useEffect } from "react";

const MealPlan = () => {

    const history = useHistory()

    const [mealPlan, setMealPlan] = useState([])
    
    //meal plan

    useEffect(() => {
        fetch('http://localhost:3000/meals')
        .then(response => response.json())
        .then(console.log)
    },[])

    const redirect = () => {
        history.push('/mealform')
    }

    return (
        <>
            <section className="mealPlan__intro">
                <h1 className="section__title mealPlan__title"> Meal Plan </h1>
                <div className="meal__creator">
                    <button className="meal_button" onClick={redirect}> + </button>
                </div>
            </section>
        </>
    )

}

export default MealPlan; 