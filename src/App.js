import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledContainer from "./components/StyledContainer";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";


const App = () => {
  return (
    <StyledContainer>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddRecipe" element={<AddRecipe />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <AboutUs/>
      <AddRecipe/>
    </StyledContainer>
  );
};

export default App;
