import React from 'react'
import { Container, Button, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Product from '../component/Product'

export default function Home () {
  const navigate = useNavigate()
  const productListComponent = []
  const products = useSelector((state) => state.products.products)
  products.forEach((product) => {
    productListComponent.push(
      <Product product={product} />
    )
  })
  return (
    <Container>
        <Button onClick={() => navigate('/CheckOut')}>CheckOut</Button>
        <Stack spacing={2}>
            {productListComponent}
        </Stack>
    </Container>
  )
}
