import React from "react";
import Choose from "./Components/Choose/Choose";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllFood from "./Components/MenuTabs/AllFood";
function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/">
                    <Hero />
                    <AllFood />
                    <Choose />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
