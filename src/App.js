import React from "react";
import Choose from "./Components/Choose/Choose";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllFood from "./Components/MenuTabs/AllFood";
import FoodDetail from "./Components/FoodDetail/FoodDetail";
import CartContextProvider from "./Contexts/CartContext";
import Checkout from "./Components/Checkout/Checkout";
import OrderComplete from "./Components/OrderComplete/OrderComplete";
import AuthContextProvider from "./Contexts/AuthContext";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
function App() {
    return (
        <AuthContextProvider>
            <CartContextProvider>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/food-detail/:foodId">
                            <FoodDetail />
                        </Route>
                        <PrivateRoute path="/cart">
                            <Checkout />
                        </PrivateRoute>
                        <Route path="/order-complete">
                            <OrderComplete />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/sign-up">
                            <SignUp />
                        </Route>
                        <Route exact path="/">
                            <Hero />
                            <AllFood />
                            <Choose />
                            <Footer />
                        </Route>
                    </Switch>
                </Router>
            </CartContextProvider>
        </AuthContextProvider>
    );
}

export default App;
