import React from 'react'
import { Container, Button, Stack, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onBuy } from '../utils/utils'
import Product from '../component/Product'

export default function CheckOut () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartListComponent = []
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  const products = useSelector((state) => state.products.products)
  cartItems.forEach((product) => {
    cartListComponent.push(
        <Product product={product} key={product.id} />
    )
  })
  return (
    <Container>
        {cartItems.length > 0
          ? <>
              <Stack spacing={2}>
                {cartListComponent}
              </Stack>
              <Button onClick={() => onBuy(products, dispatch, navigate)}>Buy Products</Button>
            </>
          : <Typography>Tidak ada barang</Typography> }
          <Button onClick={() => navigate('/')}>Back to Home</Button>
    </Container>
  )
}
