import React from "react";
import Choose from "./Components/Choose/Choose";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MenuTabs from "./Components/MenuTabs/MenuTabs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <MenuTabs />
            <Choose />
            <Footer />
        </div>
    );
}

export default App;
