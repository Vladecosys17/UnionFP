import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'


export default function App(){
return (
<div>
<Navbar />
<main className="container">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/programs" element={<Programs/>} />
<Route path="/involve" element={<GetInvolved/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<Footer />
</div>
)
}