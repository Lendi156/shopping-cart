import React, { useEffect } from 'react'
import './App.css'
import { Container, Stack, Button } from '@mui/material'
import Product from './component/Product'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from './redux/reducers/productListSlice'
import { setCartItems } from './redux/reducers/cartItemListSlice'
import { getProductsData } from './utils/utils'

function App () {
  const dispatch = useDispatch()
  const productListComponent = []
  const products = useSelector((state) => state.products.products)
  const cartItems = useSelector((state) => state.cartItems.cartItems)

  // const onAdd = (product) => {
  //   const productInCartItemsexist = cartItems.find((cartItem) => cartItem.id === product.id)
  //   const productexist = products.find((productTarget) => productTarget.id === product.id)
  //   if (productexist) {
  //     dispatch(setProducts(
  //       products.map((productTarget) =>
  //         productTarget.id === product.id ? { ...productexist, qty: productexist.qty + 1 } : productTarget
  //       )
  //     ))
  //   }
  //   if (productInCartItemsexist) {
  //     dispatch(setCartItems(
  //       cartItems.map((cartItem) =>
  //         cartItem.id === product.id ? { ...productInCartItemsexist, qty: productInCartItemsexist.qty + 1 } : cartItem
  //       )
  //     ))
  //   } else {
  //     dispatch(setCartItems(
  //       [...cartItems, { ...product, qty: 1 }]
  //     ))
  //   }
  // }

  const onRemove = (product) => {
    const productInCartItemsexist = cartItems.find((cartItem) => cartItem.id === product.id)
    const productexist = products.find((productTarget) => productTarget.id === product.id)
    if (cartItems.length > 0) {
      if (productexist.qty === 1) {
        dispatch(setProducts(
          products.map((productTarget) =>
            productTarget.id === product.id ? { ...productexist, qty: 0 } : productTarget
          )
        ))
      } else {
        dispatch(setProducts(
          products.map((productTarget) =>
            productTarget.id === product.id ? { ...productexist, qty: productexist.qty - 1 } : productTarget
          )
        ))
      }
      if (productInCartItemsexist.qty === 1) {
        dispatch(setCartItems(
          cartItems.filter((cartItem) => cartItem.id !== product.id)
        ))
      } else {
        dispatch(setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === product.id ? { ...productInCartItemsexist, qty: productInCartItemsexist.qty - 1 } : cartItem
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
    getProductsData(dispatch)
  }, [])

  products.forEach((product) => {
    productListComponent.push(
      <Product product={product} onRemove={onRemove}/>
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
