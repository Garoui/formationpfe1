import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home'
import Footer from './Footer';
import Hello from './Hello';
import App from '../App';
import Erreur from './Erreur';
export default function Routage() {
  return (
    <div>
      <Navbar/>
<Routes>
<Route path='Home' element={<Home/>}  />
<Route path='Hello' element={<Hello/>}  />
<Route path='App' element={<App/>}  />
<Route path='*' element={<Erreur/>}  />
</Routes>

      <Footer/>
    </div>
  )
}
