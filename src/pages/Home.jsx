import React, { useState } from 'react'
import { Container, Button, Stack, Fab } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Product from '../component/Product'
import { nextPage, prevPage } from '../utils/utils'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function Home () {
  const navigate = useNavigate()
  const [first, setFirst] = useState(0)
  const [last, setLast] = useState(10)
  const productListComponent = []
  const products = useSelector((state) => state.products.products)
  const cartItems = useSelector((state) => state.cartItems.cartItems)
  const tenProducts = products.slice(first, last)
  tenProducts.forEach((product) => {
    productListComponent.push(
      <Product product={product} key={product.id} />
    )
  })

  return (
    <Container maxWidth="sm">
        <Stack spacing={2} sx={{ margin: '20px 0' }}>
          {productListComponent}
          <Stack direction='row' justifyContent='flex-end' spacing={2}>
            {first === 0 ? null : <Button variant="contained" onClick={() => prevPage(first, last, setFirst, setLast)}>Previous</Button>}
            {last === products.length ? null : <Button variant="contained" onClick={() => nextPage(first, last, setFirst, setLast)}>Next</Button>}
          </Stack>
        </Stack>
        {cartItems.length > 0
          ? <Fab
              variant="extended"
              color="primary"
              aria-label="check out"
              onClick={() => navigate('/CheckOut')}
              sx={{
                margin: 0,
                top: 'auto',
                right: 250,
                bottom: 20,
                left: 'auto',
                position: 'fixed'
              }}>
                <ShoppingCartIcon sx={{ mr: 1 }}/>
              Check Out
            </Fab>
          : null}
    </Container>
  )
}
