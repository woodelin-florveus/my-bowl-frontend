import { useState, useEffect } from "react";

const MealForm = () => {

    return(
        <div className="formMeal">

            <section className="search_meal">
                <div className="search">
                    <input type="text"  className="search_food" placeholder="what meals are you looking for"/>
                    <button
                    type="submit"
                    className="search_button"
                    />
                </div>
            </section>
             
        </div>
    )
}


export default MealForm;