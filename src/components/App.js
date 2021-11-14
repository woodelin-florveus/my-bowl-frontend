import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Nav from './Nav'
import HomePage from './HomePage';



function App(){

    return (
        <>
        {/* add slider here */}
            <Nav />
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </>
    )

}


export default App;
