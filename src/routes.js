import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import TodosPage from "./pages/TodosPage"
import LoginPage from "./pages/Login"
import Register from "./pages/Register";
import WelcomePage from "./pages/WelcomePage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route
                        exact
                        path="/"
                        element={<WelcomePage/>}
                    />
                    <Route
                        path="/login"
                        element={<LoginPage/>}
                    />
                    <Route
                        path="/register"
                        element={<Register/>}
                    />
                    <Route
                        path="/todos"
                        element={<TodosPage/>}
                    />
            </Routes>
        </BrowserRouter>
    );
}

export default Router
