import { ApplicationForm } from "../ApplicationFormPage/ApplicationFormPage";
import { HomePage } from "../HomePage/HomePage";
import { ListTrips } from "../ListTripsPage/ListTripsPage";

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTrips />
                </Route>

                <Route exact path={"/trips/application"}>
                    <ApplicationForm />
                </Route>

            </Switch>
        </BrowserRouter>

    );
}
