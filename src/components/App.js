import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Nav from './Nav'
import HomePage from './HomePage';
import MealPlan from './MealPlan';
import MealSearch from './MealSearch';
import MealPage from './MealPage';
import MealInfo from './MealInfo'
import MealCreateForm from './MealCreateForm';



function App(){

    return (
        < div className="app">
        {/* add slider here */}

            <Nav />

            <Switch>
                <Route path="/home">
                    <HomePage />
                </Route>

                <Route path="/meals/:id">
                    <MealInfo />
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

                <Route path="/mealcreate">
                    <MealCreateForm />
                </Route>

            </Switch>

        </div>
    )

}


export default App;
