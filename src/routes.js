import React from "react";
import { Redirect, Switch, Route, Router, BrowserRouter } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"

//pages
import TodosPage from "./pages/TodosPage"
import LoginPage from "./pages/Login"
import Register from "./pages/Register";
import WelcomePage from "./pages/WelcomePage";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={WelcomePage}
                />
                <Route
                    path="/login"
                    component={LoginPage}
                />
                <Route
                    path="/register"
                    component={Register}
                />
                <Route
                    path="/todos"
                    component={TodosPage}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
