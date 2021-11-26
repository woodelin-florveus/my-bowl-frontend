import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Nav from './Nav'
import HomePage from './HomePage';
import MealPlan from './MealPlan';
import MealSearch from './MealSearch';
import MealPage from './MealPage';



function App(){

    return (
        < div className="app">
        {/* add slider here */}

            <Nav />

            <Switch>
                <Route path="/home">
                    <HomePage />
                </Route>

                <Route path="/mealpage">
                    <MealPage />
                </Route>
                
                <Route path="/mealplan">
                    <MealPlan />
                </Route>

                <Route path="/mealform">
                    <MealSearch />
                </Route>

            </Switch>

        </div>
    )

}


export default App;
