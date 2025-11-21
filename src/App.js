import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home.jsx';
import Addiction from './components/AdictionScale/AdictionScale.jsx';
import Strategies from './components/Strategies/Strategies.jsx';
import Contact from './components/Contact/Contact.jsx';
import Result from './components/Result/Result.jsx';


export default function App(){
return (
<div className="min-h-screen flex flex-col bg-[#000814] text-[#F1F2FF]">
<Navbar />
<main className="flex-1 py-8">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/addiction" element={<Addiction/>} />
<Route path="/strategies" element={<Strategies/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/result" element={<Result/>} />
</Routes>
</main>
<Footer />
</div>
)
}