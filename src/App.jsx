import React from 'react'
import "./App.css"
import {Route, Routes} from "react-router-dom"
import Header from './Header/Header'
import Offers from './pages/offers/offers'
import Delivery from './pages/delivery/Delivery'
import About from './pages/about/About'
import Makeup from './pages/makeup/Makeup'
import Contact from './pages/contact/Contact'
import Parfumes from './pages/makeup/parfumes/Parfumes'
import Makeupp from './pages/makeup/Makeup/MakeUp'
import Hair from './pages/makeup/hair/Hair'
import Skincare from './pages/makeup/skincare/Skincare'
import ForMen from './pages/makeup/forMen/ForMen'
import Accessories from './pages/makeup/accessories/Accessories'
import Health from './pages/makeup/health/Health'
import Gifts from './pages/makeup/gifts/Gifts'
import Brands from './pages/makeup/Brands/Brands'
import Navbar from './Navbar/Navbar'
import Favourite from './Favourites/Favourites'
import Club from './pages/club/Club'
import SinglePage from './pages/singlePage/SinglePage'
import Cart from './cart/Cart'
import Bath from './pages/makeup/bath/Bath'
import Description from './pages/singlePage/description/Description'
import Characteristics from './pages/singlePage/Characteristics/Characteristics'
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Makeup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/parfumes' element={<Parfumes/>}/>
        <Route path='/makeup' element={<Makeupp/>}/>
        <Route path='/hair' element={<Hair/>}/>
        <Route path='/skincare' element={<Skincare/>}/>
        <Route path='/bath' element={<Bath/>}/>
        <Route path='/formen' element={<ForMen/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/health&care' element={<Health/>}/>
        <Route path='/gifts' element={<Gifts/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/favourites' element={<Favourite/>}/> 
        <Route path='/club' element={<Club/>}/>
        <Route path='/singlepage/:id' element={<SinglePage/>}>
          <Route path='/singlepage/:id/characteristics' element={<Characteristics/>}/>
          <Route path='/singlepage/:id/description' element={<Description/>}/>
        </Route>
        <Route path='/cart/:id' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App