import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer/Footer';


function App() {
    return ( < Router >
        <
        NavBar / >
        <
        Routes >

        <
        Route path = "/AboutUs"
        element = { < AboutUs / > }
        /> </Routes >
        <
        Footer / >
        <
        /Router>
    );
}

export default App;