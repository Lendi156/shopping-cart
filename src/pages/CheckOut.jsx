import React from 'react'
import { Container, Button, Stack } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { onBuy } from '../utils/utils'
import Product from '../component/Product'

export default function CheckOut () {
  const dispatch = useDispatch()
  const cartListComponent = []
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  cartItems.forEach((product) => {
    cartListComponent.push(
        <Product product={product} />
    )
  })
  return (
    <Container>
        <Stack spacing={2}>
            {cartListComponent}
        </Stack>
        <Button onClick={() => onBuy(cartItems, dispatch)}>Buy Products</Button>
    </Container>
  )
}
