import React , {lazy} from 'react'
import { Route , Routes } from 'react-router-dom'

import Footer from './Footer';
import Navbar from './Navbar';

// import Home from './Home';
// import Hello from './Hello';
// import App from '../App';
// import Erreur from './Erreur';
const Home = lazy(() => import ('./Home'));
const Hello = lazy(() => import ('./Hello'));
const Erreur = lazy(() => import ('./Erreur'));
const App = lazy(() => import ('../App'));

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
