import { useState } from 'react'
import './App.css'
import { ProductList } from './Component/ProductList'
import { DummyProduct } from './Component/Dummy'
import productData from './assets/data/ProductData.json'
import dummyData from './assets/data/dummy.json'
import {Car} from './Component/ConditionalRender'
import{Bike} from './Component/ConditionalRender'
function App() {
  return (
    <>
     <ProductList headings="Product List is Here" data={dummyData} />
     <ProductList headings="Product List is Here" data={dummyData} />
     <DummyProduct/>
     <Car/>
     <Bike/>
    </>
  )
}

export default App
