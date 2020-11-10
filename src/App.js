import React from "react";
import Hero from "./Components/Hero/Hero";
import MenuTabs from "./Components/MenuTabs/MenuTabs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <MenuTabs />
        </div>
    );
}

export default App;
