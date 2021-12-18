import { Card } from 'semantic-ui-react'
import React from 'react';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import MealCreateForm from "./MealCreateForm"
import MealCard from "./MealCard"

const MealPlan = () => {

    const history = useHistory()

    const [mealPlan, setMealPlan] = useState([])
    
    //meal plan

    useEffect(() => {
        fetch('http://localhost:3000/meal_plans')
        .then(response => response.json())
        .then(setMealPlan)
    },[])

    const listMeal = mealPlan.map((meal_item) => {
        return(
           <MealCard 
           key={meal_item.id}
           meal_item={meal_item}
           />
        )
    })

    console.log(mealPlan)

    const redirect = () => {
        history.push('/mealform')
    }

    return (
        <div className="pageFormat">
            <section className="mealPlan__intro">
                <h1 className="section__title mealPlan__title"> Meal Plan </h1>
                <div className="meal_lookup">
                    <button className="meal_button" onClick={redirect}> Look up meals </button>
                </div>
                <div className="meal_creator">
                    <button className="create_button"> Create plan </button>
                </div>
            </section>

            <Card.Group>
                <Card>                    
                        {listMeal}                                                
                </Card>
            </Card.Group>

        </div>
    )

}

export default MealPlan; 