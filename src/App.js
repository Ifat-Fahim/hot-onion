import React from "react";
import Choose from "./Components/Choose/Choose";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllFood from "./Components/MenuTabs/AllFood";
import FoodDetail from "./Components/FoodDetail/FoodDetail";
import CartContextProvider from "./Contexts/CartContext";
import CartDetail from "./Components/CartDetail/CartDetail";
function App() {
    return (
        <CartContextProvider>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/food-detail/:foodId">
                        <FoodDetail />
                    </Route>
                    <Route path="/cart">
                        <CartDetail />
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
    );
}

export default App;
