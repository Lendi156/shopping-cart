import React, { useEffect } from 'react'
import './App.css'
import { Container, Stack, Button } from '@mui/material'
import Product from './component/Product'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from './redux/reducers/productListSlice'
import { setCartItems } from './redux/reducers/cartItemListSlice'

function App () {
  const dispatch = useDispatch()
  const productListComponent = []
  const products = useSelector((state) => state.products.products)
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  const productsData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const responseJson = await response.json()
    const data = []
    await responseJson.forEach((product) =>
      data.push({ ...product, qty: 0 })
    )
    dispatch(setProducts(data))
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    const productexist = products.find((x) => x.id === product.id)
    if (productexist) {
      dispatch(setProducts(
        products.map((x) =>
          x.id === product.id ? { ...productexist, qty: productexist.qty + 1 } : x
        )
      ))
    }
    if (exist) {
      dispatch(setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      ))
    } else {
      dispatch(setCartItems(
        [...cartItems, { ...product, qty: 1 }]
      ))
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    const productexist = products.find((x) => x.id === product.id)
    if (cartItems.length > 0) {
      if (productexist.qty === 1) {
        dispatch(setProducts(
          products.map((x) =>
            x.id === product.id ? { ...productexist, qty: 0 } : x
          )
        ))
      } else {
        dispatch(setProducts(
          products.map((x) =>
            x.id === product.id ? { ...productexist, qty: productexist.qty - 1 } : x
          )
        ))
      }
      if (exist.qty === 1) {
        dispatch(setCartItems(
          cartItems.filter((x) => x.id !== product.id)
        ))
      } else {
        dispatch(setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        ))
      }
    }
  }

  const onBuy = () => {
    dispatch(setProducts(
      products.map((product) => ({ ...product, qty: 0 }))
    ))
    dispatch(setCartItems([]))
  }

  useEffect(() => {
    productsData()
  }, [])

  products.forEach((product) => {
    productListComponent.push(
      <Product product={product} onAdd={onAdd} onRemove={onRemove}/>
    )
  })

  return (
    <Container>
      <Button onClick={() => onBuy()}>Buy Products</Button>
      <Stack spacing={2}>
        {productListComponent}
      </Stack>
    </Container>
  )
}

export default App
