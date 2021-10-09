import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviePage from '../pages/MoviePage';
import MoviesHome from '../pages/MoviesHome';


export default function AppRoute() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MoviesHome} />
                    <Route path="/MovieDetails/:id" component={MoviePage} />
                </Switch>

            </BrowserRouter>
        </>
    )
}
