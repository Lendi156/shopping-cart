import React, { useEffect } from 'react'
import './App.css'
import { Container, Stack } from '@mui/material'
import Product from './component/Product'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from './redux/reducers/productListSlice'

function App () {
  const dispatch = useDispatch()
  const productListComponent = []
  const products = useSelector((state) => state.products.products)
  const productsData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const responseJson = await response.json()
    const data = []
    await responseJson.forEach((product) =>
      data.push({ ...product, qty: 0 })
    )
    dispatch(setProducts(data))
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
