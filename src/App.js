import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home/Index.jsx";
import Addiction from "./components/AdictionScale/Index.jsx";
import Contact from "./components/Contact/Index.jsx";
import Strategies from "./components/Strategies/Index.jsx";
import Result from "./components/Result/Index.jsx";

const App = () => {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/addiction' element={<Addiction/>}/>
        <Route exact path='/strategies' element={<Strategies/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/result' element={<Result/>}/>
      </Routes>
  )
}

export default App
