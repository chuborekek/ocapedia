import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import About from './components/routeopediaPage/About'
import CreateProduct from './components/routeopediaPage/CreateProduct'
import CryptoDetail from './components/routeopediaPage/CryptoDetail'
import Home from './components/routeopediaPage/Home'
import NotFound from './components/routeopediaPage/NotFound'
import Product from './components/routeopediaPage/Product'
import ProductDetails from './components/routeopediaPage/ProductDetails'
import ProductList from './components/routeopediaPage/ProductList'
import Layout from './layout/Layout'

const RouteOPedia = () => {
  return <>
    <Routes>
      <Route path='routeopedia' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='crypto/:cryptoSymbol' element={<CryptoDetail/>}/>
        <Route path='crypto/:cryptoSymbol/:cryptoId' element={<CryptoDetail/>}/>
        <Route path='product'>
          <Route path='' element={<Product/>}/>
          <Route path='list' element={<ProductList/>}/>
          <Route path='details/:productId' element={<ProductDetails/>}/>
          <Route path='create' element={<CreateProduct/>}/>
        </Route>
      </Route>
      <Route path="/routeopedia/*" element={<NotFound/>}/>
    </Routes>
  </>
}

export default RouteOPedia