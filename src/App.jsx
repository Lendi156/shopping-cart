import React, { useState, useEffect } from 'react'
import './App.css'
import { Container, Stack } from '@mui/material'
import Product from './component/Product'

function App () {
  const [products, setproducts] = useState([])
  const productListComponent = []
  const productsData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const responseJson = await response.json()
    const data = []
    await responseJson.forEach((product) =>
      data.push({ ...product, qty: 0 })
    )
    setproducts([...data])
  }

  useEffect(() => {
    productsData()
  }, [])

  products.forEach((product) => {
    productListComponent.push(
      <Product product={product}/>
    )
  })

  return (
    <Container>
      <Stack spacing={2}>
        {productListComponent}
      </Stack>
    </Container>
  )
}

export default App
