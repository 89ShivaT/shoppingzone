import React, {useState} from 'react'
import Header from './componet/Header'
import Products from './componet/Products'

import { item } from './componet/Api'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductDetails from './componet/ProductDetails'
import Search from './componet/Search'
import Cart from './componet/Cart'
function App() {
  const[data,setData]=useState([...item])
  const[cart,setCart]=useState([]);
  return (
   <>
   <BrowserRouter>
   <Header setData={setData} cart={cart}/>
    <Routes>
      <Route path='/' element={<Products setCart={setCart} cart={cart} productItem={data}/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/search/:term' element={<Search/>}/>
      <Route path='/cart' element={<Cart setCart={setCart} cart={cart} />}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App