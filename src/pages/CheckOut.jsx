import React from 'react'
import { Container, Button, Stack, Typography, Card, CardContent } from '@mui/material'
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
    <Container maxWidth="sm">
      <Stack spacing={2} sx={{ margin: '80px 0 20px' }}>
        {cartItems.length > 0
          ? <>
              {cartListComponent}
            </>
          : <>
            <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography>
                  Tidak ada barang di cart
                </Typography>
              </CardContent>
            </Card>
          </> }
        <Stack direction='row' justifyContent='flex-end' spacing={2}>
          <Button variant="contained" onClick={() => navigate('/')}>Back to Home</Button>
          {cartItems.length > 0 ? <Button variant="contained" onClick={() => onBuy(products, dispatch, navigate)}>Buy Products</Button> : null }
        </Stack>
      </Stack>
    </Container>
  )
}
