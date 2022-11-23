import React from "react";
import Header from "./Header";
import LegendPage from "./LegendPage";
import NewLegendForm from "./NewLegendForm";
import {  Route, Routes } from "react-router-dom";



function App() {

  

  return (
    <div className="app">
      <Header />   
      <Routes>
      <Route path="/" element={<LegendPage/>} >   
      </Route>
      <Route  path="legends/new" element={<NewLegendForm/>}>   
      </Route>
      </Routes>
    </div>
  );
}

export default App;
